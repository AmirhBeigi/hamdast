import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB, pb } from "../../../../../../../../pocketbase";
import config from "next/config";
import NextCors from "nextjs-cors";
import { RecordModel } from "pocketbase";
import moment from "jalali-moment";
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
      "x-api-key",
    ],
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

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

  try {
    const record = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    if (!record) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (req.method === "GET") {
      let subscribers: RecordModel[] = [];
      try {
        subscribers = await notificationPB
          .collection("subscribers")
          .getFullList({
            filter: `created <= "${moment()
              .subtract(10, "hour")
              .utc()
              .format(
                "YYYY-MM-DD HH:mm:ss"
              )}" && paziresh24_user_id="${user_id}"`,
            headers: {
              x_token: publicRuntimeConfig.NOTIFICATION_USERS_TOKEN,
            },
          });
      } catch (error) {
        return res.status(404).json({
          message: "user_id not found",
        });
      }

      if (subscribers?.length === 0) {
        return res.status(404).json({
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
