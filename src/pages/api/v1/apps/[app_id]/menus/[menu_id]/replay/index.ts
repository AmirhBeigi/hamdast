import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { app_id, menu_id } = req.query;
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");

  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  const paziresh24User = await axios.get(
    "https://apigw.paziresh24.com/v1/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const session = await pb.collection("replay").getFullList({
    filter: `app="${app_id}" && menu="${menu_id}"`,
  });

  res.status(200).json(
    session.map((item) => ({
      id: item.id,
      user: item.user,
      device: item.device,
      browser: item.browser,
      events: item.events,
      updated_at: item.updated,
      created_at: item.created,
    }))
  );
}
