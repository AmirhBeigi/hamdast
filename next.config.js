/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    POCKETBASE_USER_NAME: process.env.POCKETBASE_USER_NAME,
    POCKETBASE_PASSWORD: process.env.POCKETBASE_PASSWORD,
  },
};

module.exports = nextConfig;
