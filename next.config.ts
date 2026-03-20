import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //set output directory
  distDir: "build",
  images: {
    qualities: [60, 75, 85, 90, 95],
  },
};

export default nextConfig;
