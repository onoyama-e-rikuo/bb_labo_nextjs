/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @svgr/webpackの設定
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
