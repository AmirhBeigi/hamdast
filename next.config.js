/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  publicRuntimeConfig: {
    POCKETBASE_USER_NAME: process.env.POCKETBASE_USER_NAME,
    POCKETBASE_PASSWORD: process.env.POCKETBASE_PASSWORD,
    HAMDAST_LOGGING_TOKEN: process.env.HAMDAST_LOGGING_TOKEN,
    NAJVA_API_KEY: process.env.NAJVA_API_KEY,
    NAJVA_TOKEN: process.env.NAJVA_TOKEN,
    NOTIFICATION_USERS_TOKEN: process.env.NOTIFICATION_USERS_TOKEN,
    HAMDAST_TOKEN: process.env.HAMDAST_TOKEN,
    SIB_ZAMINI_API_KEY: process.env.SIB_ZAMINI_API_KEY,
    ARVAN: process.env.ARVAN,
    PROF_CACHE_BEARER_TOKEN: process.env.PROF_CACHE_BEARER_TOKEN,
    PANEL_TOKEN: process.env.PANEL_TOKEN,
    POCKETBASE_URL: process.env.POCKETBASE_URL,
  },
  serverRuntimeConfig: {
    HAMDAST_SESSION_JWT_SECRET: process.env.HAMDAST_SESSION_JWT_SECRET,
    HAMDAST_ACCESS_JWT_SECRET: process.env.HAMDAST_ACCESS_JWT_SECRET,
  },
};

module.exports = nextConfig;
