/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
