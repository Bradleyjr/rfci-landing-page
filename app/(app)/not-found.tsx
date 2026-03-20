import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-rfci-cream flex flex-col items-center justify-center px-6 text-center">
          <div className="text-8xl font-display font-bold text-rfci-blue/20 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-display font-light text-rfci-black mb-4">
            Page not found.
          </h1>
          <p className="text-rfci-black/60 font-light max-w-md mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </body>
    </html>
  )
}
