import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB, pb } from "../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "use GET method",
    });
  }
  pb.autoCancellation(false);
  notificationPB.autoCancellation(false);

  const { app_id, user_id } = req.query;
  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
  try {
    const record = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
      });

    if (!record) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (req.method === "GET") {
      await notificationPB.admins.authWithPassword(
        publicRuntimeConfig.POCKETBASE_USER_NAME,
        publicRuntimeConfig.POCKETBASE_PASSWORD
      );
      let subscribers: any[] = [];
      try {
        subscribers = await notificationPB
          .collection("subscribers")
          .getFullList({
            filter: `paziresh24_user_id="${user_id}"`,
          });
      } catch (error) {
        return res.status(403).json({
          message: "user_id not found",
        });
      }

      if (subscribers?.length === 0) {
        return res.status(403).json({
          message: "user_id not found",
        });
      }

      return res.status(200).json({
        user_id,
        subscriber_tokens: subscribers.map((item) => item.subscriber_token),
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
