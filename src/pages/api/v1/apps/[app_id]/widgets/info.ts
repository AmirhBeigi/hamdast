import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
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

  const { app_id } = req.query;

  if (req.method == "GET") {
    try {
      const widget = await pb
        .collection("widgets")
        .getFirstListItem(`app = "${app_id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

      return res.status(200).json({
        id: widget.id,
        placement: widget.placement,
        display_conditions: widget?.display_conditions,
      });
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
