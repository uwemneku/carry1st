/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dev-images-carry1st-products.s3.eu-west-2.amazonaws.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
