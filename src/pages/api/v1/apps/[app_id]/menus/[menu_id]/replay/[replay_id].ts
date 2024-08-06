import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();
import NextCors from "nextjs-cors";
// import zlib from "zlib";

// function optimizeJSON(data: any) {
//   let minifiedData = JSON.stringify(data);
//   return new Promise((resolve, reject) => {
//     zlib.gzip(minifiedData, (err: any, buffer: any) => {
//       if (err) reject(err);
//       resolve(buffer);
//     });
//   });
// }

// function deOptimizeJSON(data: any) {
//   return new Promise((resolve, reject) => {
//     zlib.unzip(data, (err: any, buffer: any) => {
//       if (err) reject(err);
//       resolve(JSON.parse(buffer));
//     });
//   });
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  const { app_id, menu_id, replay_id } = req.query;

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );

  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: "https://hamdast-logging.darkube.app/api/v1/query",
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        query: `select * from replayevents where id = '${replay_id}' LIMIT 1`,
        startTime: "2024-07-22T12:21:00.000Z",
        endTime: "2024-07-22T12:32:00.000Z",
      },
    };

    const queryData = await axios.request(options);

    return res.status(200).json(queryData?.data ?? []);
  }

  if (req.method === "POST") {
    const { browser, device, user, events } = req.body;

    // const compressed = await optimizeJSON(events);

    // await pb
    //   .collection("replay_session")
    //   .getOne(replay_id as string)
    //   .catch(async () => {
    //     const data = {
    //       id: replay_id,
    //       app: app_id,
    //       menu: menu_id,
    //       browser: browser,
    //       device: device,
    //       user: user,
    //     };
    //     await pb.collection("replay_session").create(data);
    //     const options = {
    //       method: "POST",
    //       url: `https://hamdast-logging.darkube.app/api/v1/logstream/replayevents`,
    //       headers: {
    //         Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
    //         "Content-Type": "application/json",
    //       },
    //       data: [
    //         {
    //           id: replay_id,
    //           events: compressed,
    //         },
    //       ],
    //     };

    //     await axios.request(options);
    //   })
    //   .then(async () => {
    //     const data = {
    //       id: replay_id,
    //       app: app_id,
    //       menu: menu_id,
    //       browser: browser,
    //       device: device,
    //       user: user,
    //     };
    //     await pb.collection("replay_session").update(replay_id as string, data);
    //     const options = {
    //       method: "PUT",
    //       url: `https://hamdast-logging.darkube.app/api/v1/logstream/replayevents`,
    //       headers: {
    //         Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
    //         "Content-Type": "application/json",
    //       },
    //       data: [
    //         {
    //           id: replay_id,
    //           events: compressed,
    //         },
    //       ],
    //     };

    //     await axios.request(options);
    //   });

    return res.status(204).end();
  }
}
