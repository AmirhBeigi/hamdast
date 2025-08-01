import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../pocketbase";
import config from "next/config";
import { RecordModel } from "pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  if (!token) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let user = null;
  try {
    const paziresh24User = await axios.get(
      "https://apigw.paziresh24.com/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token?.trim()}`,
        },
      }
    );
    user = paziresh24User.data?.users[0];
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let record: RecordModel;
  try {
    record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have access to Hamdast.",
    });
  }

  if (req.method === "GET") {
    const credentials = await pb.collection("credentials").getFullList({
      filter: `user='${record.id}'`,
    });

    return res.status(200).json(
      credentials.map((credential) => ({
        id: credential.id,
        api_key: credential.api_key,
        name: credential.name,
      }))
    );
  }

  if (req.method === "POST") {
    try {
      const { name, code } = req.body;
      if (!name && !code) {
        return res.status(400).json({});
      }
      const hamdastToken = await axios.post(
        "https://user.paziresh24.com/realms/paziresh24/protocol/openid-connect/token",
        {
          grant_type: "authorization_code",
          client_id: process.env.GOZARGAH_CLIENT_ID,
          client_secret: process.env.GOZARGAH_CLIENT_SECRET,
          redirect_uri: process.env.GOZARGAH_REDIRECT_URI,
          code,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const credential = await pb.collection("credentials").create({
        name,
        user: record.id,
        api_key: hamdastToken?.data?.access_token,
      });

      return res.status(200).json({
        id: credential.id,
        api_key: credential.api_key,
        name: credential.name,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return res.status(502).json(error.response?.data);
      }
    }
  }
}
