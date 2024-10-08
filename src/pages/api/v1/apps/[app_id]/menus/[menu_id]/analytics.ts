import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../../../../pocketbase";
const { publicRuntimeConfig } = config();

function getDateDaysAgo(daysAgo: string) {
  // Create a new Date object for the current date
  const currentDate = new Date();

  // Subtract the specified number of days from the current date
  currentDate.setDate(currentDate.getDate() - +daysAgo);

  // Get the day, month, and year
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = currentDate.getFullYear();

  // Return the date in dd-mm-yyyy format
  return `${year}-${month}-${day}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
  });
  const { app_id, menu_id, days_ago } = req.query;
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");

  const paziresh24User = await axios.get(
    "https://apigw.paziresh24.com/v1/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const user = paziresh24User.data?.users[0];

  if (req.method === "GET") {
    await pb.admins.authWithPassword(
      publicRuntimeConfig.POCKETBASE_USER_NAME,
      publicRuntimeConfig.POCKETBASE_PASSWORD
    );

    const record = await pb
      .collection("users")
      .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
        expand: "role",
      });

    if (!record) {
      return res.status(401).json({});
    }

    const options = {
      method: "POST",
      url: "https://hamdast-logging.darkube.app/api/v1/query",
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        query: `select * from activeusers where app = '${app_id}' and menu = '${menu_id}'`,
        startTime: `${getDateDaysAgo(days_ago as string)}T00:00:00+00:00`,
        endTime: new Date().toISOString(),
      },
    };

    const queryData = await axios.request(options);

    return res.status(200).json(queryData?.data ?? []);
  }

  if (req.method === "POST") {
    const { browser, device, action, duration } = req.body;

    const paziresh24Provider = await axios.get(
      `https://apigw.paziresh24.com/v1/providers?user_id=${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const provider = paziresh24Provider.data?.providers[0];

    const options = {
      method: "POST",
      url: `https://hamdast-logging.darkube.app/api/v1/logstream/${action}`,
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: [
        {
          browser,
          device,
          app: app_id,
          menu: menu_id,
          user_id: user.id?.toString(),
          job_title: provider?.job_title ?? "normal",
          duration,
        },
      ],
    };

    await axios.request(options);

    res.status(204).json({});
  }
}
