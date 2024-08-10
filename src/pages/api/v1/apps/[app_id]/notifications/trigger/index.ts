import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const cookieStore = req.cookies;
  const { app_id } = req.query;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
  try {
    const paziresh24User = await axios.get(
      "https://apigw.paziresh24.com/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = paziresh24User.data?.users[0];
    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    if (req.method === "POST") {
      const { ...rest } = req.body;

      try {
        const data = await axios.post(
          "https://app.najva.com/notification/api/v1/notifications/",
          {
            api_key: publicRuntimeConfig.NAJVA_API_KEY,
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
    return res.status(405).json({
      message: "use POST method",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
