/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "child-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          "parent-app": `parent-app@http://localhost:5050/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./Button": "./src/components/Button.js",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
