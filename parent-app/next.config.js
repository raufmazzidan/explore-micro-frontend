/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "parent-app",
        remotes: {
          "child-app": `child-app@http://localhost:5000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Card": "./src/components/Card.js",
          "./pages/Parent": "./src/pages/index",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
