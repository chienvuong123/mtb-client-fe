import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Các yêu cầu tới /api/* sẽ được proxy
        destination: 'http://localhost:3001/:path*',
      },
    ];
  },
};

export default nextConfig;
