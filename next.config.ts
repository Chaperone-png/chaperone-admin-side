import type { NextConfig } from "next";
const cacheDuration = process.env.CACHE_DURATION || "86400";
const nodeEnv = process.env.NODE_ENV?.trim().toLowerCase() || "development";
const isDev = nodeEnv === "development";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "chaperoneimages.s3.ap-southeast-2.amazonaws.com",
      "media.istockphoto.com",
      "www.shutterstock.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: isDev
              ? "no-store, no-cache, must-revalidate, proxy-revalidate"
              : `public, max-age=${cacheDuration}, must-revalidate`,
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: isDev
              ? "no-store, no-cache, must-revalidate, proxy-revalidate"
              : `public, max-age=${cacheDuration}, must-revalidate`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
