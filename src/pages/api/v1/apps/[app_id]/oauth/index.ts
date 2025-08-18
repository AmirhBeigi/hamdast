import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import { ClientResponseError } from "pocketbase";
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

  if (!record) {
    return res.status(401).json({});
  }
  const app = await pb
    .collection("apps")
    .getFirstListItem(`collaborators~'${record.id}' && id = '${app_id}'`);

  if (!app) {
    return res.status(401).json({});
  }

  if (req.method == "GET") {
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
      method: "GET",
      url: "https://user.paziresh24.com/admin/realms/paziresh24/clients/",
      headers: {
        Authorization: `Bearer ${gozarToken.data?.access_token}`,
        "Content-Type": "application/json",
      },
      params: {
        clientId: app.gozargah_client,
      },
    };
    const client = await axios.request(options);
    return res.status(200).json({
      client_id: client?.data?.[0]?.clientId,
      client_secret: client?.data?.[0]?.secret,
      redirect_uris: client?.data?.[0]?.redirectUris,
      scopes: client?.data?.[0]?.optionalClientScopes,
    });
  }

  if (req.method == "PATCH") {
    const { redirect_uris } = req.body;

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
      method: "GET",
      url: "https://user.paziresh24.com/admin/realms/paziresh24/clients/",
      headers: {
        Authorization: `Bearer ${gozarToken.data?.access_token}`,
        "Content-Type": "application/json",
      },
      params: {
        clientId: app.gozargah_client,
      },
    };
    const client = await axios.request(options);

    const id = client?.data?.[0]?.id;

    var updateOptions = {
      method: "PUT",
      url: `https://user.paziresh24.com/admin/realms/paziresh24/clients/${id}`,
      headers: {
        Authorization: `Bearer ${gozarToken.data?.access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        redirectUris: redirect_uris,
      },
    };
    const updateClient = await axios.request(updateOptions);

    return res.status(200).json({});
  }
}
