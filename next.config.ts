import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dustline-apps-privacy",
  assetPrefix: "/dustline-apps-privacy",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
