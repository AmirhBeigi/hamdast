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

  if (req.method == "POST") {
    const { amount, title } = req.body;

    if (!amount && !title) {
      return res.status(400).json({
        message: "The amount and title fields are required.",
      });
    }

    try {
      const queryData = await axios.post(
        `https://hamdast-workflow.darkube.app/webhook/d21ff781-d40d-47dd-8c73-ccd6c36f357c/v1/${app_id}/payment`,
        {
          title,
          amount,
        },
        {
          headers: {
            "x-api-key": process.env.HAMDAST_TOKEN,
          },
        }
      );

      return res.status(200).json({
        ...queryData.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error))
        return res.status(error.response?.status ?? 500).json({
          ...error.response?.data,
        });
    }
  }

  return res.status(405).json({
    message: "Method Not Allowed",
  });
}
