import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import { ClientResponseError } from "pocketbase";
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

  if (req.method == "GET") {
    const menus = await pb.collection("menus").getFullList({
      filter: `app="${app_id}"`,
    });

    res.status(200).json(
      menus.map((menu) => ({
        id: menu.id,
        key: menu.key,
        name_en: menu.name_en,
        name_fa: menu.name_fa,
        embed_src: menu.embed_src,
      }))
    );
  }

  if (req.method == "POST") {
    const { key, name_fa, embed_src } = req.body;

    try {
      const menu = await pb.collection("menus").create({
        key: key,
        name_fa: name_fa,
        embed_src: embed_src,
        app: app_id,
      });
      res.status(200).json({
        id: menu.id,
        key: menu.key,
        name_en: menu.name_en,
        name_fa: menu.name_fa,
        embed_src: menu.embed_src,
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
