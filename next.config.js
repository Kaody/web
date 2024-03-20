const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    const BASE_URL = process.env.API_BASE_URL;
    const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
    const GRAPHQL_PATH = process.env.NEXT_PUBLIC_GRAPHQL_PATH;
    return [
      {
        source: `${API_PATH}/:path*`,
        destination: `${BASE_URL}${API_PATH}/:path*`,
      },
      {
        source: `${GRAPHQL_PATH}/:path*`,
        destination: `${BASE_URL}${GRAPHQL_PATH}/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src/"),
    };
    return config;
  },
};

module.exports = nextConfig;
