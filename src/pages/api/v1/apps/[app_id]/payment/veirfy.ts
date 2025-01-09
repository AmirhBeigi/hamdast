import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

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
  const { app_id } = req.query;
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");

  const paziresh24User = await axios.get(
    "https://apigw.paziresh24.com/v1/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token?.trim()}`,
      },
    }
  );
  const user = paziresh24User.data?.users[0];

  if (!user) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (req.method === "POST") {
    const { receipt_id } = req.body;

    try {
      const queryData = await axios.get(
        `https://hamdast-workflow.darkube.app/webhook/d21ff781-d40d-47dd-8c73-ccd6c36f357c/v1/${app_id}/payment/verify`,
        {
          params: {
            receipt_id: receipt_id,
          },
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
}
