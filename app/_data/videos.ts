export type Video = {
  title: string
  description?: string
  duration: string
  thumbnailUrl?: string
  thumbnail?: { url: string }
  courseUrl?: string
  vimeoUrl?: string
  category?: string
  embedUrl?: string
  featured?: boolean
  order: number
}

// "Key Topics in the Resilient Flooring Universe" — featured CEU section
export const FEATURED_VIDEOS: Video[] = [
  {
    title: 'Resilient Flooring: Verified and Certified!',
    description: 'Certifications, declarations, and ecolabels provide sustainability and health and wellness information that subsequently supports requirements in building rating systems.',
    duration: '17 min watch',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/',
    vimeoUrl: 'https://vimeo.com/889986028',
    order: 1,
  },
  {
    title: 'Demystifying EPDs in Sustainable Design',
    description: 'Environmental Product Declarations (EPDs) can be a powerful tool to use when choosing materials for commercial projects. Understanding the ins & outs of this valuable tool has never been more necessary.',
    duration: '19 min watch',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/11/Optimized-3-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/',
    vimeoUrl: 'https://vimeo.com/770737791',
    order: 2,
  },
  {
    title: 'Resilient Flooring and Sustainability',
    description: 'It is important for a specifier to utilize a multi-attribute approach for the selection of resilient flooring products to verify performance, durability, sustainability, and material health attributes.',
    duration: '19 min watch',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/10/Optimized-2-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/',
    vimeoUrl: 'https://vimeo.com/759120070',
    order: 3,
  },
  {
    title: 'Resilient Flooring and Materiality',
    description: 'When specifying products for the built environment, it is important to transparently understand the origin of material ingredients, how materials are used to produce resilient floor products.',
    duration: '19 min watch',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-1-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-materiality/',
    vimeoUrl: 'https://vimeo.com/889960016',
    order: 4,
  },
]

// Keep VIDEOS export for backwards compatibility
export const VIDEOS: Video[] = FEATURED_VIDEOS
