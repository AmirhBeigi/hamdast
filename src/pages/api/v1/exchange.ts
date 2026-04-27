import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { jwtVerify } from "jose";
import config from "next/config";

const { serverRuntimeConfig } = config();
const HAMDAST_AUTH_SERVICE_URL = process.env.HAMDAST_AUTH_SERVICE_URL || "";
const HAMDAST_AUTH_SERVICE_CLIENT_ID =
  process.env.HAMDAST_AUTH_SERVICE_CLIENT_ID || "";
const HAMDAST_AUTH_SERVICE_CLIENT_SECRET =
  process.env.HAMDAST_AUTH_SERVICE_CLIENT_SECRET || "";
const HAMDAST_ACCESS_JWT_SECRET = serverRuntimeConfig.HAMDAST_ACCESS_JWT_SECRET || "";
const JWT_ISSUER = "hamdast";

const requiredConfigIsMissing =
  !HAMDAST_AUTH_SERVICE_URL ||
  !HAMDAST_AUTH_SERVICE_CLIENT_ID ||
  !HAMDAST_AUTH_SERVICE_CLIENT_SECRET ||
  !HAMDAST_ACCESS_JWT_SECRET;

const normalizeScopes = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(/[|\s,]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const accessSecretBytes = new TextEncoder().encode(HAMDAST_ACCESS_JWT_SECRET);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "POST", "OPTIONS"],
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
    return res.status(200).end();
  }

  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (requiredConfigIsMissing) {
    return res.status(500).json({ message: "Auth service config is missing." });
  }

  const incomingToken = String(req.headers.authorization || "")
    .replace(/^Bearer\s+/i, "")
    .trim();
  if (!incomingToken) {
    return res.status(401).json({ message: "Missing authorization token header", status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    const verified = await jwtVerify(incomingToken, accessSecretBytes, {
      algorithms: ["HS256"],
      issuer: JWT_ISSUER,
      clockTolerance: 15,
    });
    payload = verified.payload as Record<string, unknown>;
  } catch {
    return res.status(401).json({ message: "Invalid token", status: 403 });
  }

  const requestedScope = String(req.query.scope || req.body?.scope || "").trim();
  const requestedScopes = requestedScope === "*" ? ["*"] : normalizeScopes(requestedScope);
  const allowedScopes = normalizeScopes(payload.scope);
  const userId = String(payload.sub || "").trim();
  const sourceClientId = String(payload.aud || "").trim();

  const hasScope =
    requestedScope === "*" ||
    requestedScopes.length === 0 ||
    requestedScopes.some((scope) => allowedScopes.includes(scope));
  if (!hasScope) {
    return res
      .status(403)
      .json({ message: `permission denied to ${requestedScope}`, status: 403 });
  }

  if (!userId) {
    return res.status(401).json({ message: "Invalid token", status: 403 });
  }

  try {
    const tokenResponse = await axios.post(
      `${HAMDAST_AUTH_SERVICE_URL}`,
      {
        user_id: userId,
        client_id: HAMDAST_AUTH_SERVICE_CLIENT_ID,
        client_secret: "$2a$12$6neTnX7ZjGeyWkJ/AlhMhuF/FwSTF//nsQvY4ya62DezoOk.4mYiO",
      },
      {
        proxy: false,
      }
    );

    const issuedToken = String(
      tokenResponse.data?.token ||
      tokenResponse.data?.access_token ||
      tokenResponse.data?.data?.token ||
      tokenResponse.data?.data?.access_token ||
      ""
    ).trim();
    if (!issuedToken) {
      return res
        .status(502)
        .json({ message: "Auth service did not return a token", status: 502 });
    }

    const existingCookie = String(req.headers.cookie || "").trim();
    const responseCookie = existingCookie
      ? `${existingCookie}; token=${issuedToken}`
      : `token=${issuedToken}`;
    const responseClientId = sourceClientId || HAMDAST_AUTH_SERVICE_CLIENT_ID;

    res.setHeader("Cookie", responseCookie);
    res.setHeader(
      "Set-Cookie",
      `token=${encodeURIComponent(issuedToken)}; Path=/; SameSite=Lax`
    );
    res.setHeader("Authorization", `Bearer ${issuedToken}`);
    res.setHeader("user_id", userId);
    res.setHeader("client_id", responseClientId);

    return res.status(200).json({
      token: issuedToken,
      user_id: userId,
      client_id: responseClientId,
      scope: requestedScope,
    });
  } catch (error: any) {
    return res.status(502).json({
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Could not issue Hamdast token",
      status: 502,
    });
  }
}
