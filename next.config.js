/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["https://business.thetravelsofzee.com/"],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    // Handle canvas for react-pdf
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }

    // Handle PDF.js worker
    config.resolve.alias = {
      ...config.resolve.alias,
      "pdfjs-dist/build/pdf.worker.min.js": path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.worker.min.js"),
    };

    return config;
  },
  // Enable experimental features for better compatibility
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
