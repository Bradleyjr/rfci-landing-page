export type Environment = {
  name: string
  flooringType: string
  description: string
  courtesy: string
  image?: { url: string }
  order: number
}

export const ENVIRONMENTS: Environment[] = [
  {
    name: 'Single-Family Homes',
    flooringType: 'Luxury Vinyl Plank',
    description: 'A practical fit for kitchens, baths, mudrooms, and living spaces where cleanability, comfort, and style all matter.',
    courtesy: 'Representative residential imagery',
    image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop' },
    order: 1,
  },
  {
    name: 'Apartments & Condos',
    flooringType: 'Rigid Core LVT',
    description: 'Resilient flooring supports fast turns, everyday durability, and broad design flexibility for multifamily interiors.',
    courtesy: 'Representative multifamily imagery',
    image: { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop' },
    order: 2,
  },
  {
    name: 'Townhomes & Duplexes',
    flooringType: 'Flexible LVT',
    description: 'Layered residential projects benefit from resilient floors that balance appearance, maintenance, and value.',
    courtesy: 'Representative residential imagery',
    image: { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop' },
    order: 3,
  },
  {
    name: 'Vacation & Rentals',
    flooringType: 'Sheet Vinyl',
    description: 'High-turnover hospitality and rental settings need surfaces that are easy to maintain and ready for repeated occupancy.',
    courtesy: 'Representative hospitality imagery',
    image: { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop' },
    order: 4,
  },
  {
    name: 'Senior Living',
    flooringType: 'Rubber Flooring',
    description: 'Comfort, acoustics, maintenance, and long-term performance all shape resilient flooring decisions in senior environments.',
    courtesy: 'Representative senior living imagery',
    image: { url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop' },
    order: 5,
  },
  {
    name: 'Offices',
    flooringType: 'Luxury Vinyl Tile',
    description: 'Workplaces use resilient flooring to support daily traffic, flexible planning, and strong lifecycle value.',
    courtesy: 'Representative workplace imagery',
    image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop' },
    order: 6,
  },
  {
    name: 'Healthcare',
    flooringType: 'Homogeneous Sheet Vinyl',
    description: 'Cleanability, infection-control protocols, and dependable performance make resilient flooring a core healthcare solution.',
    courtesy: 'Representative healthcare imagery',
    image: { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop' },
    order: 7,
  },
  {
    name: 'Education',
    flooringType: 'Linoleum',
    description: 'Schools need durable, easy-to-care-for surfaces that can support classrooms, corridors, cafeterias, and commons areas.',
    courtesy: 'Representative education imagery',
    image: { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop' },
    order: 8,
  },
]
