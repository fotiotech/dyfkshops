/** @type {import('next').NextConfig} */
// require('dotenv').config()

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000"],
    },
  },
};

module.exports = nextConfig;
