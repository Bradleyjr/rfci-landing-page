import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow images from Unsplash and rfci.com (static fallback logos)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'rfci.com' },
    ],
  },
}

export default withPayload(nextConfig)
