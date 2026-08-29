const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Next 16 Turbopack on Windows fails to resolve Bootstrap's internal SCSS @imports
  // (e.g. "mixins/banner"). Explicit load paths fix resolution for Sass.
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/bootstrap/scss'),
    ],
    loadPaths: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/bootstrap/scss'),
    ],
  },
}

module.exports = nextConfig
