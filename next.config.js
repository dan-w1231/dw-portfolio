/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/dw-portfolio",
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/public/',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
      type: "asset/resource",
    });

    config.resolve.fallback = { fs: false };

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

