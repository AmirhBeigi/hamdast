import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { app_id, menu_id, replay_id } = req.query;
    const { browser, device, user, events } = req.body;

    await pb.admins.authWithPassword(
      publicRuntimeConfig.POCKETBASE_USER_NAME,
      publicRuntimeConfig.POCKETBASE_PASSWORD
    );

    const session = await pb
      .collection("replay")
      .getOne(replay_id as string)
      .catch(async () => {
        const data = {
          id: replay_id,
          app: app_id,
          menu: menu_id,
          browser: browser,
          device: device,
          user: user,
          events: events,
        };
        await pb.collection("replay").create(data);
        res.status(200).json({});
      })
      .then(async () => {
        const data = {
          id: replay_id,
          app: app_id,
          menu: menu_id,
          browser: browser,
          device: device,
          user: user,
          events: events,
        };
        await pb.collection("replay").update(replay_id as string, data);
        res.status(200).json({});
      });

    res.status(200).json({});
  }
}
