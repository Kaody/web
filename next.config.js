const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
    NEXT_PUBLIC_GRAPHQL_PATH: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
  },
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_PATH}/:path*`,
        destination: `${process.env.API_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/:path*`,
      },
      {
        source: `${process.env.NEXT_PUBLIC_GRAPHQL_PATH}/:path*`,
        destination: `${process.env.API_BASE_URL}${process.env.NEXT_PUBLIC_GRAPHQL_PATH}/:path*`,
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
