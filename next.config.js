/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
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
    return config;
  },
  nextConfig,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
}

