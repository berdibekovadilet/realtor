/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "photos.zillowstatic.com",
      "bayut-production.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
