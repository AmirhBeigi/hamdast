import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import NextCors from "nextjs-cors";
import { GrowthBook } from "@growthbook/growthbook";
import { ClientResponseError } from "pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { app_id: app_key, page_key } = req.query;
  pb.autoCancellation(false);
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
    headers: [
      "X-CSRF-Token",
      "x-xsrf-token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Date",
      "X-Api-Version",
      "token",
      "Authorization",
    ],
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");

  let user = null;

  if (req.method == "PUT" || req.method == "DELETE") {
    try {
      const paziresh24User = await axios.get(
        "https://apigw.paziresh24.com/v1/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token?.trim()}`,
          },
        }
      );
      user = paziresh24User.data?.users?.[0];
    } catch (error) {}
  }

  if (req.method == "PUT") {
    const { key, name_fa, embed_src, layout, parameters, is_protected_route } =
      req.body;

    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    try {
      const page = await pb.collection("pages").update(page_key as string, {
        key: key,
        name_fa: name_fa,
        embed_src: embed_src,
        app: app_key,
        layout,
        parameters,
        is_protected_route,
      });
      return res.status(200).json({
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
      return;
    }
  }

  if (req.method == "DELETE") {
    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    try {
      const page = await pb.collection("pages").delete(page_key as string);
      return res.status(202).json({});
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
      return;
    }
  }

  const growthbook = new GrowthBook({
    apiHost: "https://growthbook-api.paziresh24.com",
    clientKey: "sdk-St1dBftdp07geqtD",
  });

  await growthbook.init({ timeout: 1000 });

  let app;
  try {
    app = await pb
      .collection("apps")
      .getFirstListItem(`published = true && key = "${app_key}"`, {
        expand: "app",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(404).json({});
  }

  if (!app) {
    return res.status(404);
  }

  const menus = await pb.collection("menus").getFullList({
    headers: {
      x_token: publicRuntimeConfig.HAMDAST_TOKEN,
    },
  });

  const pages = await pb.collection("pages").getFullList({
    headers: {
      x_token: publicRuntimeConfig.HAMDAST_TOKEN,
    },
  });

  console.log("hi");

  res.status(200).json(
    [app].map((app) => ({
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
        {
          type: "pages",
          options: pages
            .filter((page) => page.app === app.id)
            .map((page) => ({
              id: page.id,
              key: page.key,
              name: growthbook.getFeatureValue<any>(
                `hamdast::${app.key}-${page.key}`,
                {}
              )?.name || {
                fa: page.name_fa,
                en: page.name_en,
              },
              embed_src:
                growthbook.getFeatureValue<any>(
                  `hamdast::${app.key}-${page.key}`,
                  {}
                )?.embed_src || page.embed_src,
              layout:
                growthbook.getFeatureValue<any>(
                  `hamdast::${app.key}-${page.key}`,
                  {}
                )?.layout || page.layout,
              parameters:
                growthbook.getFeatureValue<any>(
                  `hamdast::${app.key}-${page.key}`,
                  {}
                )?.parameters || page.parameters,
              is_protected_route:
                growthbook.getFeatureValue<any>(
                  `hamdast::${app.key}-${page.key}`,
                  {}
                )?.is_protected_route || page.is_protected_route,
            })),
        },
      ].filter(Boolean),
    }))[0]
  );
}
