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
      expand: "collaborators",
    });

    return res.status(200).json(
      apps.map((app) => ({
        id: app.id,
        collaborators: app.expand?.collaborators?.map((item: any) => ({
          id: item?.id,
          paziresh24_user_id: item?.paziresh24_user_id,
        })),
        key: app.key,
        name_en: app.name_en,
        name_fa: app.name_fa,
        display_name_fa: app.display_name_fa,
        display_name_en: app.display_name_en,
        description: app.description,
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

    let client = null;
    let gozarToken = null;

    try {
      gozarToken = await axios.post(
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
      client = await axios.request(options);
    } catch (error) {
      await pb.collection("apps").delete(app.id);
      return res.status(502).json({});
    }

    try {
      var productOption = {
        method: "POST",
        url: "https://apigw.paziresh24.com/katibe/v1/products/hamdast/",
        headers: {
          Authorization: `Bearer ${process.env.KATIBE_TOKEN}`,
          "Content-Type": "application/json",
        },
        data: {
          name: name_fa,
          code_name: `hamdast-${key}`,
          site_address: `https://hamdast.paziresh24.com/katibe/redirect`,
        },
      };
      const katibeData = await axios.request(productOption);
      await pb.collection("apps").update(app.id, {
        gozargah_client: `hamdast-${key}`,
        tokens: {
          katibe: katibeData?.data?.data?.token,
        },
        redirects: {
          katibe: "https://hamdast.paziresh24.com/katibe/redirect",
        },
        katibe_id: `hamdast-${key}`,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status == 409) {
        await pb.collection("apps").update(app.id, {
          gozargah_client: `hamdast-${key}`,
          tokens: {
            katibe: error?.response?.data?.data?.token,
          },
          redirects: {
            katibe: "https://hamdast.paziresh24.com/katibe/redirect",
          },
          katibe_id: `hamdast-${key}`,
        });
        return;
      }
      const clientId = client?.data?.id;
      await axios.delete(
        `https://user.paziresh24.com/admin/realms/paziresh24/clients/${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${gozarToken.data?.access_token}`,
          },
        }
      );
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
