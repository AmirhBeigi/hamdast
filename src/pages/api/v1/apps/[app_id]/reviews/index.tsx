import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../../pocketbase";

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
      "x-api-key",
    ],
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { app_id } = req.query;

  if (req.method === "POST") {
    const cookieStore = req.cookies;
    const token =
      (cookieStore["token"] as string) ||
      req.headers.authorization?.replace("Bearer", "");

    let user;
    try {
      const paziresh24User = await axios.get(
        "https://apigw.paziresh24.com/v1/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token?.trim()}`,
          },
        }
      );
      user = paziresh24User.data?.users[0];
    } catch (error) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (!user) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    const { rate, content } = req.body;

    try {
      await pb.collection("reviews").create({
        rate,
        content,
        user_id: user.id,
        app: app_id,
      });

      return res.status(200).json({
        message:
          "Your review has been successfully submitted and is in the approval queue.",
      });
    } catch (error) {
      if (axios.isAxiosError(error))
        return res.status(error.response?.status ?? 500).json({
          ...error.response?.data,
        });
    }
  }

  if (req.method === "GET") {
    try {
      const reviews = await pb.collection("reviews").getFullList({
        filter: `app=${app_id} && verify=true`,
      });

      return res.status(200).json(reviews);
    } catch (error) {
      if (axios.isAxiosError(error))
        return res.status(error.response?.status ?? 500).json({
          ...error.response?.data,
        });
    }
  }
}
