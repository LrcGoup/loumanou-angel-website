/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  allowedDevOrigins: ["www.loumanouangel.com"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
