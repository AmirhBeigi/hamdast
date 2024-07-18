import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();
import moment from "jalali-moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const { app_id, menu_id, days_ago } = req.query;
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
    filter: `app="${app_id}" && menu="${menu_id}" && updated >= "${moment()
      .subtract(days_ago as string, "day")
      .startOf("day")
      .toISOString()}"`,
    sort: "-updated",
    fields: "id,user,device,browser,updated,created",
  });

  const items = session.map((item) => {
    return {
      id: item.id,
      user: item.user,
      device: item.device,
      browser: item.browser,
      updated_at: item.updated,
      created_at: item.created,
    };
  });

  res.status(200).json(items);
}
