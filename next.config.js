/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
  env: {
    DEMO_LOGIN: process.env.DEMO_LOGIN,
    DEMO_PASSWORD: process.env.DEMO_PASSWORD,
    APP_URL: process.env.APP_URL
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc"
      }
    ]
  }
  // ,
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  //   serverActions: true,
  // }
};


module.exports = nextConfig

