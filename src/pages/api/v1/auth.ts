import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../pocketbase";
import config from "next/config";
import axios from "axios";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({
      message: "use GET method",
    });
  }
  pb.autoCancellation(false);

  const apiKey = req.headers?.["x-api-key"];
  const session_token = req.body?.session_token;
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (session_token) {
    const options = {
      method: "POST",
      url: "https://hamdast-logging.darkube.app/api/v1/query",
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        query: `select * from sessions where session_token = '${session_token}'`,
        startTime: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
        endTime: new Date().toISOString(),
      },
    };

    const queryData = await axios.request(options);

    if (queryData.data.length === 0) {
      return res.status(403).json({
        message: "Session token is expired",
      });
    }

    const data = await axios.get("https://apigw.paziresh24.com/v1/user/list", {
      params: {
        id: queryData.data?.[0]?.user_id,
      },
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.SIB_ZAMINI_API_KEY}`,
      },
    });

    const user = data?.data?.[0]?.users?.[0];

    return res.status(200).json({
      id: user.id,
      name: user.name,
      family: user.family,
      cell: user.cell,
      email: user.email,
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
      .setHeader("paziresh24-user-id", record.paziresh24_user_id)
      .setHeader("hamdast-id", record.id)
      .json(record);
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }
}
