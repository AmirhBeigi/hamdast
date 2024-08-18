import axios from "axios";
import { detectBrowser, detectDevice } from "../utils";
import { getState } from "./getState";

export const activeUsersLog = async ({ menu, app, page }: any) => {
  if (page) return;
  try {
    axios.post(
      `/api/v1/apps/${app}/menus/${menu}/analytics`,
      {
        browser: detectBrowser(),
        device: detectDevice(),
        action: "activeusers",
      },
      { withCredentials: true }
    );
  } catch (error) {}
};
