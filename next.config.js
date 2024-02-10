/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
  },
  env: {
    ADMINURL: process.env.ADMINURL,
    // BASEURL: process.env.BASEURL,
    // HOMEURL: process.env.HOMEURL,
  },
  images: {
    domains: [
      "localhost",
      "syrocsbck.sagartech.co.in",
      "tmp.sagartech.co.in",
      "192.168.1.25",
    ], // Add the IP address to the list of allowed domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Add a new pattern for the new IP address
      {
        protocol: "https",
        hostname: "192.168.1.25", // Replace with the actual hostname or IP address
        port: "", // If there is a specific port, add it here
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "syrocsbck.sagartech.co.in", // Replace with the actual hostname or IP address
        port: "", // If there is a specific port, add it here
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tmp.sagartech.co.in", // Replace with the actual hostname or IP address
        port: "", // If there is a specific port, add it here
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
