
import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "iceberg-js": path.resolve(
        process.cwd(),
        "node_modules/iceberg-js/dist/index.mjs"
      ),
    };

    return config;
  },
};

export default nextConfig;
