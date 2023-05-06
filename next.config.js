/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  images: {
    domains: ['assets.codepen.io','imgs.yalla-group.com','online.alkoora.live'],
}
}

module.exports = nextConfig
