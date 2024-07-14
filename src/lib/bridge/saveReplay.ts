import axios from "axios";
import { detectBrowser, detectDevice } from "../utils";
import { getState } from "./getState";

export const saveReplay = async ({ menu, app, uniqueId, events }: any) => {
  try {
    const user = await getState.user();
    const provider = await getState.provider();
    axios.post(
      `https://hamdast.paziresh24.com/api/v1/apps/${app}/menus/${menu}/replay/${uniqueId}/`,
      {
        browser: detectBrowser(),
        device: detectDevice(),
        user: {
          name: user.name,
          family: user.family,
          id: user.id,
          job_title: provider?.job_title ?? "normal",
        },
        events: events,
      }
    );
  } catch (error) {}
};
