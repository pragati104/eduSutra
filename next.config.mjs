/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"i.ytimg.com"',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: '"dk7h1f5gq849l.cloudfront.net"',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: '"images.unsplash.com"',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: '"img.icons8.com"',
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
