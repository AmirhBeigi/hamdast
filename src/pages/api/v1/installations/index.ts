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

  if (!token) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let user = null;
  let provider = null;
  let attributes = {};
  try {
    const paziresh24User = await axios.get(
      "https://apigw.paziresh24.com/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
      }
    );
    user = paziresh24User.data?.users?.[0];
    const [paziresh24Provider, katibeAttributes] = await Promise.allSettled([
      axios.get(`https://apigw.paziresh24.com/v1/doctor/profile`, {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
        },
      }),
      axios.get("https://apigw.paziresh24.com/katibe/v1/p24/users/attributes", {
        params: {
          user_id: user.id,
        },
        headers: {
          cookie: req.headers?.cookie,
        },
        timeout: 1000,
      }),
    ]);

    if (katibeAttributes.status === "fulfilled") {
      attributes = {
        ...Object.entries(
          katibeAttributes.value?.data as Record<string, boolean>
        ).reduce((prev, current) => {
          return {
            ...prev,
            [`hamdast::katibe::${current[0]}`]: current[1],
          };
        }, {}),
      };
    }

    if (paziresh24Provider.status === "fulfilled") {
      provider = paziresh24Provider.value.data?.data ?? {};
    }
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  const growthbook = new GrowthBook({
    apiHost: "https://growthbook-api.paziresh24.com",
    clientKey: "sdk-St1dBftdp07geqtD",
  });

  growthbook.setAttributes({
    user_id: Number(user?.id),
    is_doctor: !!provider?.id,
    ...attributes,
  });

  await growthbook.init({ timeout: 1000 });

  const apps = await pb.collection("apps").getFullList({
    expand: "collaborators",
    filter: `${!provider?.id ? `type = 'users'` : ""}`,
    headers: {
      x_token: publicRuntimeConfig.HAMDAST_TOKEN,
    },
  });

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

  const filteredApps = apps.filter((app) => {
    const collaborators = app.expand?.collaborators;
    return (
      collaborators?.some(
        (collaborator: any) => collaborator.paziresh24_user_id == user.id
      ) || app.published
    );
  });

  res.status(200).json(
    filteredApps
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
                unread_endpoint:
                  growthbook.getFeatureValue<any>(
                    `hamdast::${app.key}-${menu.key}`,
                    {}
                  )?.unread_endpoint || menu.unread_endpoint,
              }))
              .filter(
                (menu) =>
                  !growthbook.getFeatureValue<any>(
                    `hamdast::${app.key}-${menu.key}`,
                    {}
                  ).hide
              ),
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
      }))
      .filter(
        (app) =>
          !growthbook.getFeatureValue<any>(`hamdast::${app.key}`, {}).hide
      )
  );
}
