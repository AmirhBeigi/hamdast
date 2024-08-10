import PocketBase from "pocketbase";

export const pb = new PocketBase("https://hamdast-collection.darkube.app");

export const notificationPB = new PocketBase(
  "https://notification-users.darkube.app"
);
