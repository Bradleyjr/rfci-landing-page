import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'rfci.com' },
    ],
  },
  allowedDevOrigins: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  async redirects() {
    return [
      // Removed resource pages — redirect to main resources page
      { source: '/resources/understanding-material-health', destination: '/resources', permanent: true },
      { source: '/resources/safety-slip-resistance', destination: '/resources', permanent: true },
      { source: '/resources/nine-steps-to-superior-sustainability', destination: '/resources', permanent: true },
      { source: '/resources/building-transparency', destination: '/resources', permanent: true },
      { source: '/resources/chemistry-building-construction', destination: '/resources', permanent: true },
      { source: '/resources/install-standards-training', destination: '/resources', permanent: true },
    ]
  },
}

export default nextConfig
