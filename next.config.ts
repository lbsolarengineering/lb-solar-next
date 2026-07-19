import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/technical-studies", destination: "/blog", permanent: true },
      { source: "/lb-solar-ai", destination: "/", permanent: true },
      { source: "/ai", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
