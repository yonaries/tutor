/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://peerconnect-pearl.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
