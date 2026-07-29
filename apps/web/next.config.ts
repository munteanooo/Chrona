import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@chrona/ui",
    "@chrona/types",
  ],
};

export default nextConfig;