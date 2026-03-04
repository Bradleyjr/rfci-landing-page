export type Member = {
  name: string
  logoUrl?: string
  logo?: { url: string }
  website?: string
  description?: string
  tier: 'board' | 'associate'
  row?: '1' | '2'
  order: number
}

export const MEMBERS: Member[] = [
  // Board members (Flooring Manufacturers) — Row 1
  { name: 'AHF Products',      logoUrl: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg',                website: 'https://ahfproducts.com',      tier: 'board', row: '1', order: 1 },
  { name: 'American Biltrite', logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg',  website: 'https://americanbiltrite.com', tier: 'board', row: '1', order: 2 },
  { name: 'Beauflor',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg',           website: 'https://beauflor.com',         tier: 'board', row: '1', order: 3 },
  { name: 'Bentley',           logoUrl: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg',            website: 'https://bentleymills.com',     tier: 'board', row: '1', order: 4 },
  { name: 'CFL',               logoUrl: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg',              website: 'https://cfloors.com',          tier: 'board', row: '1', order: 5 },
  { name: 'Classen',           logoUrl: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg',        website: 'https://classen.de',           tier: 'board', row: '1', order: 6 },
  { name: 'Congoleum',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg',          website: 'https://congoleum.com',        tier: 'board', row: '1', order: 7 },
  { name: 'Engineered Floors', logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg',  website: 'https://engineeredfloors.com', tier: 'board', row: '1', order: 8 },
  { name: 'Gerflor',           logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg',            website: 'https://gerflor.com',          tier: 'board', row: '1', order: 9 },
  { name: 'HMTX Industries',   logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg',               website: 'https://hmtx.com',            tier: 'board', row: '1', order: 10 },
  { name: 'Interface',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg',          website: 'https://interface.com',        tier: 'board', row: '1', order: 11 },
  { name: 'Karndean',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg',           website: 'https://karndean.com',         tier: 'board', row: '1', order: 12 },
  // Board members — Row 2
  { name: 'Lonseal',                                                                                                                                        tier: 'board', row: '2', order: 1 },
  { name: 'Mannington',        logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg',         website: 'https://mannington.com',       tier: 'board', row: '2', order: 2 },
  { name: 'Mohawk',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg',             website: 'https://mohawkflooring.com',   tier: 'board', row: '2', order: 3 },
  { name: 'MSI',               logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg',                website: 'https://msisurfaces.com',      tier: 'board', row: '2', order: 4 },
  { name: 'Novalis',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg',            website: 'https://novalisfloors.com',    tier: 'board', row: '2', order: 5 },
  { name: 'NOX Corp',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg',           website: 'https://nox-corp.com',         tier: 'board', row: '2', order: 6 },
  { name: 'Roppe',             logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg',              website: 'https://roppe.com',            tier: 'board', row: '2', order: 7 },
  { name: 'Shaw',              logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg',               website: 'https://shawfloors.com',       tier: 'board', row: '2', order: 8 },
  { name: 'Tarkett',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg',            website: 'https://tarkett.com',          tier: 'board', row: '2', order: 9 },
  { name: 'Torlys',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png',        website: 'https://torlys.com',           tier: 'board', row: '2', order: 10 },
  { name: 'Wellmade',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg',           website: 'https://wellmadefloors.com',   tier: 'board', row: '2', order: 11 },
  { name: 'Windm\u00f6ller',        logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg',       website: 'https://windmoeller.com',      tier: 'board', row: '2', order: 12 },
  // Supply Chain Partners (Associate members)
  { name: 'Amorim',                tier: 'associate', order: 1 },
  { name: 'AM Stabilizers',        tier: 'associate', order: 2 },
  { name: 'Baerlocher',            tier: 'associate', order: 3 },
  { name: 'BASF',                  tier: 'associate', order: 4 },
  { name: 'Bostik',                tier: 'associate', order: 5 },
  { name: 'DMX Membranes',         tier: 'associate', order: 6 },
  { name: 'Dow',                   tier: 'associate', order: 7 },
  { name: 'Eastman Chemical',      tier: 'associate', order: 8 },
  { name: 'Formosa Plastics',      tier: 'associate', order: 9 },
  { name: 'Interprint',            tier: 'associate', order: 10 },
  { name: 'i4F',                   tier: 'associate', order: 11 },
  { name: 'Klockner Pentaplast',   tier: 'associate', order: 12 },
  { name: 'Lighthouse Adhesive',   tier: 'associate', order: 13 },
  { name: 'Mapei',                 tier: 'associate', order: 14 },
  { name: 'Microban',              tier: 'associate', order: 15 },
  { name: 'Mondo',                 tier: 'associate', order: 16 },
  { name: 'Revive',                tier: 'associate', order: 17 },
  { name: 'Owens Corning',         tier: 'associate', order: 18 },
  { name: 'OxyChem',               tier: 'associate', order: 19 },
  { name: 'Patcham USA',           tier: 'associate', order: 20 },
  { name: 'Penn Color',            tier: 'associate', order: 21 },
  { name: 'Performance Additives', tier: 'associate', order: 22 },
  { name: 'PLI Pak-Lite',          tier: 'associate', order: 23 },
  { name: 'POLYTEX',               tier: 'associate', order: 24 },
  { name: 'Schattdecor',           tier: 'associate', order: 25 },
  { name: 'SELIT',                 tier: 'associate', order: 26 },
  { name: 'Shintech',              tier: 'associate', order: 27 },
  { name: 'Taylor Adhesives',      tier: 'associate', order: 28 },
  { name: 'TEC',                   tier: 'associate', order: 29 },
  { name: 'TMT America',           tier: 'associate', order: 30 },
  { name: 'V\u00e4linge',               tier: 'associate', order: 31 },
  { name: 'Valtris',               tier: 'associate', order: 32 },
  { name: 'Versatrim',             tier: 'associate', order: 33 },
  { name: 'Vestolite',             tier: 'associate', order: 34 },
  { name: 'WW Henry',              tier: 'associate', order: 35 },
]
