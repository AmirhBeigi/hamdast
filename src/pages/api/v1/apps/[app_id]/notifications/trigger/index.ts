import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { notificationPB, pb } from "../../../../../../../../pocketbase";
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
  pb.autoCancellation(false);
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

      try {
        const data = await axios.post(
          "https://app.najva.com/notification/api/v1/notifications/",
          {
            api_key: api_key ? api_key : publicRuntimeConfig.NAJVA_API_KEY,
            subscriber_tokens: subscribers.map((item) => item.subscriber_token),
            ...rest,
          },
          {
            headers: {
              authorization: `Token ${publicRuntimeConfig.NAJVA_TOKEN}`,
            },
          }
        );

        return res.status(200).json({
          ...data.data,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return res.status(error?.status ?? 500).json({
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