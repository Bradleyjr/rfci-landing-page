export type TestimonialVideo = {
  title: string
  company: string
  segment: string
  quote: string
  thumbnailUrl: string
  videoUrl: string
  order: number
}

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    title: 'Alan Smith of MSI',
    company: 'MSI',
    segment: 'Manufacturer',
    quote: 'All the issues that are relevant to being successful, we gain that from being part of RFCI.',
    thumbnailUrl: '/media/testimonials/alan-smith-msi.png',
    videoUrl: '#',
    order: 1,
  },
  {
    title: 'Herb Upton of Shaw Industries',
    company: 'Shaw Industries',
    segment: 'Manufacturer',
    quote: 'RFCI brings our industry leaders together.',
    thumbnailUrl: '/media/testimonials/herb-upton-shaw.png',
    videoUrl: '#',
    order: 2,
  },
  {
    title: 'Rick Loomis of Amorim Cork Composites',
    company: 'Amorim Cork Composites',
    segment: 'Supply Chain',
    quote: 'The industry is really coming together to solve the bigger problems.',
    thumbnailUrl: '/media/testimonials/rick-loomis-amorim.png',
    videoUrl: '#',
    order: 3,
  },
  {
    title: 'Anna Allsop & Maddie Wente of DOW',
    company: 'DOW',
    segment: 'Supply Chain',
    quote: 'We really enjoy the community and talking about very relevant industry topics.',
    thumbnailUrl: '/media/testimonials/anna-allsop-maddie-wente-dow.png',
    videoUrl: '#',
    order: 4,
  },
  {
    title: 'Bart Rogers of ROPPE',
    company: 'ROPPE',
    segment: 'Manufacturer',
    quote: "It's a great group of people and manufacturers who join it.",
    thumbnailUrl: '/media/testimonials/bart-rogers-roppe.png',
    videoUrl: '#',
    order: 5,
  },
  {
    title: 'Ed Perrin & Bill Anderson of Karndean',
    company: 'Karndean DesignFlooring',
    segment: 'Manufacturer',
    quote: 'It has been really beneficial.',
    thumbnailUrl: '/media/testimonials/ed-perrin-bill-anderson-karndean.png',
    videoUrl: '#',
    order: 6,
  },
]
