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
        source: '/product/:id',
        destination: '/product-detail/:id',
      },
    ];
  },
};

export default nextConfig;
