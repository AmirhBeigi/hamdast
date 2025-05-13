import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../pocketbase";
import config from "next/config";
import axios from "axios";
import NextCors from "nextjs-cors";
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

  if (req.method == "GET") {
    const { id, provider_id } = req.query;

    const data = await pb.collection("profile_widgets").getFullList({
      filter: `profile_id="${id}" || provider_id ="${provider_id}"`,
      expand: "widget",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    return res.status(200).json(
      data?.map((item) => ({
        id: item?.widget,
        plasmic_component_id: item.expand?.widget?.plasmic_component_id,
        plasmic_project_id: item?.expand?.widget?.plasmic_project_id,
        placement:
          item?.placement?.length > 0
            ? item?.placement
            : item?.expand?.widget?.placement,
        placements_metadata: item?.placements_metadata ?? {},
        display_conditions: item?.display_conditions ?? null,
        data_endpoint: item?.expand?.widget?.data_endpoint ?? null,
      }))
    );
  }

  if (req.method == "POST") {
    const { app_id } = req.body;

    const cookieStore = req.cookies;
    const token =
      (cookieStore["token"] as string) ||
      req.headers.authorization?.replace("Bearer", "");

    if (!token) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    const profile = await axios.get(
      "https://api.paziresh24.com/V1/doctor/profile",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const provider = await axios.get(
      "https://apigw.paziresh24.com/v1/providers",
      {
        params: {
          slug: profile.data?.data?.slug,
        },
      }
    );

    const widget = await pb
      .collection("widgets")
      .getFirstListItem(`app = "${app_id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    try {
      await pb.collection("profile_widgets").create(
        {
          profile_id: profile?.data?.data?.id,
          provider_id: provider?.data?.providers?.[0]?.id,
          widget: widget.id,
        },
        {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        }
      );

      try {
        await axios.post(
          "https://napi.arvancloud.ir/cdn/4.0/domains/paziresh24.com/caching/purge",
          {
            purge: "individual",
            purge_urls: [
              `https://hamdast.paziresh24.com/api/v1/widgets/?id=${profile?.data?.data?.id}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${provider?.data?.providers?.[0]?.id}`,
              `https://www.paziresh24.com/dr/${profile?.data?.data?.slug}/`,
            ],
          },
          {
            headers: {
              authorization: publicRuntimeConfig.ARVAN,
            },
          }
        );
      } catch (error) {}

      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({
        message: "قبلا این ویجت اضافه شده است.",
      });
    }
  }

  if (req.method == "DELETE") {
    const { app_id } = req.body;

    const cookieStore = req.cookies;
    const token =
      (cookieStore["token"] as string) ||
      req.headers.authorization?.replace("Bearer", "");

    if (!token) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    const profile = await axios.get(
      "https://api.paziresh24.com/V1/doctor/profile",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const profile_id = profile?.data?.data?.id;

    const provider = await axios.get(
      "https://apigw.paziresh24.com/v1/providers",
      {
        params: {
          slug: profile.data?.data?.slug,
        },
      }
    );

    try {
      const widget = await pb
        .collection("widgets")
        .getFirstListItem(`app = "${app_id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });
      const profileWidget = await pb
        .collection("profile_widgets")
        .getFirstListItem(
          `(profile_id = "${profile_id}" || provider_id = "${provider?.data?.providers?.[0]?.id}") && widget = "${widget.id}"`,
          {
            headers: {
              x_token: publicRuntimeConfig.HAMDAST_TOKEN,
            },
          }
        );

      await pb.collection("profile_widgets").delete(profileWidget.id, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

      try {
        await axios.post(
          "https://napi.arvancloud.ir/cdn/4.0/domains/paziresh24.com/caching/purge",
          {
            purge: "individual",
            purge_urls: [
              `https://hamdast.paziresh24.com/api/v1/widgets/?id=${profile_id}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${provider?.data?.providers?.[0]?.id}`,
              `https://www.paziresh24.com/dr/${profile?.data?.data?.slug}/`,
            ],
          },
          {
            headers: {
              authorization: publicRuntimeConfig.ARVAN,
            },
          }
        );
      } catch (error) {}

      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({
        message: "ویجتی وجود ندارد.",
      });
    }
  }
}
