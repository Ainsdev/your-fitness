/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
