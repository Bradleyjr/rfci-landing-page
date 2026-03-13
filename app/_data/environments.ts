export type Environment = {
  name: string
  flooringType: string
  image?: { url: string }
  order: number
}

export const ENVIRONMENTS: Environment[] = [
  { name: 'Single-Family Homes',  flooringType: 'Luxury Vinyl Plank',      image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop' }, order: 1 },
  { name: 'Apartments & Condos',  flooringType: 'Rigid Core LVT',          image: { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop' }, order: 2 },
  { name: 'Townhomes & Duplexes', flooringType: 'Flexible LVT',            image: { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop' }, order: 3 },
  { name: 'Vacation & Rentals',   flooringType: 'Sheet Vinyl',             image: { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop' }, order: 4 },
  { name: 'Senior Living',        flooringType: 'Rubber Flooring',         image: { url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop' }, order: 5 },
  { name: 'Offices',              flooringType: 'Luxury Vinyl Tile',       image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop' }, order: 6 },
  { name: 'Healthcare',           flooringType: 'Homogeneous Sheet Vinyl', image: { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop' }, order: 7 },
  { name: 'Education',            flooringType: 'Linoleum',                image: { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop' }, order: 8 },
]
