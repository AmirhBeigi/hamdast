import getConfig from "next/config";

export const DEFAULT_PAZIRESH24_AUTH_ME_URL =
  "https://apigw.paziresh24.com/v1/auth/me";

export const PAZIRESH24_AUTH_ME_URL =
  process.env.PAZIRESH24_AUTH_ME_URL ??
  (() => {
    try {
      return getConfig().publicRuntimeConfig?.PAZIRESH24_AUTH_ME_URL as
        | string
        | undefined;
    } catch {
      return undefined;
    }
  })() ??
  DEFAULT_PAZIRESH24_AUTH_ME_URL;
