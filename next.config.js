/** @type {import('next').NextConfig} */

const nextConfig = {
  outDir: 'export',
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'openweathermap.org',
          },
      ],
  },
};

module.exports = nextConfig;
