/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["react-svg-loader"],
    });

    return config;
  },
  output: "export",
};
