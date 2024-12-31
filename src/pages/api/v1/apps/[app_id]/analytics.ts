import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
  });
  const { app_id, ...queries } = req.query;
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

  if (req.method === "GET") {
    await pb.admins.authWithPassword(
      publicRuntimeConfig.POCKETBASE_USER_NAME,
      publicRuntimeConfig.POCKETBASE_PASSWORD
    );

    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    if (!record) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    if (["LOGIN", "REGISTER", "LOGIN_ERROR"].includes(queries.type as string)) {
      const record = await pb
        .collection("users")
        .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
          expand: "role",
        });

      if (!record) {
        return res.status(401).json({});
      }

      const app = await pb
        .collection("apps")
        .getFirstListItem(`collaborators~'${record.id}' && id = '${app_id}'`);

      const gozarToken = await axios.post(
        "https://user.paziresh24.com/realms/paziresh24/protocol/openid-connect/token",
        {
          grant_type: "client_credentials",
          client_id: process.env.GOZARGAH_CLIENT_ID,
          client_secret: process.env.GOZARGAH_CLIENT_SECRET,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const options = {
        method: "GET",
        url: "https://user.paziresh24.com/admin/realms/paziresh24/events",
        headers: {
          Authorization: `Bearer ${gozarToken.data?.access_token}`,
          "Content-Type": "application/json",
        },
        params: {
          client: app.key,
          type: queries.type,
          max: 999999999,
          dateFrom: queries.start_date,
          dateTo: queries.end_date,
        },
      };

      try {
        const queryData = await axios.request(options);

        return res.status(200).json({
          type: queries.type,
          value: queryData?.data?.length,
        });
      } catch (error) {
        return res.status(502).json({
          error,
        });
      }
    }

    const options = {
      method: "GET",
      url: "https://hamdast-workflow.darkube.app/webhook/statistics",
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      params: {
        app: app_id,
        ...queries,
      },
    };

    try {
      const queryData = await axios.request(options);

      return res.status(200).json(queryData?.data ?? []);
    } catch (error) {
      return res.status(502).json({
        error,
      });
    }
  }
}
