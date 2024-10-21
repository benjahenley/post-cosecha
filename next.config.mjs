/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "https://www.postcosechasrl.com.ar/" : "",
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // config.optimization.splitChunks = {
    //   chunks: "all",
    //   cacheGroups: {
    //     default: false,
    //   },
    // };
    return config;
  },
};

export default nextConfig;
