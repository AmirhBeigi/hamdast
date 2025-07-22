import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../pocketbase";
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

  let app;
  try {
    app = await pb.collection("apps").getFirstListItem(`key = "${app_id}"`, {
      headers: {
        x_token: publicRuntimeConfig.HAMDAST_TOKEN,
      },
    });
  } catch (error) {
    return res.status(404).json({
      message: "Landing not found",
    });
  }

  if (req.method == "GET") {
    try {
      const landing = await pb
        .collection("landings")
        .getFirstListItem(`app = "${app.id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

      return res.status(200).json(landing);
    } catch (error) {
      return res.status(404).json({
        message: "Landing not found",
      });
    }
  }

  return res.status(405).json({
    message: "Method Not Allowed",
  });
}
