import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../pocketbase";
import config from "next/config";
import { RecordModel } from "pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
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

    return res.status(200).json(
      apps.map((app) => ({
        id: app.id,
        collaborators: app.collaborators,
        key: app.key,
        name_en: app.name_en,
        name_fa: app.name_fa,
        display_name_fa: app.display_name_fa,
        display_name_en: app.display_name_en,
        type: app.type,
        icon: app.icon,
        published: app.published,
        client_key: app.client_key,
        katibe_id: app.katibe_id,
        permissions: app.permissions,
      }))
    );
  }

  if (req.method === "POST") {
    const { name_fa, key, type } = req.body;
    if (!name_fa && !key) {
      return res.status(400).json({});
    }
    const app = await pb.collection("apps").create({
      name_fa,
      collaborators: [record.id],
      key,
      type,
    });
    return res.status(200).json({
      id: app.id,
      collaborators: app.collaborators,
      key: app.key,
      name_en: app.name_en,
      name_fa: app.name_fa,
      client_key: app.client_key,
      permissions: app.permissions,
    });
  }
}
