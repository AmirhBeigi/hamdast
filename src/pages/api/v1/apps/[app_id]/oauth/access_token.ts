import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import { jwtVerify, SignJWT } from "jose";

const { publicRuntimeConfig, serverRuntimeConfig } = config();
const JWT_ISSUER = "hamdast";

const createRequestId = () =>
  `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

const logInfo = (requestId: string, message: string, data?: Record<string, unknown>) => {
  console.info("[oauth/access_token]", {
    requestId,
    message,
    ...(data || {}),
  });
};

const logError = (requestId: string, message: string, data?: Record<string, unknown>) => {
  console.error("[oauth/access_token]", {
    requestId,
    message,
    ...(data || {}),
  });
};

const sendError = (
  res: NextApiResponse<any>,
  status: number,
  code: string,
  message: string,
  details?: Record<string, unknown>
) =>
  res.status(status).json({
    code,
    message,
    details: details || null,
  });

const mapOperationalError = (error: any) => {
  const causeCode = error?.originalError?.cause?.code || error?.cause?.code;
  const upstreamStatus = Number(error?.status || error?.response?.status || 0) || undefined;
  const upstreamMessage =
    error?.response?.message || error?.response?.data?.message || error?.message;

  if (causeCode === "ENOTFOUND" || causeCode === "UND_ERR_CONNECT_TIMEOUT") {
    return {
      status: 503,
      code: "UPSTREAM_UNAVAILABLE",
      message: "Service dependency is unavailable.",
      details: {
        cause_code: causeCode,
        upstream_status: upstreamStatus || null,
        upstream_message: upstreamMessage || null,
      },
    };
  }

  if (upstreamStatus === 400 && upstreamMessage === "Failed to authenticate.") {
    return {
      status: 500,
      code: "POCKETBASE_ADMIN_AUTH_FAILED",
      message: "Server authentication with PocketBase failed.",
      details: {
        upstream_status: upstreamStatus,
        upstream_message: upstreamMessage,
      },
    };
  }

  if (upstreamStatus === 0 && upstreamMessage) {
    return {
      status: 503,
      code: "UPSTREAM_CONNECTION_ERROR",
      message: "Could not connect to upstream service.",
      details: {
        upstream_status: 0,
        upstream_message: upstreamMessage,
      },
    };
  }

  return {
    status: 500,
    code: "INTERNAL_ERROR",
    message: "Something went wrong while processing your request.",
    details: {
      upstream_status: upstreamStatus || null,
      upstream_message: upstreamMessage || null,
      cause_code: causeCode || null,
    },
  };
};

type VerifySessionTokenResult = {
  valid: boolean;
  reason?: string;
  payload?: {
    sub?: string;
    aud?: string;
    scope?: string[];
    exp?: number;
  };
};

const verifySessionToken = async (
  token: string,
  secret: string
): Promise<VerifySessionTokenResult> => {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(secret), {
      algorithms: ["HS256"],
      issuer: JWT_ISSUER,
      clockTolerance: 15,
    });
    const payload = verified.payload as Record<string, unknown>;
    const scopes = Array.isArray(payload?.scope)
      ? payload.scope.map((scope: unknown) => String(scope).trim()).filter(Boolean)
      : [];
    const exp = Number(payload?.exp);
    return {
      valid: true,
      payload: {
        sub: payload?.sub?.toString(),
        aud: payload?.aud?.toString(),
        scope: scopes,
        exp: exp || undefined,
      },
    };
  } catch {
    return { valid: false, reason: "invalid_token" };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const requestId = createRequestId();
  logInfo(requestId, "request_received", { method: req.method });

  if (req.method !== "POST") {
    return sendError(res, 405, "METHOD_NOT_ALLOWED", "Method Not Allowed", {
      allowed_methods: ["POST"],
    });
  }

  const apiKey = String(req.headers?.["x-api-key"] || "").trim();
  const rawSessionToken =
    typeof req.body?.session_token === "string"
      ? req.body?.session_token
      : req.body?.session_token?.session_token || "";
  const sessionToken = String(rawSessionToken).replace(/^Bearer\s+/i, "").trim();
  const appKey = String(req.query?.app_id || "").trim();

  if (!apiKey || !sessionToken || !appKey) {
    return sendError(
      res,
      400,
      "INVALID_INPUT",
      "x-api-key header, session_token and app_id are required.",
      {
        has_api_key: Boolean(apiKey),
        has_session_token: Boolean(sessionToken),
        has_app_id: Boolean(appKey),
      }
    );
  }

  try {
    pb.autoCancellation(false);
    logInfo(requestId, "pocketbase_query_started", { app_id: appKey });

    const developer = await pb.collection("users").getFirstListItem(`api_key="${apiKey}"`, {
      expand: "role",
      cache: "force-cache",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    const app = await pb
      .collection("apps")
      .getFirstListItem(`collaborators~'${developer.id}' && key='${appKey}'`, {
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    if (!app) {
      return sendError(
        res,
        403,
        "DEVELOPER_NOT_AUTHORIZED",
        "Developer is not authorized for this app.",
        { app_id: appKey }
      );
    }

    const sessionSecret = serverRuntimeConfig.HAMDAST_SESSION_JWT_SECRET || "";
    if (!sessionSecret) {
      return sendError(
        res,
        500,
        "SESSION_SECRET_MISSING",
        "Session token secret is not configured."
      );
    }

    const verifiedSession = await verifySessionToken(sessionToken, sessionSecret);
    const sessionPayload = verifiedSession.payload;

    if (
      !verifiedSession.valid ||
      !sessionPayload?.sub ||
      sessionPayload.aud !== app.id
    ) {
      return sendError(
        res,
        403,
        "INVALID_SESSION_TOKEN",
        "Session token is invalid, expired, or audience does not match the app.",
        {
          expected_aud: app.id,
          actual_aud: sessionPayload?.aud || null,
          has_sub: Boolean(sessionPayload?.sub),
          verify_reason: verifiedSession.reason || null,
        }
      );
    }

    const accessSecret = serverRuntimeConfig.HAMDAST_ACCESS_JWT_SECRET || sessionSecret;
    if (!accessSecret) {
      return sendError(
        res,
        500,
        "ACCESS_SECRET_MISSING",
        "Access token secret is not configured."
      );
    }

    const accessToken = await new SignJWT({
      scope: sessionPayload.scope || [],
    })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuer(JWT_ISSUER)
      .setSubject(String(sessionPayload.sub))
      .setAudience(String(app.id))
      .setIssuedAt()
      .sign(new TextEncoder().encode(accessSecret));

    logInfo(requestId, "access_token_created", {
      app_id: appKey,
      user_id: sessionPayload.sub,
      scope_count: (sessionPayload.scope || []).length,
    });

    return res.status(200).json({
      access_token: accessToken,
      token_type: "Bearer",
    });
  } catch (error: any) {
    const operationalError = mapOperationalError(error);
    logError(requestId, "access_token_generation_failed", {
      reason: error?.message || "unknown_error",
      mapped_code: operationalError.code,
      mapped_status: operationalError.status,
      details: operationalError.details,
    });
    return sendError(
      res,
      operationalError.status,
      operationalError.code,
      operationalError.message,
      operationalError.details
    );
  }
}
