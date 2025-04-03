import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output:'export',
  // basePath: '/promoweb',
  allowedDevOrigins: ["http://localhost:3000", "http://172.29.123.184:5173"],
};

export default nextConfig;
