import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
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
    origin: "*",
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
      "X-Api-KEY",
      "x-api-key",
    ],
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { app_id } = req.query;

  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let record;
  try {
    record = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (!record) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let app;
  try {
    app = await pb
      .collection("apps")
      .getFirstListItem(`collaborators~"${record.id}" && key = "${app_id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have permission to access this app.",
    });
  }

  if (req.method == "GET") {
    const widgets = await pb.collection("widgets").getFullList({
      filter: `app = "${app.id}"`,
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    try {
      const profileWidgets = await pb
        .collection("profile_widgets")
        .getFullList({
          filter: widgets
            ?.map((widget) => `widget = "${widget.id}"`)
            .join(" || "),
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

      return res.status(200).json(
        profileWidgets?.map((item) => ({
          user_id: item?.user_id,
          placements:
            item?.placement?.length > 0
              ? item?.placement
              : widgets?.find((w) => w.id == item?.widget)?.placement,
          placements_metadata: item.placements_metadata ?? {},
        }))
      );
    } catch (error) {
      return res.status(404).json({
        message: "Widget not found",
      });
    }
  }

  return res.status(405).json({
    message: "Method Not Allowed",
  });
}
