/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};

export default nextConfig;
