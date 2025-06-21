import PocketBase from "pocketbase";

export const pb = new PocketBase("https://hamdast-collection.paziresh24.com");

export const notificationPB = new PocketBase(
  "https://notification-users.darkube.app"
);
