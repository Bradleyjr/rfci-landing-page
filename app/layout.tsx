import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://rfci.com'),
  title: {
    default: 'RFCI – Resilient Floor Covering Institute',
    template: '%s | RFCI',
  },
  description:
    'The voice of the resilient flooring industry, advancing the category through standards, sustainability, and education.',
  openGraph: {
    type: 'website',
    siteName: 'RFCI – Resilient Floor Covering Institute',
    description: 'The voice of the resilient flooring industry, advancing the category through standards, sustainability, and education.',
  },
}

// Root layout must not render <html>/<body> — each route group manages its own shell.
// - app/(app)/layout.tsx  → html+body for the landing page
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
