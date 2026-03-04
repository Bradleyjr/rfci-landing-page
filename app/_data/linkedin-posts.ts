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
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Feb 20, 2026',
    order: 1,
  },
  {
    title: 'FloorScore Reaches 10,000 Certified Products',
    excerpt: 'A milestone for indoor air quality certification \u2014 FloorScore now covers more than 10,000 products worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Feb 12, 2026',
    order: 2,
  },
  {
    title: 'Spring Industry Meeting Registration Open',
    excerpt: 'Join us in Nashville this April for two days of technical sessions, networking, and industry updates.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Jan 30, 2026',
    order: 3,
  },
  {
    title: 'Resilient Flooring Market Hits Record High',
    excerpt: 'New data confirms resilient flooring holds 65% of all hard surface flooring installations in North America.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    postDate: 'Jan 18, 2026',
    order: 4,
  },
]
