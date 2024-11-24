import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../pocketbase";
import config from "next/config";
import { ClientResponseError } from "pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const cookieStore = req.cookies;
  const { app_id, menu_id } = req.query;
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
        Authorization: `Bearer ${token?.trim()}`,
      },
    }
  );
  const user = paziresh24User.data?.users[0];

  const record = await pb
    .collection("users")
    .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
      expand: "role",
    });

  if (req.method == "PUT") {
    const { key, name_fa, embed_src, unread_endpoint } = req.body;

    try {
      const menu = await pb.collection("menus").update(menu_id as string, {
        name_fa: name_fa,
        embed_src: embed_src,
        unread_endpoint: unread_endpoint,
        app: app_id,
      });
      res.status(200).json({
        id: menu.id,
        key: menu.key,
        name_en: menu.name_en,
        name_fa: menu.name_fa,
        embed_src: menu.embed_src,
        unread_endpoint: menu.unread_endpoint,
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
