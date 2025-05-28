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

  if (req.method == "POST") {
    const { receipt_id } = req.body;

    if (!receipt_id) {
      return res.status(400).json({
        message: "The receipt_id field is required.",
      });
    }

    try {
      const receipt = await axios.post(
        `https://apigw.paziresh24.com/katibe/v1/payments/${receipt_id}/verify`,
        undefined,
        {
          headers: {
            token: app?.tokens?.katibe,
          },
        }
      );

      return res.status(200).json(receipt?.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return res.status(400).json({
          message: error?.response?.data?.message,
        });
      }
    }
  }

  return res.status(405).json({
    message: "Method Not Allowed",
  });
}
