import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB } from "../../../../../../pocketbase";
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

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "use POST method",
    });
  }
  notificationPB.autoCancellation(false);
  const { user_id, subscriber_token } = req.body;
  await notificationPB.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
  if (!user_id || !subscriber_token) {
    return res.status(400).json({
      message: "user_id and subscriber_token!",
    });
  }
  try {
    await notificationPB.collection("subscribers").create({
      subscriber_token,
      paziresh24_user_id: user_id.toString(),
    });
    return res.status(204).json({});
  } catch (error) {
    return res.status(400).json({});
  }
}
