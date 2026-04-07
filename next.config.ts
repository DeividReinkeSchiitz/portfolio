import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //set output directory
  distDir: "build",
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [20, 60, 75, 85, 90, 95, 100],
    formats: ["image/webp"],
  },
};

export default nextConfig;
