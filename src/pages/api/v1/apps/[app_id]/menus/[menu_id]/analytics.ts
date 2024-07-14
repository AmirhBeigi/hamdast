import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
  });

  if (req.method === "POST") {
    const { app_id, menu_id } = req.query;
    const { browser, device, action, duration } = req.body;
    const cookieStore = req.cookies;
    const token =
      (cookieStore["token"] as string) ||
      req.headers.authorization?.replace("Bearer", "");

    const paziresh24User = await axios.get(
      "https://apigw.paziresh24.com/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = paziresh24User.data?.users[0];
    const paziresh24Provider = await axios.get(
      `https://apigw.paziresh24.com/v1/providers?user_id=${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const provider = paziresh24Provider.data?.providers[0];

    const options = {
      method: "POST",
      url: `https://hamdast-logging.darkube.app/api/v1/logstream/${action}`,
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: [
        {
          browser,
          device,
          app: app_id,
          menu: menu_id,
          user_id: user.id?.toString(),
          job_title: provider?.job_title ?? "normal",
          duration,
        },
      ],
    };

    await axios.request(options);

    res.status(204).json({});
  }
}
