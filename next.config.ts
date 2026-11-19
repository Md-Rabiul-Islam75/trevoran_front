import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker: the build emits a self-contained server in .next/standalone (see Dockerfile).
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
