import axios, { AxiosResponse } from "axios";
import { createHmac } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig, serverRuntimeConfig } = config();


const SESSION_TTL_MS = 1 * 60 * 1000;
const JWT_ALGORITHM = "HS256";

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
  const signature = encodeBase64Url(
    createHmac("sha256", secret)
      .update(`${header}.${body}`)
      .digest("base64")
  );

  return `${header}.${body}.${signature}`;
};

const normalizeScopes = (scopeInput: unknown): string[] => {
  if (Array.isArray(scopeInput)) {
    return scopeInput
      .map((scope) => String(scope).trim())
      .filter(Boolean);
  }

  if (typeof scopeInput === "string") {
    return scopeInput
      .split(" ")
      .map((scope) => scope.trim())
      .filter(Boolean);
  }

  return [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
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
    return res.status(200).end();
  }
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const cookieStore = req.cookies;
  const { app_id } = req.query;
  const scopes = normalizeScopes(req.body?.scope);
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");

  if (!token) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  const paziresh24User = (await axios
    .get("https://apigw.paziresh24.com/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token?.trim()}`,
      },
    })
    .catch(() => {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    })) as AxiosResponse<any, any>;

  const user = paziresh24User.data?.users?.[0];

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const app = await pb
    .collection("apps")
    .getFirstListItem(`key = '${app_id}'`);

  if (!app) {
    return res.status(401).json({});
  }

  const now = Date.now();
  const expiresAt = now + SESSION_TTL_MS;
  const jwtSecret = serverRuntimeConfig.HAMDAST_SESSION_JWT_SECRET;

  if (!jwtSecret) {
    return res.status(500).json({
      message: "Session token secret is not configured.",
    });
  }

  const sessionToken = createSessionToken(
    {
      sub: user.id?.toString(),
      aud: app?.id?.toString(),
      scope: scopes,
      iat: Math.floor(now / 1000),
      exp: Math.floor(expiresAt / 1000),
    },
    jwtSecret
  );

  return res.status(200).json({
    session_token: sessionToken,
    expires_at: new Date(expiresAt).toISOString(),
  });
}
