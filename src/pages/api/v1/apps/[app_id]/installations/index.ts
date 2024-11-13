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

  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  try {
    const users = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    if (!users) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  const { app_id } = req.query;

  if (req.method == "POST") {
    const { user_ids } = req.body;

    try {
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }

  if (req.method == "DELETE") {
    const { user_ids } = req.body;

    try {
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }

  if (req.method == "GET") {
    try {
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      const err = error as ClientResponseError;
      res.status(err.status).json({ message: err.message });
    }
  }
}
