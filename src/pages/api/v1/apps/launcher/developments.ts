import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../pocketbase";
import config from "next/config";
import { RecordModel } from "pocketbase";
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
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  if (!token) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let user = null;
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

  let record: RecordModel;
  try {
    record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have access to Hamdast.",
    });
  }

  if (req.method === "GET") {
    const apps = await pb.collection("apps").getFullList({
      filter: `collaborators~'${record.id}'`,
    });

    const luncherPages = await pb.collection("pages").getFullList({
      filter: `(${apps
        .map((item) => `app.key = '${item.key}'`)
        .join(" || ")}) && key='launcher'`,
      expand: "app",
    });

    return res.status(200).json(
      luncherPages.map((page) => ({
        id: page.id,
        key: page.expand?.app?.key,
        name: page.expand?.app?.display_name_fa ?? "ابزارک بی نام",
        description: page.expand?.app?.description ?? null,
        icon: page.expand?.app?.icon ? page.expand?.app?.icon : null,
        published: page.expand?.app?.published,
      }))
    );
  }
}
