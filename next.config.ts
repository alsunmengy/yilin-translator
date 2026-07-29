import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false,
  allowedDevOrigins: ["sever.alsun.top", "yilin.alsun.top", "192.168.6.5"],
};

export default nextConfig;
