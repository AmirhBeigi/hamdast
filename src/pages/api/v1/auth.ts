import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "use GET method",
    });
  }
  pb.autoCancellation(false);

  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  try {
    const record = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    if (!record) {
      return res.status(401).json({
        message: "Authentication credentials were not provided.",
      });
    }

    return res
      .status(200)
      .setHeader("paziresh24_user_id", record.paziresh24_user_id)
      .setHeader("hamdast_id", record.id)
      .json({});
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
