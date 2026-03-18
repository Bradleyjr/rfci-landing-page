import { CalendarBlank, FileText, NewspaperClipping } from '@phosphor-icons/react/dist/ssr'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import type { PressRelease } from '../../_data/press-releases'

export function PressRoomPage({ releases }: { releases: PressRelease[] }) {
  const sortedReleases = [...releases].sort(
    (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
  )

  return (
    <PageLayout>
      <PageHero
        label="Press Room"
        heading={<>RFCI <span className="font-semibold text-rfci-blue">press room.</span></>}
        subheading="Official announcements, membership news, leadership updates, and event recaps from RFCI in one searchable archive."
      />

      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {sortedReleases.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {sortedReleases.map((release, index) => {
                const href = release.pdfUrl || release.externalUrl || '#'
                return (
                  <SectionReveal key={`${release.date}-${release.title}`} delay={index * 0.05}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full rounded-sm border border-black/5 bg-white p-8 transition-all hover:border-rfci-blue/20 hover:shadow-lg"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 text-label font-bold uppercase tracking-widest text-rfci-blue">
                          <CalendarBlank className="h-4 w-4" />
                          {release.date}
                        </span>
                        <span className="rounded-full bg-rfci-cream px-3 py-1 text-label font-bold uppercase tracking-widest text-rfci-black/60">
                          {release.category}
                        </span>
                      </div>
                      <h2 className="mb-3 text-2xl font-display font-light leading-tight text-rfci-black">
                        {release.title}
                      </h2>
                      <p className="text-rfci-black/60 font-light leading-relaxed">{release.excerpt}</p>
                    </a>
                  </SectionReveal>
                )
              })}
            </div>
          ) : (
            <SectionReveal>
              <div className="rounded-sm border border-black/5 bg-white px-8 py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-rfci-blue/10 text-rfci-blue">
                  <NewspaperClipping className="h-8 w-8" />
                </div>
                <h2 className="mb-3 text-3xl font-display font-light text-rfci-black">Press archive coming soon</h2>
                <p className="mx-auto max-w-2xl text-rfci-black/60 font-light leading-relaxed">
                  The page structure is ready. As press releases are delivered, they can be dropped into the archive with date, category, excerpt, and PDF or announcement links.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-rfci-cream px-4 py-2 text-label font-bold uppercase tracking-widest text-rfci-black/60">
                  <FileText className="h-4 w-4" />
                  Awaiting release assets
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
