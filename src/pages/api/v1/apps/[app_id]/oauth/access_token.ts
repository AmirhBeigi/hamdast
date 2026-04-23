import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import { createHmac, timingSafeEqual } from "crypto";
import config from "next/config";

const { publicRuntimeConfig } = config();
const JWT_ALGORITHM = "HS256";

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

const createJwtToken = (payload: Record<string, unknown>, secret: string): string => {
  const header = encodeBase64Url(JSON.stringify({ alg: JWT_ALGORITHM, typ: "JWT" }));
  const body = encodeBase64Url(JSON.stringify(payload));
  const signature = encodeBase64Url(
    createHmac("sha256", secret)
      .update(`${header}.${body}`)
      .digest("base64")
  );

  return `${header}.${body}.${signature}`;
};

const verifySessionToken = (
  token: string,
  secret: string
): { sub?: string; aud?: string; scope?: string[]; exp?: number } | null => {
  const [headerPart, payloadPart, signaturePart] = token.split(".");
  if (!headerPart || !payloadPart || !signaturePart) return null;

  const expectedSignature = Buffer.from(
    createHmac("sha256", secret).update(`${headerPart}.${payloadPart}`).digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "")
  );
  const providedSignature = Buffer.from(signaturePart);

  if (
    expectedSignature.length !== providedSignature.length ||
    !timingSafeEqual(Uint8Array.from(expectedSignature), Uint8Array.from(providedSignature))
  ) {
    return null;
  }

  const payload = JSON.parse(decodeBase64Url(payloadPart));
  const exp = Number(payload?.exp);
  if (!exp || Date.now() >= exp * 1000) return null;

  const scopes = Array.isArray(payload?.scope)
    ? payload.scope.map((scope: unknown) => String(scope).trim()).filter(Boolean)
    : [];

  return {
    sub: payload?.sub?.toString(),
    aud: payload?.aud?.toString(),
    scope: scopes,
    exp,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  pb.autoCancellation(false);
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  const apiKey = String(req.body?.api_key || "").trim();
  const sessionToken = String(req.body?.session_token || "").trim();
  const appKey = String(req.query?.app_id || "").trim();

  if (!apiKey || !sessionToken || !appKey) {
    return res.status(400).json({
      message: "api_key, session_token and app_id are required.",
    });
  }

  try {
    const developer = await pb.collection("users").getFirstListItem(`api_key="${apiKey}"`, {
      expand: "role",
      cache: "force-cache",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    const app = await pb
      .collection("apps")
      .getFirstListItem(`collaborators~'${developer.id}' && key='${appKey}'`);

    if (!app) {
      return res.status(403).json({
        message: "Developer is not authorized for this app.",
      });
    }

    const sessionSecret = process.env.HAMDAST_SESSION_JWT_SECRET || "";
    const sessionPayload = sessionSecret
      ? verifySessionToken(sessionToken, sessionSecret)
      : null;

    if (!sessionPayload?.sub || sessionPayload.aud !== app.id) {
      return res.status(403).json({
        message: "Invalid session token.",
      });
    }

    const accessSecret = process.env.HAMDAST_ACCESS_JWT_SECRET || sessionSecret;
    if (!accessSecret) {
      return res.status(500).json({
        message: "Access token secret is not configured.",
      });
    }

    const accessToken = createJwtToken(
      {
        sub: sessionPayload.sub,
        aud: app.id,
        scope: sessionPayload.scope || [],
        iat: Math.floor(Date.now() / 1000),
      },
      accessSecret
    );

    return res.status(200).json({
      access_token: accessToken,
      token_type: "Bearer",
    });
  } catch (_error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
