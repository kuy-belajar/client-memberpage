/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  env: {
    CLIENT_FRONTPAGE_URL: process.env.CLIENT_FRONTPAGE_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
};

module.exports = nextConfig;
