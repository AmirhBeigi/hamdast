import PocketBase from "pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export const pb = new PocketBase(publicRuntimeConfig.POCKETBASE_URL);

export const notificationPB = new PocketBase(
  "https://notification-users.darkube.app"
);
