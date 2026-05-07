import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ビルド時の型エラーを無視する
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
