import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import { createHmac, timingSafeEqual } from "crypto";
import config from "next/config";

const { publicRuntimeConfig, serverRuntimeConfig } = config();
const JWT_ALGORITHM = "HS256";
const JWT_ISSUER = "hamdast";

const encodeBase64Url = (value: string) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const decodeBase64Url = (value: string): string => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4 || 4)) % 4);
  return Buffer.from(padded, "base64").toString("utf8");
};

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
  legacy_signature?: boolean;
  payload?: {
    sub?: string;
    aud?: string;
    scope?: string[];
    exp?: number;
  };
};

const createJwtToken = (payload: Record<string, unknown>, secret: string): string => {
  const header = encodeBase64Url(JSON.stringify({ alg: JWT_ALGORITHM, typ: "JWT" }));
  const body = encodeBase64Url(JSON.stringify(payload));
  const signature = createHmac("sha256", secret)
    .update(`${header}.${body}`)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

  return `${header}.${body}.${signature}`;
};

const verifySessionToken = (
  token: string,
  secret: string
): VerifySessionTokenResult => {
  const [headerPart, payloadPart, signaturePart] = token.split(".");
  if (!headerPart || !payloadPart || !signaturePart) {
    return { valid: false, reason: "invalid_format" };
  }

  const rawSignatureBase64 = createHmac("sha256", secret)
    .update(`${headerPart}.${payloadPart}`)
    .digest("base64");
  const expectedSignature = rawSignatureBase64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
  // Backward compatibility for tokens generated with old bug:
  // signature = base64url(base64(hmac)) instead of plain base64url(hmac).
  const legacyExpectedSignature = encodeBase64Url(rawSignatureBase64);

  const safeEqualUtf8 = (a: string, b: string) => {
    const aBuffer = Buffer.from(a, "utf8");
    const bBuffer = Buffer.from(b, "utf8");
    return (
      aBuffer.length === bBuffer.length &&
      timingSafeEqual(Uint8Array.from(aBuffer), Uint8Array.from(bBuffer))
    );
  };

  const standardSignatureMatched = safeEqualUtf8(expectedSignature, signaturePart);
  const legacySignatureMatched = safeEqualUtf8(legacyExpectedSignature, signaturePart);

  if (!standardSignatureMatched && !legacySignatureMatched) {
    return { valid: false, reason: "invalid_signature" };
  }

  let header: any;
  let payload: any;

  try {
    header = JSON.parse(decodeBase64Url(headerPart));
    payload = JSON.parse(decodeBase64Url(payloadPart));
  } catch {
    return { valid: false, reason: "invalid_json" };
  }

  if (header?.alg !== JWT_ALGORITHM || header?.typ !== "JWT") {
    return { valid: false, reason: "invalid_header" };
  }
  if (payload?.iss && payload.iss !== JWT_ISSUER) {
    return { valid: false, reason: "invalid_issuer" };
  }

  const exp = Number(payload?.exp);
  if (!exp) {
    return { valid: false, reason: "missing_exp" };
  }
  if (Date.now() >= exp * 1000 + 15_000) {
    return { valid: false, reason: "token_expired" };
  }

  const scopes = Array.isArray(payload?.scope)
    ? payload.scope.map((scope: unknown) => String(scope).trim()).filter(Boolean)
    : [];

  return {
    valid: true,
    legacy_signature: legacySignatureMatched,
    payload: {
      sub: payload?.sub?.toString(),
      aud: payload?.aud?.toString(),
      scope: scopes,
      exp,
    },
  };
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

    const verifiedSession = verifySessionToken(sessionToken, sessionSecret);
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
          accepted_legacy_signature: verifiedSession.legacy_signature || false,
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

    const accessToken = createJwtToken(
      {
        iss: JWT_ISSUER,
        sub: sessionPayload.sub,
        aud: app.id,
        scope: sessionPayload.scope || [],
        iat: Math.floor(Date.now() / 1000),
      },
      accessSecret
    );

    logInfo(requestId, "access_token_created", {
      app_id: appKey,
      user_id: sessionPayload.sub,
      scope_count: (sessionPayload.scope || []).length,
      legacy_signature_token: verifiedSession.legacy_signature || false,
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
