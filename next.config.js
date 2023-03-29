/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailus.io", "tailwindui.com", "assets.goal.com", "mdbcdn.b-cdn.net", "store.storeimages.cdn-apple.com"],
  },
};

module.exports = nextConfig;
