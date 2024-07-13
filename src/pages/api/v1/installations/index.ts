import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../pocketbase";
import config from "next/config";
import NextCors from "nextjs-cors";
import { GrowthBook } from "@growthbook/growthbook";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "**",
    optionsSuccessStatus: 200,
  });

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
  const user = paziresh24User.data?.users[0];
  const paziresh24Provider = await axios.get(
    `https://apigw.paziresh24.com/v1/providers?user_id=${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const provider = paziresh24Provider.data?.providers[0];

  if (provider?.job_title !== "doctor") {
    return res.status(200).json([]);
  }

  const growthbook = new GrowthBook({
    apiHost: "https://growthbook-api.paziresh24.com",
    clientKey: "sdk-St1dBftdp07geqtD",
  });

  growthbook.setAttributes({
    user_id: Number(user?.id),
  });

  await growthbook.init({ timeout: 1000, skipCache: true });

  const apps = await pb.collection("apps").getFullList({
    expand: "app",
  });

  const menus = await pb.collection("menus").getFullList({});

  res.status(200).json(
    apps
      .map((app) => ({
        id: app.id,
        key: app.key,
        client_key: app.client_key,
        name: {
          fa: app.name_fa,
          en: app.name_en,
        },
        display_name: growthbook.getFeatureValue<any>(`hamdast::${app.key}`, {})
          ?.display_name || {
          fa: app.display_name_fa,
          en: app.display_name_en,
        },
        icon:
          growthbook.getFeatureValue<any>(`hamdast::${app.key}`, {})?.icon ||
          app.icon,
        fragments: [
          {
            type: "menu",
            options: menus
              .filter((menu) => menu.app === app.id)
              .map((menu) => ({
                id: menu.id,
                key: menu.key,
                name: growthbook.getFeatureValue<any>(
                  `hamdast::${app.key}-${menu.key}`,
                  {}
                )?.name || {
                  fa: menu.name_fa,
                  en: menu.name_en,
                },
                embed_src:
                  growthbook.getFeatureValue<any>(
                    `hamdast::${app.key}-${menu.key}`,
                    {}
                  )?.embed_src || menu.embed_src,
              })),
          },
        ],
      }))
      .filter(
        (app) =>
          !growthbook.getFeatureValue<any>(`hamdast::${app.key}`, {}).hide
      )
  );
}
