import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const cookieStore = req.cookies;
  const { app_id } = req.query;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
  const paziresh24User = await axios.get(
    "https://apigw.paziresh24.com/v1/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token?.trim()}`,
      },
    }
  );
  const user = paziresh24User.data?.users[0];
  const record = await pb
    .collection("users")
    .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
      expand: "role",
    });

  if (req.method === "PATCH") {
    const { published, id, client_key, permissions, collaborators, ...rest } =
      req.body;

    const app = await pb.collection("apps").update(app_id as string, {
      ...rest,
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
