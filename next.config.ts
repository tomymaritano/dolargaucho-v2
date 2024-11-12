/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/dolares',
        destination: 'https://dolarapi.com/v1/dolares',
      },
    ];
  },
};

module.exports = nextConfig;