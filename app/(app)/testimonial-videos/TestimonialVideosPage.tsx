import { PlayCircle, Quotes } from '@phosphor-icons/react/dist/ssr'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import type { TestimonialVideo } from '../../_data/testimonial-videos'

export function TestimonialVideosPage({ videos }: { videos: TestimonialVideo[] }) {
  const sortedVideos = [...videos].sort((left, right) => left.order - right.order)

  return (
    <PageLayout>
      <PageHero
        label="Testimonials"
        heading={<>Testimonial <span className="font-semibold text-rfci-blue">video archive.</span></>}
        subheading="A dedicated home for member, partner, and industry testimonial videos as the RFCI archive is assembled."
      />

      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {sortedVideos.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sortedVideos.map((video, index) => (
                <SectionReveal key={`${video.company}-${video.title}`} delay={index * 0.05}>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full overflow-hidden rounded-sm border border-black/5 bg-white transition-all hover:border-rfci-blue/20 hover:shadow-lg"
                  >
                    <div className="relative aspect-video overflow-hidden bg-rfci-black/10">
                      {video.thumbnailUrl ? (
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-rfci-black/20">
                          <PlayCircle className="h-12 w-12" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="mb-3 text-label font-bold uppercase tracking-widest text-rfci-blue">
                        {video.company} · {video.segment}
                      </div>
                      <h2 className="mb-3 text-2xl font-display font-light leading-tight text-rfci-black">
                        {video.title}
                      </h2>
                      <p className="text-rfci-black/60 font-light leading-relaxed">“{video.quote}”</p>
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal>
              <div className="rounded-sm border border-black/5 bg-white px-8 py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-rfci-blue/10 text-rfci-blue">
                  <Quotes className="h-8 w-8" />
                </div>
                <h2 className="mb-3 text-3xl font-display font-light text-rfci-black">Archive ready for uploads</h2>
                <p className="mx-auto max-w-2xl text-rfci-black/60 font-light leading-relaxed">
                  The page structure is in place for testimonial clips. As video files, thumbnails, and quotes are finalized, they can be added without changing the page design.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-rfci-cream px-4 py-2 text-label font-bold uppercase tracking-widest text-rfci-black/60">
                  <PlayCircle className="h-4 w-4" />
                  Awaiting video assets
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
