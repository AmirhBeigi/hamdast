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

  if (req.method == "GET") {
    const pages = await pb.collection("pages").getFullList({
      filter: `app="${app_id}"`,
    });

    res.status(200).json(
      pages.map((page) => ({
        id: page.id,
        key: page.key,
        name_en: page.name_en,
        name_fa: page.name_fa,
        embed_src: page.embed_src,
        layout: page?.layout,
        parameters: page?.parameters,
        is_protected_route: page?.is_protected_route,
      }))
    );
  }

  if (req.method == "POST") {
    const { key, name_fa, embed_src, layout, parameters, is_protected_route } =
      req.body;

    try {
      const page = await pb.collection("pages").create({
        key: key,
        name_fa: name_fa,
        embed_src: embed_src,
        app: app_id,
        layout: layout,
        parameters: parameters,
        is_protected_route: is_protected_route,
      });
      res.status(200).json({
        id: page.id,
        key: page.key,
        name_en: page.name_en,
        name_fa: page.name_fa,
        embed_src: page.embed_src,
        layout: page?.layout,
        parameters: page?.parameters,
        is_protected_route: page?.is_protected_route,
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
