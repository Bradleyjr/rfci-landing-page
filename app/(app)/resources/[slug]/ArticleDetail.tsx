import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { mediaUrl } from '../../../_lib/transforms'

const TYPE_COLORS: Record<string, string> = {
  article: 'bg-rfci-blue/10 text-rfci-blue',
  video: 'bg-sky-50 text-sky-700',
  technical: 'bg-slate-100 text-slate-600',
  sustainability: 'bg-emerald-50 text-emerald-700',
  standard: 'bg-amber-50 text-amber-700',
  whitepaper: 'bg-slate-100 text-slate-600',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ArticleDetail({ resource, relatedResources }: { resource: any; relatedResources: any[] }) {
  const thumbnailSrc = resource.thumbnailUrl || mediaUrl(resource.thumbnail)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rfci-cream py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-rfci-black/50 hover:text-rfci-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>

            <div className="mb-5">
              <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 inline-block ${TYPE_COLORS[resource.type] || TYPE_COLORS.article}`}>
                {resource.type === 'article' ? 'Article' : resource.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] mb-6">
              {resource.title}
            </h1>

            {resource.description && (
              <p className="text-lg md:text-xl text-rfci-black/60 max-w-3xl leading-relaxed font-light">
                {resource.description}
              </p>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      {thumbnailSrc && (
        <section className="relative h-64 md:h-96 overflow-hidden">
          <img src={thumbnailSrc} alt={resource.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </section>
      )}

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {resource.body ? (
            <div className="prose prose-lg prose-rfci max-w-none
              prose-headings:font-display prose-headings:font-light prose-headings:text-rfci-black
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-rfci-black/70 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-rfci-blue prose-a:no-underline hover:prose-a:underline
              prose-strong:text-rfci-black prose-strong:font-medium
              prose-blockquote:border-rfci-blue prose-blockquote:text-rfci-black/60
              prose-li:text-rfci-black/70 prose-li:font-light
            ">
              <div dangerouslySetInnerHTML={{ __html: resource.body }} />
            </div>
          ) : (
            <p className="text-base text-rfci-black/50 text-center font-light">
              No article content available.
            </p>
          )}
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Related <span className="font-semibold text-rfci-blue">resources</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedResources.slice(0, 3).map((r, i) => (
                <SectionReveal key={r.slug || r.title} delay={i * 0.1}>
                  <Link
                    href={r.internalUrl || (r.slug ? `/resources/${r.slug}` : (r.externalUrl || '#'))}
                    className="group block p-8 bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 h-full"
                  >
                    <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 inline-block mb-4 ${TYPE_COLORS[r.type] || TYPE_COLORS.technical}`}>
                      {r.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors mb-2 line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-rfci-black/60 font-light line-clamp-2">{r.description}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
