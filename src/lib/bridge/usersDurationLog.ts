import axios from "axios";
import { detectBrowser, detectDevice } from "../utils";

export const usersDurationLog = async ({ menu, app, duration }: any) => {
  try {
    axios.post(
      `/api/v1/apps/${app}/menus/${menu}/analytics`,
      {
        browser: detectBrowser(),
        device: detectDevice(),
        duration,
        action: "usersduration",
      },
      { withCredentials: true }
    );
  } catch (error) {}
};
