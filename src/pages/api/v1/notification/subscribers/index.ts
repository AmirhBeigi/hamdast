import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB, pb } from "../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
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
      paziresh24_user_id: user_id,
    });
    return res.status(204).json({});
  } catch (error) {
    return res.status(500).json({});
  }
}
