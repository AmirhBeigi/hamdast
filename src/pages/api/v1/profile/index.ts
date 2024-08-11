import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../pocketbase";
import config from "next/config";
import { randomUUID } from "crypto";
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
          Authorization: `Bearer ${token}`,
        },
      }
    );
    user = paziresh24User.data?.users[0];
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (req.method === "POST") {
    try {
      const hamdastUser = await pb.collection("users").create(
        {
          paziresh24_user_id: user.id,
          api_key: randomUUID(),
          role: "qhzrzj4okokfto1",
        },
        {
          expand: "role",
        }
      );
      return res.status(200).json({
        id: hamdastUser.id,
        paziresh24_user_id: user.id,
        name: user.name,
        family: user.family,
        roles:
          hamdastUser.expand?.role?.map?.((item: any) => ({
            id: item.id,
            name: item.name,
          })) ?? [],
        api_key: hamdastUser.api_key,
      });
    } catch (error) {
      return res.status(400).json({
        message: "This user already has an account.",
      });
    }
  }

  try {
    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user?.id}"`, {
        expand: "role",
      });

    res.status(200).json({
      id: record.id,
      paziresh24_user_id: user.id,
      name: user.name,
      family: user.family,
      roles:
        record.expand?.role?.map?.((item: any) => ({
          id: item.id,
          name: item.name,
        })) ?? [],
      api_key: record.api_key,
    });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have access to Hamdast.",
    });
  }
}
