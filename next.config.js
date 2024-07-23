/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["d3e4m6b6rxmux9.cloudfront.net", "i.imgur.com"],
  },
};

module.exports = nextConfig;
