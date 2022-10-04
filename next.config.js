/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["photos.zillowstatic.com"],
  },
};

module.exports = nextConfig;
