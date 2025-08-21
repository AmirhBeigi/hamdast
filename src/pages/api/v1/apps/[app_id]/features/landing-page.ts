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

  const app = await pb
    .collection("apps")
    .getFirstListItem(`collaborators~'${record.id}' && id="${app_id}"`);

  if (req.method == "GET") {
    try {
      const landing = await pb
        .collection("landings")
        .getFirstListItem(`app="${app_id}"`);

      return res.status(200).json({
        ...landing,
      });
    } catch (error) {
      return res.status(200).json({});
    }
  }

  if (req.method == "POST") {
    const { ...rest } = req.body;

    try {
      let page: any;
      try {
        page = await pb
          .collection("pages")
          .getFirstListItem(`app="${app_id}" && key="launcher"`);
      } catch (error) {}

      let landing;
      try {
        landing = await pb
          .collection("landings")
          .getFirstListItem(`app="${app_id}" && key="launcher"`);

        if (landing?.id) {
          await pb.collection("landings").update(landing.id, {
            ...rest,
          });
        }
        if (!landing?.id) {
          await pb.collection("landings").create({
            ...rest,
            app: app.id,
          });
          if (page?.id) {
            await pb.collection("pages").update(page?.id, {
              layout: {
                show_appbar: true,
                show_bottom_navigation: true,
                show_footer: false,
                show_header: false,
                show_landing: true,
              },
            });
          }
        }
      } catch (error) {
        await pb.collection("landings").create({
          ...rest,
          app: app.id,
        });
        if (page?.id) {
          await pb.collection("pages").update(page?.id, {
            layout: {
              show_appbar: true,
              show_bottom_navigation: true,
              show_footer: false,
              show_header: false,
              show_landing: true,
            },
          });
        }
      }

      res.status(200).json({});
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
