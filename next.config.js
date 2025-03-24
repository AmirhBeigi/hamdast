/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  },
};

module.exports = nextConfig;
