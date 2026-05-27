import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the Aladhan API to be called from server-side API routes
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
