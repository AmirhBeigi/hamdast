import axios from "axios";
import { detectBrowser, detectDevice } from "../utils";
import { getState } from "./getState";
import config from "next/config";
const { publicRuntimeConfig } = config();

export const usersDurationLog = async ({ menu, app, duration }: any) => {
  try {
    const user = await getState.user();
    const provider = await getState.provider();

    const options = {
      method: "POST",
      url: "https://hamdast-logging.darkube.app/api/v1/logstream/usersduration",
      headers: {
        Authorization: `Basic ${publicRuntimeConfig.HAMDAST_LOGGING_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: [
        {
          browser: detectBrowser(),
          device: detectDevice(),
          app: app,
          menu: menu,
          user_id: user.id,
          job_title: provider?.job_title ?? "normal",
          duration,
        },
      ],
    };

    axios.request(options);
  } catch (error) {}
};
