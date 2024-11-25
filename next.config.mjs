/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shareicon.net",
      },
    ],
  },
};

export default nextConfig;
