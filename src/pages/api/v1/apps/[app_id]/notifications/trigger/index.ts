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

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "use POST method",
    });
  }
  pb.autoCancellation(false);
  notificationPB.autoCancellation(false);

  const { app_id } = req.query;
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

    if (req.method === "POST") {
      const { user_id, subscriber_tokens, api_key, ...rest } = req.body;
      await notificationPB.admins.authWithPassword(
        publicRuntimeConfig.POCKETBASE_USER_NAME,
        publicRuntimeConfig.POCKETBASE_PASSWORD
      );
      if (!user_id) {
        return res.status(404).json({
          message: "user_id not found",
        });
      }
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

      try {
        const data = await axios.post(
          "https://app.najva.com/api/v2/notification/management/send-direct/",
          {
            icon: "https://www.paziresh24.com/img/pz24-icon.png",
            buttons: [],
            utm: {},
            onclick_action: 0,
            url: "https://www.paziresh24.com",
            ...rest,
            subscribers: subscribers.map((item) => item.subscriber_token),
          },
          {
            headers: {
              authorization: `Token ${publicRuntimeConfig.NAJVA_TOKEN}`,
              "x-api-key": api_key
                ? api_key
                : publicRuntimeConfig.NAJVA_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        return res.status(200).json({
          ...data.data,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return res.status(error.response?.status ?? 500).json({
            ...(error?.response?.data ?? {}),
          });
        }
      }
    }
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
