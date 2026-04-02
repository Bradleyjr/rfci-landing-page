import { CERTIFICATIONS } from './certifications'

function certificationSummary(slug: string, description: string) {
  const certification = CERTIFICATIONS.find((item) => item.slug === slug)
  return {
    slug,
    title: certification?.title ?? slug,
    iconName: certification?.iconName ?? 'shieldCheck',
    description,
  }
}

const CERT_FLOORSCORE = certificationSummary('floorscore', 'Indoor air quality certification verifying low VOC emissions.')
const CERT_ASSURE = certificationSummary('assure', 'Rigid core quality assurance covering indoor air quality, performance, vertical deflection, heavy metals, and ortho-phthalates.')
const CERT_AFFIRM = certificationSummary('affirm', 'Multi-attribute sustainability certification focused on environmental, health and wellness, and social responsibility criteria.')

export type CertSummary = {
  slug: string
  title: string
  iconName: string
  description: string
}

export type FlooringType = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug: string
  tags: Array<{ label: string; variant: 'green' | 'tan' | 'gray' }>
  productImage?: string
  carouselImage?: string
  diagrams: Array<{ url: string; label: string }>
  composition: string
  advantages: string[]
  installation: string
  relatedCertifications: CertSummary[]
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
    diagrams: [
      { url: '/media/flooring/diagrams/flexible-lvt-gluedown-diagram.png', label: 'Glue-Down (Dry-Back)' },
      { url: '/media/flooring/diagrams/flexible-lvt-looselay-diagram.png', label: 'Floating / Loose-Lay' },
    ],
    composition: 'Luxury Vinyl Tile is produced in either tiles or planks. LVT comes in a variety of shapes and sizes.',
    advantages: [
      'Known for durability',
      'Easier to maintain',
      'Many water-resistant options',
      'Lower installation costs',
      'Commercial grade wear layers and associated finishes provide high-performance attributes.',
      'Robust design universe with the added ability to produce longer and wider planks and larger-format tiles significantly',
      'Broad array of price points',
      'Modular format provides options if tile replacement is necessary',
    ],
    installation: 'There are three basic ways to install LVT:\n\n\u2022 Dry-back or glue-down where planks or tiles are glued directly to the subfloor.\n\u2022 Floating, which uses a click or locking system to keep the floor in place.\n\u2022 Loose-lay where the products are designed to stay flat on the subfloor using minimal or no adhesives. Great for installing over existing floors that are difficult or costly to remove.\n\u2022 An underlayment is often used to provide a moisture vapor barrier and for sound absorption.\n\nEach method offers its own unique features, as well as applications it is best suited for. Most manufacturers offer multiple products across all different installation categories. Always follow the manufacturer\'s installation instructions.',
    relatedCertifications: [CERT_FLOORSCORE, CERT_AFFIRM],
    order: 1,
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00b7 WPC \u00b7 Multilayer',
    slug: 'rigid-core',
    description: 'A newer class of LVT products referred to as Rigid Core or Multilayer flooring has emerged which adds features and benefits to the many design and performance benefits of flexible vinyl LVT products. Rigid Core/Multilayer flooring is defined as modular flooring with a rigid polymeric core, a decorative top surface and an optional soft underlayment pre-attached to the bottom of the product. Rigid Core products are produced in many realistic visuals and in tile and plank formats. Look for the ASSURE\u00ae Certified badge for smart, durable and responsibly made Rigid Core flooring.',
    accentColor: '#78909C',
    productImage: '/media/flooring/rigid-core.png',
    carouselImage: '/images/inspiration/applications/homes/Kitchen-0559-Alt-03-HiResJPG-scaled.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/rigid-core-spc-diagram.png', label: 'SPC (Solid Polymer Core)' },
      { url: '/media/flooring/diagrams/rigid-core-wpc-diagram.png', label: 'WPC (Expanded Polymer Core)' },
    ],
    composition: 'There are two Rigid Core product constructions, Expanded Polymer Core (WPC) and Solid Polymer Core (SPC).\n\nWPC features an expanded polymer core that is light in weight and provides underfoot comfort with good acoustical qualities. WPC\'s thicker construction provides the ability for creating realistic textures. WPC is most often used in residential applications although these products generally include a light to medium traffic commercial warranty.\n\nSPC is made with a solid polymer core, which makes it denser, providing additional benefits due to its hardness. SPC products have greater resistance to indentations, improved dimensional stability, and favorable temperature stability.\n\nBoth WPC and SPC constructions feature rigid cores that have water resistant capabilities.\n\nA pre-attached cork or other acoustical underlayment is often applied to provide added warmth and sound absorption as well as reduced subfloor preparation.\n\nBoth WPC and SPC are offered in a variety of wear layers. The application and related wear layer, and the budget are determining factors for choosing WPC or SPC.\n\nManufacturers of each provide guidance on residential and commercial usage for the various SKUs.',
    advantages: [
      'Known for durability',
      'Easier to maintain',
      'Many water resistant options',
      'Lower installation costs',
      'Unique locking systems enable installation as a floating floor in many applications',
      'Robust design universe',
      'Broad array of price points',
      'Added cushioning and sound absorption with attached underlayment',
      'Modular format provides options if tile replacement is necessary.',
      'Can sometimes install over hard surfaces',
    ],
    installation: 'Many Rigid Core products can be installed as floating floors using click-lock systems. Because of their rigidity, they can often tolerate minor substrate variation better than flexible products, but manufacturer requirements for flatness, expansion space, moisture, and underlayment should still govern the installation. Always follow the manufacturer\'s installation instructions.',
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
    order: 2,
  },
  {
    title: 'Sheet Vinyl',
    subtitle: 'Heterogeneous \u00b7 Homogeneous',
    slug: 'sheet-vinyl',
    description: 'The vinyl sheet flooring offered today is the product of years of advancements in manufacturing technology and refined design capabilities providing more depth and texture than ever before. In-register embossed products are now available, and new and highly advanced finishes make sheet vinyl easier to maintain than ever. In addition to an increased focus on fashion, manufacturers laud sheet vinyl\'s built-in benefits, such as its affordability and waterproof capabilities, and added new technology to improve those benefits.\n\nSheet vinyl flooring is typically offered in 6\u2032 and 12\u2032 widths for commercial and residential spaces, with products for both the professionally installed and do-it-yourself installations. Some manufacturers offer sheet vinyl in even wider widths such as 16\'4", often used in manufactured housing and recreational vehicles, to provide a continuous, seamless floor.',
    accentColor: '#B0C4DE',
    productImage: '/images/inspiration/applications/apartments/Sheet-Vinyl-Blacktex-HD-Avant-Garde_Bone-Venice-Wood-906M.jpg',
    carouselImage: '/images/inspiration/applications/workplace/large-Melodia_HO_VinylSheet_CaseWestern_Cle_Clinic_SchoolofDentistry_HiRes-34.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/heterogeneous-sheet-vinyl-diagram.jpg', label: 'Heterogeneous Construction' },
      { url: '/media/flooring/diagrams/homogeneous-sheet-vinyl-diagram.png', label: 'Homogeneous Construction' },
    ],
    composition: 'Homogeneous sheet vinyl is made of a single layer and is sometimes referred to as through-color, meaning the color and visual on the surface goes all the way through the floor. This gives the flooring rigidity and toughness along with vibrancy and depth of color. Hence, it can be used in places that experience heavy foot traffic. This type flooring is typically available in solid colors and multi-color chip configurations. It is incredibly durable and stain resistant which makes it a great flooring choice for heavy traffic areas.\n\nHeterogeneous sheet vinyl features a multi-layer construction with a wear layer which may provide a printed image or consists of solid chips made from vinyl resin providing endless design possibilities, lasting performance, and low maintenance cost. A layer of foam may be included for underfoot comfort which reduces impact noise and sound transmission and provides added flexibility for ease of handling and installation. Depending on the construction, these products are typically used in commercial, light commercial, residential, and multi-family applications.',
    advantages: [
      'Homogeneous: Known for durability',
      'Homogeneous: Easier to maintain',
      'Homogeneous: Favorable moisture properties',
      'Homogeneous: True through-color construction provides even wear and a consistent appearance over time',
      'Homogeneous: Seams can be heat welded',
      'Homogeneous: Product can be flash coved for more efficient cleaning',
      'Heterogeneous: Known for durability',
      'Heterogeneous: Easier to maintain',
      'Heterogeneous: Favorable moisture properties',
      'Heterogeneous: True through-color construction provides even wear and a consistent appearance over time',
      'Heterogeneous: Technological advancements provide authentic wood and stone visuals and patterns that reflect popular design trends',
      'Heterogeneous: Available in wide widths',
      'Heterogeneous: A great choice for budget-conscious consumers looking for an attractive, durable, seamless residential flooring option',
      'Heterogeneous: Commercial grades of heterogeneous sheet vinyl flooring offer not only superior durability but also attractive design alternatives',
      'Heterogeneous: Warm, quiet and with many beautiful designs',
    ],
    installation: 'Homogeneous: These flooring products are glued down to provide high performance in areas with heavy foot and rolling load traffic.\n\nHeterogeneous: Products come with either a fiberglass, felt or foam backing. Fiberglass-backed sheet vinyl can be installed without glue, or as a modified loose-lay product using minimal adhesive. Felt and foam-backed products are applied to the subfloor with the use of an adhesive.\n\nInstalling a vinyl sheet floor is a very exacting process that requires excellent cutting and seaming skills, and subfloor knowledge. Professional installation by a reputable flooring dealer is highly recommended and may save money in the long run.',
    relatedCertifications: [CERT_FLOORSCORE],
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
    diagrams: [
      { url: '/media/flooring/diagrams/solid-vinyl-tile-diagram.png', label: 'SVT Construction' },
    ],
    composition: 'SVT is produced by cutting homogeneous sheet vinyl into tiles or using molds to make the tiles.',
    advantages: [
      'Known for durability',
      'Easier to maintain',
      'Favorable moisture properties',
      'Through-color construction provides even wear and a consistent appearance over time',
      'The product can be heat welded and coved into an integral base',
      'Performs under heavy rolling loads \u2013 which is ideal for healthcare settings and other installations requiring equipment or furnishings to be rolled from space to space',
      'Shapes of the tiles ranging in size from 12 x 12 to 36 x 36 providing design flexibility',
      'Electrotile Conductive Tile (CVT) and Static Dissipative Tile (SDT) are solid vinyl that include characteristics that meet performance requirements for spaces that require electrical resistance where sensitive electronic equipment is used, such as in healthcare, institutional, and commercial environments',
    ],
    installation: 'The installation and considerations that govern solid vinyl tile are similar to vinyl sheet products, but there is less weight to manage because of the smaller tile sizes. It is the best of both worlds, as SVT has similar product construction, properties, and performance as sheet products, but can be easier to install because of the smaller sizes and less weight. SVT is a no-wax solution and is flexible \u2013 therefore it can be coved up the wall and heat welded to create an integral base.\n\nBecause SVT is in tiles, repairs or replacement of tiles allows for flooring repairs to be made with less disruption to an overall area that requires a larger piece of sheet product to be installed as the replacement.',
    relatedCertifications: [CERT_FLOORSCORE],
    order: 4,
  },
  {
    title: 'Vinyl Composition Tile (VCT)',
    subtitle: '',
    slug: 'vct',
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. VCT is a popular choice due to its low cost and durability. The tiles can be used in a wide range of color and design combinations to create unique, custom effects. The durable through-color construction provides years of lasting beauty. VCT is an economic, commercial grade product built to last. That, paired with the low cost of VCT installation and the ease of maintenance, makes VCT an attractive option for a variety of commercial applications. Millions of square feet of this well-known product have been installed in retail stores, supermarkets, hospitals, and schools. It is also a very popular do-it-yourself product since it is easy to handle and install.',
    accentColor: '#CFD8DC',
    productImage: '/media/flooring/vct.png',
    carouselImage: '/images/inspiration/applications/retail/Expressions_VYL_VCT_Hospitality_1240_1347_1789_RS_HiRes.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/vct-diagram.png', label: 'VCT Construction' },
    ],
    composition: 'The primary raw material in VCT is limestone which is a natural, highly abundant ingredient. Vinyl and color pigments are added to provide product flexibility and design. These products, composed of polyvinyl chloride (PVC) chips, limestone, other fillers, a thermoplastic binder and color pigments are formed into sheets of varying thicknesses (1/8" is most common) by heat and pressure. The sheets are cut into floor tiles with the most common size being 12" x 12". VCT is composed of 85% North American limestone and has a very low carbon footprint and is recyclable which contributes to LEED credits and reduces environmental impacts through landfill diversion and the cost of waste disposal.',
    advantages: [
      'Known for durability',
      'Easier to maintain',
      'Favorable moisture properties',
      'Modular flexibility including large format shapes and sizes',
      'Long life value with true through-pattern VCT',
      'Many products include a factory finish that makes initial maintenance quick and easy',
      'Budget-friendly value with a history of great performance',
    ],
    installation: 'VCT for commercial applications requires the use of an appropriate adhesive as specified by the manufacturer.\n\nGeneral installation information only. Specific installation instructions should be obtained from the flooring manufacturer.',
    relatedCertifications: [CERT_FLOORSCORE],
    order: 6,
  },
  {
    title: 'Rubber',
    subtitle: '',
    slug: 'rubber',
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors, which are contained throughout the thickness of rubber flooring, vary from earthy to bright and run all the way through for a hue that won\'t fade or wear. The surface texture can vary from smooth marbleized or chip designs to many raised textures, including circular, square, flagstone, hammered or diamond-plate patterns and many others. Rubber has long been a solution for high-traffic settings that demand a durable material, resistance to water and burns, and is easy to clean and install.\n\nWith waterproof and slip-resistant properties that make it ideal for harsh environments that require frequent or harsh cleaning, rubber flooring is commonly used in institutional and commercial facilities. Some rubber tiles are engineered to work in areas where petroleum products, animal fats, and vegetable oils are present to provide a safe work environment. Rubber flooring is an excellent alternative, if you\'re looking for something durable, quiet, and warm to walk on. In the past, rubber floors were appreciated for durability over beauty, but today\'s rubber flooring can be as dazzling as any other type of resilient flooring choice. Rubber typically has a higher initial cost but lasts for a very long time. With its natural resilience and strength, rubber flooring is often used in high impact commercial and industrial areas including fitness centers, healthcare applications, and education facilities.\n\nWith advancements in colors, designs and textures, rubber flooring is increasingly popular in office and residential settings. Rubber is also ideal for hardworking areas such as kitchens, baths, entries, and exercise rooms.',
    accentColor: '#D4A574',
    productImage: '/media/flooring/rubber.png',
    carouselImage: '/images/inspiration/applications/hospitals/abpure_hospital-corridor_ABS-3490.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/rubber-sheet-diagram.png', label: 'Sheet Construction' },
      { url: '/media/flooring/diagrams/rubber-tile-diagram.png', label: 'Tile Construction' },
    ],
    composition: 'There are several variations of rubber flooring including natural rubber, synthetic rubber and recycled rubber. Different versions of rubber flooring exist for a number of situations including fatigue resistance in areas where people are standing or walking for long periods and heavy traffic floor stress in industrial environments. Rubber products are available in sheet form and tiles which are typically 20 inch and 40 inch squares.',
    advantages: [
      'Durability \u2013 Rubber is strong, tough, and resilient under a variety of conditions',
      'As a type of resilient flooring, rubber includes the same inherent advantage as other resilient products such as vinyl and linoleum',
      'Rubber flooring provides a durable, easy-to-clean surface that\'s suitable for hard-wearing commercial and residential environments, including hospitals, industrial spaces, transportation applications, fitness centers, gyms, basements, recreation rooms, playrooms, and laundry and utility areas',
      'Resistant to motor and cooking oils \u2013 excellent product in environments where oil and grease are factors such as auto shops and food preparation areas',
      'Easy to maintain',
      'Water-resistant \u2013 Most rubber flooring is highly resistant to damage from moisture on both the top and bottom surfaces of the material',
      'Softness \u2013 Despite its durability, rubber is soft underfoot, one of its important features for active health clubs and fitness centers',
      'Quiet \u2013 The elasticity of rubber flooring makes it very quiet to walk on. Heels don\'t click, and dropped objects land softly',
    ],
    installation: 'Rubber flooring can be installed in sheet or tile format. Always follow the manufacturer\'s installation instructions.',
    relatedCertifications: [CERT_FLOORSCORE],
    order: 7,
  },
  {
    title: 'Linoleum',
    subtitle: '',
    slug: 'linoleum',
    description: 'Invented in the 1860s \u2013 with a number of improvements since then \u2013 linoleum as a floor covering has been largely replaced with vinyl flooring which has similar properties of flexibility and durability but with greater brightness and translucency. The term "linoleum", often used as a generic term for resilient flooring, is a very specific type of flooring. Linoleum is experiencing a revival in popularity, due to its natural ingredients and environmental properties.',
    accentColor: '#8FBC8F',
    productImage: '/images/inspiration/applications/hospitals/Lino_Healthcare_Hall_RS.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/linoleum-diagram.png', label: 'Linoleum Construction' },
    ],
    composition: 'Linoleum is made from all natural ingredients. Included in these natural ingredients are linseed oil, wood flour, limestone, cork, and tree resins. Linseed oil is derived by pressing flaxseed that is dried and ground into a powdery binder. This is combined with limestone, which is extremely abundant, pine resin, and cork and wood flours to form a doughy material to which color is added. Once pressed, it is rolled onto a jute backing and dried. Jute is spun from fibers of jute plants. Available in a variety formats including: 12 in. x 12 in. Square, 12 in. x 24 in. Rectangle, 24 in. x 24 in. Square, 6.5 ft. x 98.4 ft. Sheet, 6.7 ft. x up to 101.4 ft. Sheet',
    advantages: [
      'An all-natural alternative, linoleum is very durable, withstands heavy traffic and scratches, and lasts for decades.',
      'Bio-based construction',
      'Linoleum comes in a wide variety of colors, from quiet neutrals to vibrant hues, and the colors and patterns run all the way through',
      'Comes in Sheet or Tiles',
      'Sheet linoleum lends itself to vibrant designs through borders and insets',
      'Linoleum tiles can be arranged in virtually any pattern imaginable',
      'While more prevalent in commercial spaces linoleum is an attractive option for residential',
      'Soft in feel and warm to the touch',
      'Through-pattern wear layer provides durability and a consistent long-lasting wear appearance',
      'Colorfast \u2013 even as it naturally wears down over time the hue found on the surface of the floor does not fade',
      'Abrasion and gouge resistant',
      'Naturally insulating and light-reflective colors',
    ],
    installation: 'Linoleum is available in both sheet and tile formats for professional installation across commercial and residential applications. Always follow the manufacturer\'s installation instructions.',
    relatedCertifications: [CERT_FLOORSCORE],
    order: 8,
  },
  {
    title: 'Cork',
    subtitle: '',
    slug: 'cork',
    description: 'If the word "cork" only brings to mind wine bottle stoppers, think again. Sleek and contemporary, this resilient flooring is enjoying renewed interest. It is versatile from a design standpoint, thanks to the availability of tiles or planks in a variety of colors and sizes. It\'s also warm and soft underfoot. And cork is a natural insulator, meaning it muffles sound and lowers energy bills. Cork floors are available in cork\'s natural color, stained or painted. Cork flooring is a natural product so it will show the natural variations that occur in the bark. Once installed, a urethane coating can be applied although there are prefinished products on the market today. This is only true for cork floating floor that is made with an HDF or MDF core. This is a huge misnomer with glue down cork \u2013 cork is actually hydrophobic and is completely incapable of absorbing water due to its closed-cell structure. One of the earliest known uses of cork was as a fishing bobber because it actually repels water. However, cork is hygroscopic, meaning it is sensitive to changes in relative humidity and will volumetrically change as humidity levels change.',
    accentColor: '#C4A882',
    productImage: '/images/inspiration/applications/apartments/RS_CCU91100-FSC-MX_Cork-XP-Burl-Natural_Res-scaled.jpg',
    tags: [],
    diagrams: [
      { url: '/media/flooring/diagrams/cork-gluedown-diagram.png', label: 'Direct Glue-Down' },
      { url: '/media/flooring/diagrams/cork-floating-diagram.jpg', label: 'Floating / Click System' },
    ],
    composition: 'Similar to rubber and linoleum, cork is an old product with renewed interest since the product comes from a rapidly renewable resource; the bark of a tree commonly known as Cork Oak. Predominantly found in Spain and Portugal, Cork Oak is native to the Mediterranean region of Europe. Cork flooring is made by removing the bark of the Cork Oak (Quercus Suber). Cork bark is usually harvested every nine years, often from the same tree, which is a much faster rate of renewal than waiting for a seedling to grow large enough to harvest. Cork is a renewable, recyclable, and biodegradable raw material that minimally impacts the environment and produces very little waste. For flooring products, cork is ground up, compressed, and formed into blocks or sheets bonded with polyurethane.',
    advantages: [
      'Cork is a completely natural and renewable resource',
      'It is made from the bark of the cork oak and is harvested without harming the tree',
      'Cork is biodegradable',
      'Cork is a natural thermal and acoustic insulator \u2013 thicker cork offers better insulation',
      'Cork is soft under foot and can provide ergonomic relief',
      'Can be installed as a glue down or floating product',
      'Can be refinished, similar to hardwood flooring',
      'Cork can fade over time, especially in direct sunlight',
      'It can also be dented, punctured and scratched fairly easily \u2013 easily damaged by pets',
      'Cork requires sealing with a wax, polyurethane or vinyl sealant',
      'Not recommended for rooms that get wet',
    ],
    installation: 'Cork can be installed as a homogeneous direct gluedown, heterogeneous direct gluedown, or as a floating floor with a click system. Cork flooring is available in natural color, stained, or painted in a variety of colors and sizes. Always follow the manufacturer\'s installation instructions.',
    relatedCertifications: [CERT_FLOORSCORE],
    order: 9,
  },
]
