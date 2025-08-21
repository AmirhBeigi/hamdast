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

  console.log(record);
  const app = await pb
    .collection("apps")
    .getFirstListItem(`collaborators~'${record.id}' && id="${app_id}"`);

  if (req.method == "GET") {
    try {
      const page = await pb
        .collection("pages")
        .getFirstListItem(`app="${app_id}" && key="launcher"`);

      return res.status(200).json({
        embed_src: page.embed_src,
        display_name_fa: app?.display_name_fa,
        description: app?.description,
      });
    } catch (error) {
      return res.status(200).json({
        embed_src: "",
        display_name_fa: "",
        description: "",
      });
    }
  }

  if (req.method == "POST") {
    const { embed_src, display_name_fa, description } = req.body;

    try {
      await pb.collection("apps").update(app.id, {
        display_name_fa: display_name_fa,
        description: description,
        published: true,
      });

      const page = await pb
        .collection("pages")
        .getFirstListItem(`app="${app_id}" && key="launcher"`);

      if (page?.id) {
        await pb.collection("pages").update(page.id, {
          key: "launcher",
          name_fa: display_name_fa,
          embed_src: embed_src,
          app: app_id,
          layout: {
            show_appbar: true,
            show_bottom_navigation: true,
            show_footer: false,
            show_header: false,
          },
          parameters: [],
          is_protected_route: true,
        });
      } else {
        await pb.collection("pages").create({
          key: "launcher",
          name_fa: display_name_fa,
          embed_src: embed_src,
          app: app_id,
          layout: {
            show_appbar: true,
            show_bottom_navigation: true,
            show_footer: false,
            show_header: false,
          },
          parameters: [],
          is_protected_route: true,
        });
      }
      res.status(200).json({});
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
