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
  { name: 'AHF Products',      logoUrl: '/media/member-logos/ahf-products.png',      website: 'https://ahfproducts.com',       tier: 'board', row: '1', order: 1 },
  { name: 'American Biltrite', logoUrl: '/media/member-logos/american-biltrite.png',  website: 'https://american-biltrite.com', tier: 'board', row: '1', order: 2 },
  { name: 'Beauflor',          logoUrl: '/media/member-logos/beauflor.png',           website: 'https://beauflor.com',          tier: 'board', row: '1', order: 3 },
  { name: 'Bentley',           logoUrl: '/media/member-logos/bentley.png',            website: 'https://bentleymills.com',      tier: 'associate', order: 30 },
  { name: 'CFL',               logoUrl: '/media/member-logos/cfl.png',               website: 'https://cflflooring.com',       tier: 'board', row: '1', order: 5 },
  { name: 'Classen',           logoUrl: '/media/member-logos/classen.png',            website: 'https://classengroup.com',      tier: 'board', row: '1', order: 6 },
  { name: 'Dongshin Polymer',  logoUrl: '/media/member-logos/dongshin-polymer.png',   website: 'http://dsarttile.co.kr/en/',    tier: 'board', row: '1', order: 8 },
  { name: 'Engineered Floors', logoUrl: '/media/member-logos/engineered-floors.png',  website: 'https://engineeredfloors.com',  tier: 'board', row: '1', order: 9 },
  { name: 'Gerflor',           logoUrl: '/media/member-logos/gerflor.png',            website: 'https://gerflor.com',           tier: 'board', row: '1', order: 10 },
  { name: 'HMTX Industries',   logoUrl: '/media/member-logos/hmtx.png',              website: 'https://hmtx.global',           tier: 'board', row: '1', order: 11 },
  { name: 'Interface',         logoUrl: '/media/member-logos/interface.png',          website: 'https://interface.com',         tier: 'board', row: '1', order: 12 },
  { name: 'Karndean',          logoUrl: '/media/member-logos/karndean.png',           website: 'https://karndean.com',          tier: 'board', row: '1', order: 13 },
  // Board members — Row 2
  { name: 'Lonseal',           logoUrl: '/media/member-logos/lonseal.png',            website: 'https://lonseal.com',           tier: 'associate', order: 31 },
  { name: 'Mannington',        logoUrl: '/media/member-logos/mannington.png',         website: 'https://mannington.com',        tier: 'board', row: '2', order: 2 },
  { name: 'Mohawk',            logoUrl: '/media/member-logos/mohawk.png',             website: 'https://mohawkflooring.com',    tier: 'board', row: '2', order: 3 },
  { name: 'MSI',               logoUrl: '/media/member-logos/msi.png',               website: 'https://msisurfaces.com',       tier: 'board', row: '2', order: 4 },
  { name: 'Novalis',           logoUrl: '/media/member-logos/novalis.png',            website: 'https://novalis-intl.com',      tier: 'board', row: '2', order: 5 },
  { name: 'NOX Corp',          logoUrl: '/media/member-logos/nox-corp.png',           website: 'https://noxglobal.com',         tier: 'board', row: '2', order: 6 },
  { name: 'Roppe',             logoUrl: '/media/member-logos/roppe.png',              website: 'https://roppe.com',             tier: 'board', row: '2', order: 7 },
  { name: 'Shaw',              logoUrl: '/media/member-logos/shaw.png',               website: 'https://shawinc.com/resilientflooring', tier: 'board', row: '2', order: 8 },
  { name: 'Tarkett',           logoUrl: '/media/member-logos/tarkett.png',            website: 'https://tarkett.com',           tier: 'board', row: '2', order: 9 },
  { name: 'Torlys',            logoUrl: '/media/member-logos/torlys.png',             website: 'https://torlys.com',            tier: 'board', row: '2', order: 10 },
  { name: 'Windm\u00f6ller',   logoUrl: '/media/member-logos/windmoller.png',         website: 'https://windmoellerinc.com',    tier: 'board', row: '2', order: 11 },
  // Supply Chain Partners (Associate members)
  { name: 'Amorim Cork Composites', logoUrl: '/media/member-logos/amorim.png',           website: 'https://amorimcorkcomposites.com', tier: 'associate', order: 1 },
  { name: 'AM Stabilizers',      logoUrl: '/media/member-logos/am-stabilizers.png',      website: 'https://amstabilizers.com',        tier: 'associate', order: 2 },
  { name: 'Baerlocher',          logoUrl: '/media/member-logos/baerlocher.png',          website: 'https://baerlocherusa.com',        tier: 'associate', order: 3 },
  { name: 'BASF',                logoUrl: '/media/member-logos/basf.png',                website: 'https://basf.com',                 tier: 'associate', order: 4 },
  { name: 'Bostik',              logoUrl: '/media/member-logos/bostik.png',              website: 'https://bostik.com',               tier: 'associate', order: 5 },
  { name: 'DMX Membranes',       logoUrl: '/media/member-logos/dmx-membranes.png',       website: 'https://dmxmembranes.com',         tier: 'associate', order: 6 },
  { name: 'Dow',                 logoUrl: '/media/member-logos/dow.png',                 website: 'https://dow.com',                  tier: 'associate', order: 7 },
  { name: 'Eastman Chemical',    logoUrl: '/media/member-logos/eastman.png',             website: 'https://eastman.com',              tier: 'associate', order: 8 },
  { name: 'Formosa Plastics',    logoUrl: '/media/member-logos/formosa.png',             website: 'https://fpcusa.com',               tier: 'associate', order: 9 },
  { name: 'Interprint',          logoUrl: '/media/member-logos/interprint.png',          website: 'https://interprint.com',           tier: 'associate', order: 10 },
  { name: 'i4F',                 logoUrl: '/media/member-logos/i4f.png',                 website: 'https://i4f.com',                  tier: 'associate', order: 11 },
  { name: 'Klockner Pentaplast', logoUrl: '/media/member-logos/klockner-pentaplast.png', website: 'https://kpfilms.com',              tier: 'associate', order: 12 },
  { name: 'Lighthouse Adhesives', logoUrl: '/media/member-logos/lighthouse-adhesive.png', website: 'https://lighthouseadhesives.com',  tier: 'associate', order: 13 },
  { name: 'Mapei',               logoUrl: '/media/member-logos/mapei.png',               website: 'https://mapei.com',                tier: 'associate', order: 14 },
  { name: 'Microban',            logoUrl: '/media/member-logos/microban.png',            website: 'https://microban.com',             tier: 'associate', order: 15 },
  { name: 'Mondorevive',         logoUrl: '/media/member-logos/mondorevive.png',         website: 'https://mondorevive.com',          tier: 'associate', order: 16 },
  { name: 'Owens Corning',       logoUrl: '/media/member-logos/owens-corning.png',       website: 'https://owenscorning.com',         tier: 'associate', order: 17 },
  { name: 'OxyChem',             logoUrl: '/media/member-logos/oxychem.png',             website: 'https://oxy.com',                  tier: 'associate', order: 18 },
  { name: 'Patcham USA',         logoUrl: '/media/member-logos/patcham.png',             website: 'https://patchamltd.com',           tier: 'associate', order: 19 },
  { name: 'Penn Color',          logoUrl: '/media/member-logos/penn-color.png',          website: 'https://penncolor.com',            tier: 'associate', order: 20 },
  { name: 'Performance Additives', logoUrl: '/media/member-logos/performance-additives.png', website: 'https://performanceadditives.us', tier: 'associate', order: 21 },
  { name: 'PLI Pak-Lite',        logoUrl: '/media/member-logos/pli-pak-lite.png',        website: 'https://pliusa.com',               tier: 'associate', order: 22 },
  { name: 'POLYTEX',             logoUrl: '/media/member-logos/polytex.png',             website: 'https://polytexus.com',            tier: 'associate', order: 23 },
  { name: 'Schattdecor',         logoUrl: '/media/member-logos/schattdecor.svg',         website: 'https://schattdecor.com',          tier: 'associate', order: 24 },
  { name: 'SELIT',               logoUrl: '/media/member-logos/selit.png',               website: 'https://selit-na.com',             tier: 'associate', order: 25 },
  { name: 'Shintech',            logoUrl: '/media/member-logos/shintech.png',            website: 'https://shintech.com',             tier: 'associate', order: 26 },
  { name: 'Taylor Adhesives',    logoUrl: '/media/member-logos/taylor-adhesives.png',    website: 'https://tayloradhesives.com',      tier: 'associate', order: 27 },
  { name: 'TEC',                 logoUrl: '/media/member-logos/tec.png',                 website: 'https://tecspecialty.com',          tier: 'associate', order: 28 },
  { name: 'TMT America',         logoUrl: '/media/member-logos/tmt-america.png',         website: 'https://tmtamerica.com',           tier: 'associate', order: 29 },
  { name: 'V\u00e4linge',        logoUrl: '/media/member-logos/valinge.png',             website: 'https://valinge.com',              tier: 'associate', order: 30 },
  { name: 'Valtris',             logoUrl: '/media/member-logos/valtris.png',             website: 'https://valtris.com',              tier: 'associate', order: 31 },
  { name: 'Versatrim',           logoUrl: '/media/member-logos/versatrim.png',           website: 'https://versatrim.com',            tier: 'associate', order: 32 },
  { name: 'Vestolit',            logoUrl: '/media/member-logos/vestolit.png',            website: 'https://vestolit.com',             tier: 'associate', order: 33 },
  { name: 'WW Henry',            logoUrl: '/media/member-logos/ww-henry.png',            website: 'https://wwhenry.com',              tier: 'associate', order: 34 },
]
