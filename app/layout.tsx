import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RFCI – Resilient Floor Covering Institute',
  description:
    'The voice of the resilient flooring industry, advancing the category through standards, sustainability, and education.',
}

// Root layout must not render <html>/<body> — each route group manages its own shell.
// - app/(app)/layout.tsx  → html+body for the landing page
// - app/(payload)/admin/layout.tsx → Payload RootLayout (its own html+body) for admin
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
