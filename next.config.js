/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["thetravelsofzee.com"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
