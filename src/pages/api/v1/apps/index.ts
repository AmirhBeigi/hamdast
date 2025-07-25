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
    const { name_fa, key } = req.body;
    if (!name_fa && !key) {
      return res.status(400).json({});
    }
    const app = await pb.collection("apps").create({
      name_fa,
      collaborators: [record.id],
      key,
    });

    try {
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

      var options = {
        method: "POST",
        url: "https://user.paziresh24.com/admin/realms/paziresh24/clients/",
        headers: {
          Authorization: `Bearer ${gozarToken.data?.access_token}`,
          "Content-Type": "application/json",
        },
        data: {
          clientId: `hamdast-${key}`,
          name: name_fa,
          enabled: true,
          protocol: "openid-connect",
          publicClient: false,
          standardFlowEnabled: true,
          directAccessGrantsEnabled: true,
          serviceAccountsEnabled: false,
          consentRequired: true,
        },
      };
      await axios.request(options);
      await pb.collection("apps").update(app.id, {
        gozargah_client: `hamdast-${key}`,
      });
    } catch (error) {
      await pb.collection("apps").delete(app.id);
      return res.status(502).json({});
    }

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
