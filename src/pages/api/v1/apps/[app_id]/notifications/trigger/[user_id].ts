import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB, pb } from "../../../../../../../../pocketbase";
import config from "next/config";
import NextCors from "nextjs-cors";
import moment from "jalali-moment";
import { RecordModel } from "pocketbase";
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

  const { app_id, user_id } = req.query;
  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  try {
    let record;
    try {
      record = await pb
        .collection("users")
        .getFirstListItem(`api_key="${apiKey}"`, {
          expand: "role",
          cache: "force-cache",
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });
    } catch (error) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (!record) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (req.method === "POST") {
      const { subscriber_tokens, api_key, ...rest } = req.body;

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

      const sendNotification = (subscribers: string[]) => {
        return axios.post(
          "https://app.najva.com/api/v2/notification/management/send-direct/",
          {
            icon: "https://www.paziresh24.com/img/pz24-icon.png",
            buttons: [],
            utm: {},
            onclick_action: 0,
            url: "https://www.paziresh24.com",
            ...rest,
            subscribers: subscribers,
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
      };

      try {
        const data = await sendNotification(
          subscribers.map((item) => item.subscriber_token)
        );

        return res.status(200).json({
          ...data.data,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status == 400) {
            const invalidSubscriber =
              error?.response?.data?.subscribers?.[0]
                ?.replace("Invalid subscriber: ", "")
                ?.split(", ") ?? [];

            if (
              Array.isArray(invalidSubscriber) &&
              invalidSubscriber?.length != 0
            ) {
              try {
                const data = await sendNotification(
                  subscribers
                    .filter(
                      (item) =>
                        !invalidSubscriber?.includes(item.subscriber_token)
                    )
                    .map((item) => item.subscriber_token)
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
          }
          return res.status(error.response?.status ?? 500).json({
            ...(error?.response?.data ?? {}),
          });
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
}
