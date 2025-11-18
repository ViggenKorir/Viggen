/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Transpile packages from your monorepo
  transpilePackages: ["ui"],

  // Optimize common image formats
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Build output optimized for serverless/standalone if desired.
  // Uncomment `output: 'standalone'` when using Docker or deploying with custom server.
  // output: 'standalone',

  // Example: expose runtime config or public environment variables via next.config.js if needed.
  // publicRuntimeConfig: {},
};

module.exports = nextConfig;
