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
    image: { url: '/images/inspiration/applications/homes/APX134-RS-Mokuzai-Sapling.jpg' },
    order: 1,
  },
  {
    name: 'Multi-Family',
    flooringType: 'Rigid Core LVT',
    description: 'Resilient flooring supports fast turns, everyday durability, and broad design flexibility for multifamily interiors.',
    courtesy: 'Courtesy of Mannington',
    image: { url: '/images/inspiration/applications/apartments/PFSR677_PierOak-ROOM-2.jpg' },
    order: 2,
  },
  {
    name: 'Workplace',
    flooringType: 'Luxury Vinyl Tile',
    description: 'Workplaces use resilient flooring to support daily traffic, flexible planning, and strong lifecycle value.',
    courtesy: 'Courtesy of Karndean',
    image: { url: '/images/inspiration/applications/workplace/LLP332-Urban-Fabric-Oak-Lobby-P2_CM.jpg' },
    order: 3,
  },
  {
    name: 'Education',
    flooringType: 'Linoleum',
    description: 'Schools need durable, easy-to-care-for surfaces that can support classrooms, corridors, cafeterias, and commons areas.',
    courtesy: 'Courtesy of RFCI member',
    image: { url: '/images/inspiration/applications/education/LinoFloor_Education_552_561_601_670_761_RS.jpg' },
    order: 4,
  },
  {
    name: 'Hospitals & Clinics',
    flooringType: 'Sheet Vinyl',
    description: 'Cleanability, infection-control protocols, and dependable performance make resilient flooring a core healthcare solution.',
    courtesy: 'Courtesy of RFCI member',
    image: { url: '/images/inspiration/applications/hospitals/Hartford-Healthcare-Envire-1-9-2017.jpg' },
    order: 5,
  },
  {
    name: 'Senior Living',
    flooringType: 'Rubber Flooring',
    description: 'Comfort, acoustics, maintenance, and long-term performance all shape resilient flooring decisions in senior environments.',
    courtesy: 'Courtesy of American Biltrite',
    image: { url: '/images/inspiration/applications/hospitals/abpure_senior-room_ABS-45.jpg' },
    order: 6,
  },
  {
    name: 'Hospitality',
    flooringType: 'Sheet Vinyl',
    description: 'Hotels, resorts, and restaurant venues need surfaces that balance guest experience, ease of maintenance, and long-term durability.',
    courtesy: 'Courtesy of RFCI member',
    image: { url: '/images/inspiration/applications/hotels/LTMD9E86W_CampbridgeWhiteOak-ROOM-1.jpg' },
    order: 7,
  },
  {
    name: 'Retail',
    flooringType: 'Flexible LVT',
    description: 'Retail spaces demand flooring that handles foot traffic, supports brand aesthetics, and holds up under daily wear.',
    courtesy: 'Courtesy of RFCI member',
    image: { url: '/images/inspiration/applications/retail/Expressions_VYL_VCT_Hospitality_1240_1347_1789_RS_HiRes.jpg' },
    order: 8,
  },
]
