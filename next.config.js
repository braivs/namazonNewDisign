/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '/namazonNewDisign',
  assetPrefix: '/namazonNewDisign/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
