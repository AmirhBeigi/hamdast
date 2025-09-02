import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../../../pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
  });
  const { app_id } = req.query;
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  let user;
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

  if (req.method === "GET") {
    await pb.admins.authWithPassword(
      publicRuntimeConfig.POCKETBASE_USER_NAME,
      publicRuntimeConfig.POCKETBASE_PASSWORD
    );

    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    if (!record) {
      return res.status(401).json({});
    }

    const app = await pb
      .collection("apps")
      .getFirstListItem(`collaborators~'${record.id}' && id = '${app_id}'`);

    if (!app.tokens?.katibe) {
      return res.status(200).json({});
    }

    const wallet = await axios.get(
      `https://apigw.paziresh24.com/katibe/v1/transactions/balance`,
      {
        params: {
          userid: app.key,
        },
        headers: {
          token: process.env.KATIBE_TOKEN,
        },
      }
    );

    return res.status(200).json({
      balance: (wallet.data?.data?.balance * 0.7).toFixed(0),
      withdrawable: wallet.data?.data?.balance,
    });
  }
}
