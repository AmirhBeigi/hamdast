import axios from "axios";
import { createHmac } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig, serverRuntimeConfig } = config();

const SESSION_TTL_MS = 1 * 60 * 1000;
const JWT_ALGORITHM = "HS256";
const JWT_ISSUER = "hamdast";

const encodeBase64Url = (value: string) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const createSessionToken = (
  payload: Record<string, unknown>,
  secret: string
): string => {
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

const createRequestId = () =>
  `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

const logInfo = (requestId: string, message: string, data?: Record<string, unknown>) => {
  console.info("[oauth/session_token]", {
    requestId,
    message,
    ...(data || {}),
  });
};

const logError = (requestId: string, message: string, data?: Record<string, unknown>) => {
  console.error("[oauth/session_token]", {
    requestId,
    message,
    ...(data || {}),
  });
};

const sendError = (
  res: NextApiResponse<any>,
  requestId: string,
  status: number,
  code: string,
  message: string,
  details?: Record<string, unknown>
) =>
  res.status(status).json({
    success: false,
    error: {
      code,
      message,
      details: details || null,
      request_id: requestId,
    },
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

  if (upstreamStatus === 401) {
    return {
      status: 401,
      code: "PAZIRESH24_AUTH_FAILED",
      message: "Authentication with upstream provider failed.",
      details: {
        upstream_status: 401,
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

const normalizeScopes = (scopeInput: unknown): string[] => {
  if (Array.isArray(scopeInput)) {
    return scopeInput
      .map((scope) => String(scope).trim())
      .filter(Boolean);
  }

  if (typeof scopeInput === "string") {
    return scopeInput
      .split(/[,\s]+/)
      .map((scope) => scope.trim())
      .filter(Boolean);
  }

  return [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const requestId = createRequestId();

  logInfo(requestId, "request_received", { method: req.method });

  await NextCors(req, res, {
    methods: ["POST", "OPTIONS"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
    headers: [
      "X-CSRF-Token",
      "x-xsrf-token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Date",
      "X-Api-Version",
      "token",
      "Authorization",
    ],
  });

  if (req.method === "OPTIONS") {
    logInfo(requestId, "options_preflight");
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return sendError(res, requestId, 405, "METHOD_NOT_ALLOWED", "Method Not Allowed", {
      allowed_methods: ["POST"],
    });
  }

  const cookieStore = req.cookies;
  const appId = String(req.query?.app_id || "").trim();
  const scopes = normalizeScopes(req.body?.scope);
  const tokenFromHeader = String(req.headers.authorization || "").replace(
    /^Bearer\s+/i,
    ""
  );
  const token = String(cookieStore["token"] || tokenFromHeader || "").trim();

  if (!appId) {
    return sendError(
      res,
      requestId,
      400,
      "INVALID_APP_ID",
      "app_id is required in route params."
    );
  }

  if (!token) {
    return sendError(
      res,
      requestId,
      401,
      "AUTH_TOKEN_MISSING",
      "Authentication credentials were not provided."
    );
  }

  try {
    pb.autoCancellation(false);
    logInfo(requestId, "pocketbase_query_started");

    const paziresh24User = await axios.get("https://apigw.paziresh24.com/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = paziresh24User.data?.users?.[0];

    if (!user?.id) {
      return sendError(res, requestId, 401, "USER_UNAUTHORIZED", "Unauthorized user.");
    }

    const app = await pb.collection("apps").getFirstListItem(`key = '${appId}'`, {
      cache: "force-cache",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    if (!app?.id) {
      return sendError(
        res,
        requestId,
        404,
        "APP_NOT_FOUND",
        "Requested app was not found.",
        { app_id: appId }
      );
    }

    const jwtSecret = serverRuntimeConfig.HAMDAST_SESSION_JWT_SECRET;
    if (!jwtSecret) {
      return sendError(
        res,
        requestId,
        500,
        "SESSION_SECRET_MISSING",
        "Session token secret is not configured."
      );
    }

    const now = Date.now();
    const expiresAt = now + SESSION_TTL_MS;
    const sessionToken = createSessionToken(
      {
        iss: JWT_ISSUER,
        sub: user.id.toString(),
        aud: app.id.toString(),
        scope: scopes,
        iat: Math.floor(now / 1000),
        exp: Math.floor(expiresAt / 1000),
      },
      jwtSecret
    );

    logInfo(requestId, "session_token_created", {
      app_id: appId,
      user_id: user.id?.toString(),
      scope_count: scopes.length,
      expires_at: new Date(expiresAt).toISOString(),
    });

    return res.status(200).json({
      success: true,
      session_token: sessionToken,
      expires_at: new Date(expiresAt).toISOString(),
      request_id: requestId,
    });
  } catch (error: any) {
    const operationalError = mapOperationalError(error);
    logError(requestId, "session_token_generation_failed", {
      reason: error?.message || "unknown_error",
      mapped_code: operationalError.code,
      mapped_status: operationalError.status,
      details: operationalError.details,
      is_axios_error: axios.isAxiosError(error),
    });

    return sendError(
      res,
      requestId,
      operationalError.status,
      operationalError.code,
      operationalError.message,
      operationalError.details
    );
  }
}
