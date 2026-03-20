export type LinkedInPost = {
  title: string
  excerpt?: string
  image?: { url: string }
  imageUrl?: string
  postUrl: string
  postDate?: string
  order: number
}

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    title: 'RFCI Welcomes New Board Members for 2026',
    excerpt: 'We are pleased to announce the appointment of three new board members who bring decades of industry experience to RFCI.',
    imageUrl: '/images/inspiration/applications/workplace/Lonseal-Lonplate-I-Architect-Firm.jpg',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Feb 20, 2026',
    order: 1,
  },
  {
    title: 'FloorScore Reaches 10,000 Certified Products',
    excerpt: 'A milestone for indoor air quality certification \u2014 FloorScore now covers more than 10,000 products worldwide.',
    imageUrl: '/images/inspiration/applications/homes/72201-RS.jpg',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Feb 12, 2026',
    order: 2,
  },
  {
    title: 'Spring Industry Meeting Registration Open',
    excerpt: 'Join us in Nashville this April for two days of technical sessions, networking, and industry updates.',
    imageUrl: '/images/inspiration/applications/restaurants/HTNASH-69.jpg',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Jan 30, 2026',
    order: 3,
  },
  {
    title: 'Resilient Flooring Market Hits Record High',
    excerpt: 'Resilient flooring continues to lead the hard surface flooring category in North America, driven by innovation, sustainability, and design versatility.',
    imageUrl: '/images/inspiration/applications/workplace/Gen_2235DL_Alta_RS.jpg',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Jan 18, 2026',
    order: 4,
  },
]
