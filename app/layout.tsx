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

// Root layout — app/(app)/layout.tsx renders the html+body shell
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
