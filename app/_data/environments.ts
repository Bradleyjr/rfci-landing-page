export type Environment = {
  name: string
  flooringType: string
  image?: { url: string }
  order: number
}

export const ENVIRONMENTS: Environment[] = [
  { name: 'Single-Family Homes',  flooringType: 'Luxury Vinyl Plank',      order: 1 },
  { name: 'Apartments & Condos',  flooringType: 'Rigid Core LVT',          order: 2 },
  { name: 'Townhomes & Duplexes', flooringType: 'Flexible LVT',            order: 3 },
  { name: 'Vacation & Rentals',   flooringType: 'Sheet Vinyl',             order: 4 },
  { name: 'Senior Living',        flooringType: 'Rubber Flooring',         order: 5 },
  { name: 'Offices',              flooringType: 'Luxury Vinyl Tile',       order: 6 },
  { name: 'Healthcare',           flooringType: 'Homogeneous Sheet Vinyl', order: 7 },
  { name: 'Education',            flooringType: 'Linoleum',                order: 8 },
]
