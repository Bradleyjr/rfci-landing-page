export type FlooringType = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug?: string
  tags: Array<{ label: string; variant: 'green' | 'tan' | 'gray' }>
  longDescription?: string
  heroImage?: { url: string }
  productImage?: string
  /** Room-scene image for the homepage carousel. Falls back to productImage if absent. */
  carouselImage?: string
  features?: Array<{ title: string; description: string }>
  applications?: Array<{ environment: string; description: string }>
  relatedCertifications?: string[]
  order: number
}

export const FLOORING_TYPES: FlooringType[] = [
  {
    title: 'Flexible LVT/LVP',
    subtitle: 'Luxury Vinyl Tile \u00b7 Planks',
    slug: 'flexible-lvt',
    description: 'Luxury vinyl tile (LVT), is a type of flexible resilient flooring produced in either tiles or planks. Amazing visuals and design realism are the major driving force behind the astounding consumer acceptance of LVT. Continued improvements in film printing technologies combined with in-register printing and texture embossing capture the authentic appeal of natural wood and stone. LVT is a sensible, smart and highly attractive alternative to more expensive flooring systems including ceramic tile, stone, and hardwood.',
    accentColor: '#9CA3AF',
    productImage: '/media/flooring/flexible-lvp.png',
    carouselImage: '/images/inspiration/applications/homes/Living-0148-Alt-02-HiResJPG-scaled.jpg',
    tags: [],
    order: 1,
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00b7 WPC \u00b7 Multilayer',
    slug: 'rigid-core',
    description: 'A newer class of LVT products referred to as Rigid Core or Multilayer flooring has emerged which adds features and benefits to the many design and performance benefits of flexible vinyl LVT products. Rigid Core/Multilayer flooring is defined as modular flooring with a rigid polymeric core, a decorative top surface and an optional soft underlayment pre-attached to the bottom of the product.',
    accentColor: '#78909C',
    productImage: '/media/flooring/rigid-core.png',
    carouselImage: '/images/inspiration/applications/homes/Kitchen-0559-Alt-03-HiResJPG-scaled.jpg',
    tags: [],
    order: 2,
  },
  {
    title: 'Sheet Vinyl',
    subtitle: 'Heterogeneous \u00b7 Homogeneous',
    slug: 'sheet-vinyl',
    description: 'The vinyl sheet flooring offered today is the product of years of advancements in manufacturing technology and refined design capabilities providing more depth and texture than ever before. In-register embossed products are now available, and new and highly advanced finishes make sheet vinyl easier to maintain than ever.',
    accentColor: '#B0C4DE',
    productImage: '/images/inspiration/applications/apartments/Sheet-Vinyl-Blacktex-HD-Avant-Garde_Bone-Venice-Wood-906M.jpg',
    carouselImage: '/images/inspiration/applications/workplace/large-Melodia_HO_VinylSheet_CaseWestern_Cle_Clinic_SchoolofDentistry_HiRes-34.jpg',
    tags: [],
    order: 3,
  },
  {
    title: 'Solid Vinyl Tile (SVT)',
    subtitle: 'SVT \u00b7 Flexible Tiles',
    slug: 'solid-vinyl-tile',
    description: 'Solid vinyl tile (SVT) is a type of flexible resilient flooring produced in tiles and is often used in healthcare, institutional, and educational settings. It is versatile, easy to handle, and can be used to create patterns and shapes within an overall creative floor design.',
    accentColor: '#A5B4BC',
    productImage: '/images/inspiration/applications/hospitals/abpure_hospital_ABS-36-45-73-83-87.jpg',
    tags: [],
    order: 4,
  },
  {
    title: 'Vinyl Composition Tile (VCT)',
    subtitle: '',
    slug: 'vct',
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. VCT is a popular choice due to its low cost and durability. The tiles can be used in a wide range of color and design combinations to create unique, custom effects.',
    accentColor: '#CFD8DC',
    productImage: '/media/flooring/vct.png',
    carouselImage: '/images/inspiration/applications/retail/Expressions_VYL_VCT_Hospitality_1240_1347_1789_RS_HiRes.jpg',
    tags: [],
    order: 6,
  },
  {
    title: 'Rubber',
    subtitle: '',
    slug: 'rubber',
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors, which are contained throughout the thickness of rubber flooring, vary from earthy to bright and run all the way through for a hue that won\'t fade or wear.',
    accentColor: '#D4A574',
    productImage: '/media/flooring/rubber.png',
    carouselImage: '/images/inspiration/applications/hospitals/abpure_hospital-corridor_ABS-3490.jpg',
    tags: [],
    order: 7,
  },
  {
    title: 'Linoleum',
    subtitle: '',
    slug: 'linoleum',
    description: 'Invented in the 1860s \u2013 with a number of improvements since then \u2013 linoleum as a floor covering has been largely replaced with vinyl flooring which has similar properties of flexibility and durability but with greater brightness and translucency. Linoleum is experiencing a revival in popularity, due to its natural ingredients and environmental properties.',
    accentColor: '#8FBC8F',
    productImage: '/images/inspiration/applications/hospitals/Lino_Healthcare_Hall_RS.jpg',
    tags: [],
    order: 8,
  },
  {
    title: 'Cork',
    subtitle: '',
    slug: 'cork',
    description: 'If the word "cork" only brings to mind wine bottle stoppers, think again. Sleek and contemporary, this resilient flooring is enjoying renewed interest. It is versatile from a design standpoint, thanks to the availability of tiles or planks in a variety of colors and sizes. It\'s also warm and soft underfoot. And cork is a natural insulator, meaning it muffles sound and lowers energy bills.',
    accentColor: '#C4A882',
    productImage: '/images/inspiration/applications/apartments/RS_CCU91100-FSC-MX_Cork-XP-Burl-Natural_Res-scaled.jpg',
    tags: [],
    order: 9,
  },
]
