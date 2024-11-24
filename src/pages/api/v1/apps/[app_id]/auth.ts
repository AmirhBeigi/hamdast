import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
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
    .catch((error) => {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    })) as AxiosResponse<any, any>;
  const user = paziresh24User.data?.users?.[0];

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = Date.now();
  const sessionToken = Buffer.from(user.id + app_id + now).toString("base64");

  // Create user session
  const options = {
    method: "POST",
    url: `https://hamdast-logging.darkube.app/api/v1/logstream/sessions`,
    headers: {
      Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: [
      {
        session_token: sessionToken,
        user_id: user.id?.toString(),
        app_id: app_id,
        created_at: new Date(now).toISOString(),
        expires_at: new Date(now + 10 * 60 * 1000).toISOString(),
      },
    ],
  };
  await axios.request(options);

  return res.status(200).json({
    session_token: sessionToken,
    expires_at: new Date(now + 10 * 60 * 1000).toISOString(),
  });
}
