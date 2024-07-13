import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../../pocketbase";
import config from "next/config";
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
  pb.autoCancellation(false);
  const { app_id, menu_id, days_ago } = req.query;
  const cookieStore = req.cookies;
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
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const session = await pb.collection("replay").getFullList({
    filter: `app="${app_id}" && menu="${menu_id}" && updated >= "${getDateDaysAgo(
      days_ago as string
    )} 00:00:00"`,
    sort: "-updated",
  });

  res.status(200).json(
    session.map((item) => ({
      id: item.id,
      user: item.user,
      device: item.device,
      browser: item.browser,
      events: item.events,
      updated_at: item.updated,
      created_at: item.created,
    }))
  );
}
