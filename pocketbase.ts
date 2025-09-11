import PocketBase from "pocketbase";

export const pb = new PocketBase(
  "http://hamdast-collection.paziresh24-cloud-front.svc:8090"
);

export const notificationPB = new PocketBase(
  "https://notification-users.darkube.app"
);
