/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["photos.zillowstatic.com"],
  },
};

module.exports = nextConfig;
