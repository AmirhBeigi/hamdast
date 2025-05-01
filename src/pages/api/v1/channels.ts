import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../pocketbase";
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

  if (req.method == "GET") {
    const { provider_id } = req.query;

    const data = await pb.collection("provider_channels").getFullList({
      filter: `provider_id ="${provider_id}"`,
      expand: "channel",
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });

    return res.status(200).json(
      data?.map((item) => ({
        id: item?.widget,
        display_name: item.expand?.channel?.display_name,
        app_id: item?.expand?.channel?.app,
      }))
    );
  }
}
