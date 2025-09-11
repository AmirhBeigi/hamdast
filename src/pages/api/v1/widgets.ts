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
    const { user_id } = req.query;

    const data = await pb.collection("profile_widgets").getFullList({
      filter: `user_id ="${user_id}"`,
      expand: "widget, widget.app",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    return res.status(200).json(
      data?.map((item) => ({
        id: item?.widget,
        app: item?.expand?.widget?.expand?.app?.key,
        placement:
          item?.placement?.length > 0
            ? item?.placement
            : item?.expand?.widget?.placement,
        placements_metadata: item?.placements_metadata ?? {},
        display_conditions:
          item?.display_conditions?.length > 0
            ? item?.display_conditions
            : item?.expand?.widget?.display_conditions,
        data_endpoint: item?.expand?.widget?.data_endpoint ?? null,
        script: item?.expand?.widget?.script,
        iframe_src: item?.expand?.widget?.iframe_src,
        plasmic_component_id: item.expand?.widget?.plasmic_component_id,
        plasmic_project_id: item?.expand?.widget?.plasmic_project_id,
      }))
    );
  }

  if (req.method == "POST") {
    const { app_id, placements_metadata } = req.body;

    const cookieStore = req.cookies;
    const token =
      (cookieStore["token"] as string) ||
      req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    const user = await axios.get("https://apigw.paziresh24.com/v1/auth/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const user_id = user?.data?.users?.[0]?.id;

    const provider = await axios.get(
      "https://apigw.paziresh24.com/v1/providers",
      {
        params: {
          user_id: user_id,
        },
      }
    );

    const slug = provider?.data?.providers?.[0]?.slug;

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
          user_id: user_id,
          widget: widget.id,
          placements_metadata: placements_metadata ?? null,
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
              `https://hamdast.paziresh24.com/api/v1/widgets/?user_id=${user_id}`,
              `https://www.paziresh24.com/dr/${slug}/`,
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
      req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    const user = await axios.get("https://apigw.paziresh24.com/v1/auth/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const user_id = user?.data?.users?.[0]?.id;

    const provider = await axios.get(
      "https://apigw.paziresh24.com/v1/providers",
      {
        params: { user_id: user_id },
      }
    );

    const slug = provider?.data?.providers?.[0]?.slug;

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
        .getFirstListItem(`user_id = "${user_id}" && widget = "${widget.id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

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
              `https://hamdast.paziresh24.com/api/v1/widgets/?user_id=${user_id}`,
              `https://www.paziresh24.com/dr/${slug}/`,
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
