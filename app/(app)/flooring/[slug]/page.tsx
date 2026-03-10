import { notFound } from 'next/navigation'
import { FlooringDetail } from './FlooringDetail'
import { FLOORING_TYPES } from '../../../_data/flooring-types'

const CERT_FLOORSCORE = { slug: 'floorscore', title: 'FloorScore®', iconName: 'shieldCheck', description: 'Indoor air quality certification verifying low VOC emissions.' }
const CERT_ASSURE = { slug: 'assure', title: 'ASSURE® Certified', iconName: 'leaf', description: 'Third-party sustainability certification across the full product lifecycle.' }
const CERT_AFFIRM = { slug: 'affirm', title: 'AFFIRM™ Certified', iconName: 'globe', description: 'Material health certification disclosing chemical ingredients.' }
const CERT_EPD = { slug: 'epd', title: 'Environmental Product Declarations', iconName: 'globe', description: 'Standardized environmental impact reporting based on ISO 14025.' }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FLOORING_FALLBACK: Record<string, any> = {
  'flexible-lvt': {
    title: 'Flexible LVT', subtitle: 'Luxury Vinyl Tile · Planks', slug: 'flexible-lvt',
    accentColor: '#0164DB',
    description: 'Luxury vinyl tile (LVT) is a type of flexible resilient flooring produced in either tiles or planks. Continued improvements in film printing technologies combined with in-register printing and texture embossing capture the authentic appeal of natural wood and stone. LVT is a sensible, smart and highly attractive alternative to more expensive flooring systems including ceramic tile, stone, and hardwood.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'High Traffic', variant: 'amber' }, { label: 'Easy Install', variant: 'gray' }],
    features: [
      { title: 'Design Realism', description: 'Longer and wider planks with larger-format tiles reduce pattern repeat, while in-register printing and texture embossing create authentic wood and stone visuals.' },
      { title: 'Versatile Installation', description: 'Three installation methods: dry-back/glue-down, floating click/lock system, and loose-lay with minimal or no adhesives for installing over existing floors.' },
      { title: 'Scratch & Scuff Resistant', description: 'Commercial grade wear layers provide high-performance attributes. Ideal for pet-loving owners and busy lifestyles with easy cleaning and durability.' },
      { title: 'Water Resistant', description: 'Can withstand frequent mopping and heavy foot traffic. Damaged individual tiles or planks are easy to replace.' },
    ],
    composition: 'Luxury Vinyl Tile is produced in either tiles or planks. Shapes of the tiles range in size from 12x12 to 24x24, and even 12x24 rectangular. For luxury wood looks, LVT comes in standard plank shapes such as 3x36, 4½x36, as well as extra-long and wide such as 9"x72".',
    advantages: [
      'Design realism combined with the ability to produce longer and wider planks and larger-format tiles significantly enhances product appearance.',
      'Low installation costs, water resistance attributes, and low maintenance requirements offer excellent performance for busy lifestyles.',
      'Highly durable — scratch and scuff resistant.',
      'Provides a wide range of exotic species visuals for design versatility.',
      'Ideal product for pet-loving owners — scratch resistance for energetic pets, easy to clean and durable.',
      'Water resistant, can withstand frequent mopping and heavy foot traffic.',
      'Damaged individual tiles or planks are easy to replace.',
      'Commercial grade wear layers and associated finishes provide high-performance attributes.',
      'Grout can be added to some LVT products for a high-end design option at an affordable price.',
    ],
    installation: 'There are three basic ways to install LVT: dry-back or glue-down where planks or tiles are glued directly to the subfloor; floating, which uses a click or locking system to keep the floor in place; and loose-lay where the products are designed to stay flat on the subfloor using minimal or no adhesives — great for installing over existing floors that are difficult or costly to remove. An underlayment is often used to provide a moisture vapor barrier and for sound absorption.',
    applications: [
      { environment: 'Commercial', description: 'Versatile design aesthetics and incomparable performance attributes make LVT ideal for commercial spaces.' },
      { environment: 'Residential', description: 'Beauty and realism of natural wood and stone combined with low installation costs and low maintenance for busy lifestyles.' },
      { environment: 'Hospitality & Multifamily', description: 'Pet-friendly, water resistant, and scratch resistant for multifamily or hospitality environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
  },
  'rigid-core': {
    title: 'Rigid Core', subtitle: 'SPC · WPC · Multilayer', slug: 'rigid-core',
    accentColor: '#455A64',
    description: 'An entirely new class of stepped-up LVT products referred to as Rigid Core or Multilayer flooring, defined as modular flooring with a rigid polymeric core, a decorative top surface, and an optional soft underlayment pre-attached to the bottom. Available in WPC (Expanded Polymer Core) for lightweight comfort and SPC (Solid Polymer Core) for greater density and indentation resistance. Both constructions are waterproof.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'Dimensionally Stable', variant: 'amber' }, { label: 'ASSURE Eligible', variant: 'gray' }],
    features: [
      { title: 'Floating Installation', description: 'Unique locking systems allow floating installation with no adhesives required. Can often be installed without acclimation and with minimal subfloor preparation.' },
      { title: 'Waterproof Construction', description: 'Fully waterproof for bathrooms, kitchens, laundry rooms, and entryways. Can install over most existing hard surfaces including ceramic tile.' },
      { title: 'Temperature & Humidity Stability', description: 'Greater resistance to humidity and temperature variations with no telegraphing of minor subfloor irregularities.' },
      { title: 'Cushioning & Acoustics', description: 'Pre-attached cork or acoustical underlayment provides added cushioning, sound absorption, and underfoot comfort.' },
    ],
    composition: 'There are two Rigid Core product constructions: Expanded Polymer Core (WPC) and Solid Polymer Core (SPC). WPC features an expanded polymer core that is light in weight and provides underfoot comfort with excellent acoustical qualities. WPC\'s thicker construction provides the ability for creating realistic textures and is most often used in residential applications. SPC is made with a solid polymer core, which makes it denser, providing greater resistance to indentations, improved dimensional stability, and superior temperature stability. Both WPC and SPC constructions feature rigid cores that are waterproof. A pre-attached cork or other acoustical underlayment is often applied to provide added warmth and sound absorption.',
    advantages: [
      'Unique locking systems enable installation as a floating installation — no adhesives required.',
      'Can often be installed without any need for acclimation.',
      'Require minimal, time-consuming subfloor preparation.',
      'No telegraphing of minor subfloor irregularities or imperfections.',
      'Waterproof for installation in water-prone areas such as bathrooms, kitchens, laundry rooms, and entryways.',
      'Greater resistance to humidity and temperature variations.',
      'Can install over most existing hard surfaces, including ceramic tile.',
      'Added cushioning and sound absorption with attached underlayment.',
    ],
    installation: 'Rigid Core products install as a floating floor using click-lock or locking systems. No adhesives are required for residential and light-commercial applications. Because of the product\'s rigidity, installation can often proceed without acclimation, and minimal subfloor preparation is needed. Products can be installed over most existing hard surfaces, including ceramic tile.',
    applications: [
      { environment: 'Residential', description: 'Waterproof for bathrooms, kitchens, laundry rooms, and entryways with easy floating installation over existing floors.' },
      { environment: 'Commercial', description: 'SPC construction offers greater indentation resistance and improved dimensional stability for demanding commercial environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
  },
  'heterogeneous-sheet-vinyl': {
    title: 'Heterogeneous Sheet Vinyl', subtitle: 'Multi-Layer · Printed Design', slug: 'heterogeneous-sheet-vinyl',
    accentColor: '#00897B',
    description: 'The vinyl sheet flooring offered today is the product of years of advancements in manufacturing technology and refined design capabilities providing more depth and texture than ever before. In-register embossed products are now available, and new highly advanced finishes make sheet vinyl easier to maintain than ever. Typically offered in 6\' and 12\' widths for commercial and residential spaces.',
    tags: [{ label: 'Seamless', variant: 'green' }, { label: 'Healthcare', variant: 'amber' }],
    features: [
      { title: 'Authentic Visuals', description: 'Authentic wood and stone visuals and patterns reflecting popular design trends with in-register embossing for realistic texture.' },
      { title: 'Seamless Wide Widths', description: 'Available in wide widths for seamless installation with excellent top-down moisture protection.' },
      { title: 'Multi-Layer Construction', description: 'Wear layer with printed image or solid vinyl chips provides endless design possibilities, lasting performance, and low maintenance cost. A foam layer may be included for underfoot comfort.' },
      { title: 'Loose-Lay Option', description: 'Some manufacturers offer loose-lay installation. Warm, quiet, and beautiful with superior durability in commercial grades.' },
    ],
    composition: 'Heterogeneous sheet vinyl features a multi-layer construction with a wear layer which may provide a printed image or consists of solid chips made from vinyl resin providing endless design possibilities, lasting performance, and low maintenance cost. A layer of foam may be included for underfoot comfort which reduces impact noise and sound transmission and provides added flexibility for ease of handling and installation. These products are typically used in commercial, light commercial, residential, and multi-family applications.',
    advantages: [
      'Technological advancements provide authentic wood and stone visuals and patterns that reflect popular design trends.',
      'Available in wide widths for a seamless installation that provides excellent top-down moisture protection.',
      'A great choice for budget-conscious consumers looking for an attractive, durable, seamless residential flooring option.',
      'Commercial grades offer not only superior durability but also attractive design alternatives.',
      'Some manufacturers offer loose-lay installation specifications to make these products simple and cost-effective to install.',
      'Warm, quiet, and beautiful.',
    ],
    installation: 'Products come with either a fiberglass, felt, or foam backing. Fiberglass-backed sheet vinyl can be installed without glue, or as a modified loose-lay product using minimal adhesive. Felt and foam-backed products are applied to the subfloor with the use of an adhesive. Sheet vinyl can typically be installed over a wide variety of surfaces. Professional installation by a reputable flooring dealer is highly recommended.',
    applications: [
      { environment: 'Commercial', description: 'Commercial grades offer superior durability and attractive design alternatives for high-traffic environments.' },
      { environment: 'Residential', description: 'A great choice for budget-conscious consumers seeking authentic wood and stone visuals.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'homogeneous-sheet-vinyl': {
    title: 'Homogeneous Sheet Vinyl', subtitle: 'Through-Body · Single Layer', slug: 'homogeneous-sheet-vinyl',
    accentColor: '#5E35B1',
    description: 'Made of a single layer, sometimes referred to as through-color, meaning the color and visual on the surface goes all the way through the floor. This gives the flooring rigidity and toughness along with vibrancy and depth of color. Typically available in solid colors and multi-color chip configurations, it is incredibly durable and stain resistant.',
    tags: [{ label: 'Through-Body Color', variant: 'green' }, { label: 'Refinishable', variant: 'amber' }],
    features: [
      { title: 'Through-Color Construction', description: 'True through-color construction provides even wear and a consistent appearance over time. Scratches and wear do not reveal a different layer.' },
      { title: 'Heat-Welded Seams', description: 'Seams can be heat welded creating strong, clean seams which aids in infection prevention. Product can be flash coved for more efficient cleaning.' },
      { title: 'Heavy Rolling Load Performance', description: 'Durable performance even under heavy rolling loads with superior damage and abrasion resistance.' },
      { title: 'Easy Maintenance', description: 'Ease of cleaning with superior stain resistance. A proven product for demanding environments.' },
    ],
    composition: 'Homogeneous sheet vinyl is made of a single layer and is sometimes referred to as through-color, meaning the color and visual on the surface goes all the way through the floor. This gives the flooring rigidity and toughness along with vibrancy and depth of color. It can be used in places that experience heavy foot traffic. This type of flooring is typically available in solid colors and multi-color chip configurations. It is incredibly durable and stain resistant.',
    advantages: [
      'A proven product for health care and education applications.',
      'True through-color construction provides even wear and a consistent appearance over time.',
      'Durable performance even under heavy rolling loads.',
      'Ease of cleaning, superior damage and abrasion resistance.',
      'Seams can be heat welded, creating strong, clean seams which aids in infection prevention.',
      'Product can be flash coved for more efficient cleaning to help with infection control.',
    ],
    installation: 'These flooring products are glued down to provide high performance in areas with heavy foot and rolling load traffic. Installing a vinyl sheet floor is a very exacting process that requires excellent cutting and seaming skills, and subfloor knowledge. Professional installation by a reputable flooring dealer is highly recommended.',
    applications: [
      { environment: 'Healthcare', description: 'A proven product for healthcare applications with heat-welded seams and flash coving to aid in infection prevention and control.' },
      { environment: 'Education', description: 'Through-color construction and superior durability make it ideal for high-traffic educational facilities.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'vct': {
    title: 'Vinyl Composition Tile', subtitle: 'VCT · Commercial Standard', slug: 'vct',
    accentColor: '#E65100',
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. The tiles can be used in a wide range of color and design combinations to create unique, custom effects. Composed primarily of North American limestone with vinyl and color pigments, VCT is an economic, commercial grade product built to last.',
    tags: [{ label: 'Low Cost', variant: 'green' }, { label: 'Refinishable', variant: 'amber' }, { label: 'Commercial', variant: 'gray' }],
    features: [
      { title: 'Budget-Friendly Value', description: 'Lowest carbon footprint of all resilient products with great performance history. Many products include factory finish for quick initial maintenance.' },
      { title: 'Through-Pattern Durability', description: 'Long life value with true through-pattern VCT. Durable through-color construction provides years of lasting beauty.' },
      { title: 'Modular Flexibility', description: 'Modular flexibility including large format shapes and sizes. Most common size 12x12, 1/8" thick. Recyclable and contributes to LEED credits.' },
      { title: 'Heavy Traffic Performance', description: 'Withstands heavy foot and rolling load traffic. Made in USA with the lowest carbon footprint of all resilient products.' },
    ],
    composition: 'The primary raw material in VCT is limestone, which is a natural, highly abundant ingredient. Vinyl and color pigments are added to provide product flexibility and design. These products, composed of polyvinyl chloride (PVC) chips, limestone, other fillers, a thermoplastic binder, and color pigments are formed into sheets of varying thicknesses (1/8" is most common) by heat and pressure. The sheets are cut into floor tiles with the most common size being 12"x12". VCT is composed of 85% North American limestone, has a very low carbon footprint, and is recyclable — contributing to LEED credits and reducing environmental impacts through landfill diversion.',
    advantages: [
      'Modular flexibility including large format shapes and sizes.',
      'Long life value with true through-pattern VCT.',
      'Withstands heavy foot and rolling load traffic.',
      'Many products include a factory finish that makes initial maintenance quick and easy.',
      'Budget-friendly value with a history of great performance.',
      'Made in USA with lowest carbon footprint of all resilient products.',
    ],
    installation: 'VCT for commercial applications requires the use of an appropriate adhesive as specified by the manufacturer. It is also a very popular do-it-yourself product since it is easy to handle and install.',
    applications: [
      { environment: 'Commercial & Institutional', description: 'A popular choice for commercial and institutional applications due to low cost and superior durability.' },
      { environment: 'Retail & Education', description: 'Wide range of color and design combinations create unique, custom effects for retail and educational environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'solid-vinyl-tile': {
    title: 'Solid Vinyl Tile', subtitle: 'SVT · Flexible Tiles', slug: 'solid-vinyl-tile',
    accentColor: '#A5B4BC',
    description: 'Solid vinyl tile (SVT) is a type of flexible resilient flooring produced in tiles and is often used in healthcare, institutional, and educational settings. SVT is produced by cutting homogeneous sheet vinyl into tiles or using molds to make the tiles. It is versatile and easy to handle and can be used to create patterns and shapes within an overall creative floor design.',
    tags: [{ label: 'Through-Color', variant: 'green' }, { label: 'Healthcare', variant: 'amber' }, { label: 'Replaceable', variant: 'gray' }],
    features: [
      { title: 'Through-Color Construction', description: 'Through-color construction provides even wear and a consistent appearance over time.' },
      { title: 'Heat Weldable', description: 'The product can be heat welded and coved into an integral base for hygienic, seamless installations.' },
      { title: 'Heavy Rolling Load Performance', description: 'Performs under heavy rolling loads, ideal for healthcare settings requiring equipment to be rolled from space to space.' },
      { title: 'Design Flexibility', description: 'Shapes ranging from 12x12 to 36x36 provide design flexibility. Electrotile CVT and SDT variants meet electrical resistance requirements.' },
    ],
    composition: 'Solid vinyl tile is produced by cutting homogeneous sheet vinyl into tiles or using molds to make the tiles. SVT has similar product construction, properties, and performance as sheet products, but is easier to install because of the smaller sizes and less weight. Electrotile Conductive Tile (CVT) and Static Dissipative Tile (SDT) are solid vinyl tiles that include characteristics meeting performance requirements for spaces with sensitive electronic equipment.',
    advantages: [
      'Through-color construction provides even wear and a consistent appearance over time.',
      'Can be heat welded and coved into an integral base.',
      'Performs under heavy rolling loads — ideal for healthcare settings.',
      'Tile sizes from 12x12 to 36x36 provide design flexibility.',
      'Electrotile CVT and SDT variants meet electrical resistance requirements for sensitive environments.',
      'No-wax solution — flexible and can be coved up the wall.',
      'Individual tiles can be replaced with less disruption than sheet products.',
    ],
    installation: 'The installation considerations for solid vinyl tile are similar to vinyl sheet products, but there is less weight to manage because of the smaller tile sizes. SVT is a no-wax solution that is flexible, so it can be coved up the wall and heat welded to create an integral base. Because SVT is in tiles, repairs or replacement allows for flooring repairs to be made with less disruption to an overall area.',
    applications: [
      { environment: 'Healthcare', description: 'Heat-weldable seams, flash coving capability, and heavy rolling load performance make SVT ideal for healthcare environments.' },
      { environment: 'Institutional', description: 'Through-color durability and design flexibility for institutional and educational settings.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'linoleum': {
    title: 'Linoleum', subtitle: 'Bio-Based · Natural', slug: 'linoleum',
    accentColor: '#2E7D32',
    description: 'Invented in the 1860s, linoleum as a floor covering is experiencing a revival in popularity due to its natural ingredients and environmental properties. Made from all natural ingredients including linseed oil, wood flour, limestone, cork, tree resins, and jute backing. Available in various formats including tiles and wide sheets, linoleum is very durable and withstands heavy traffic for decades.',
    tags: [{ label: 'Bio-Based', variant: 'green' }, { label: 'Bacteriostatic', variant: 'amber' }, { label: 'Colorful', variant: 'gray' }],
    features: [
      { title: 'All-Natural & Renewable', description: 'Bio-based construction from renewable natural ingredients. Biodegradable without releasing harmful gasses. Natural antibacterial properties.' },
      { title: 'Vibrant Through-Pattern Colors', description: 'Wide variety of colors from quiet neutrals to vibrant hues. Colors and patterns run all the way through. Colorfast hue does not fade even as it naturally wears.' },
      { title: 'Design Versatility', description: 'Sheet linoleum lends itself to vibrant designs through borders and insets. Tiles can be arranged in virtually any pattern. Soft in feel and warm to the touch.' },
      { title: 'Durability & Resistance', description: 'Abrasion and gouge resistant with a through-pattern wear layer. Resistant to alcohol-based hand sanitizers. Naturally insulating and light-reflective.' },
    ],
    composition: 'Linoleum is made from all natural ingredients including linseed oil, wood flour, limestone, cork, and tree resins. Linseed oil is derived by pressing flaxseed that is dried and ground into a powdery binder. This is combined with limestone, pine resin, and cork and wood flours to form a doughy material to which color is added. Once pressed, it is rolled onto a jute backing and dried. Jute is spun from fibers of jute plants grown in India and Bangladesh. Available in formats including 12"x12", 12"x24", 24"x24" tiles and 6.5\' to 6.7\' wide sheets.',
    advantages: [
      'An all-natural alternative — very durable, withstands heavy traffic and scratches, and lasts for decades.',
      'Bio-based construction from renewable natural ingredients.',
      'Wide variety of colors, from quiet neutrals to vibrant hues, with colors and patterns running all the way through.',
      'Sheet linoleum lends itself to vibrant designs through borders and insets; tiles can be arranged in virtually any pattern.',
      'Soft in feel and warm to the touch.',
      'Through-pattern wear layer provides durability and a consistent long-lasting appearance.',
      'Colorfast — even as it naturally wears down, the hue does not fade.',
      'Abrasion and gouge resistant.',
      'Naturally insulating and light-reflective colors.',
      'Resistant to alcohol-based hand sanitizers.',
      'Biodegradable — will decompose without releasing harmful gasses or toxins.',
      'Natural antibacterial properties.',
    ],
    installation: 'Linoleum is manufactured in Europe and imported into the United States. It is available in both sheet and tile formats for professional installation across commercial and residential applications.',
    applications: [
      { environment: 'Education', description: 'Natural composition and vibrant colors make it popular in schools and universities. Durable enough to withstand heavy traffic for decades.' },
      { environment: 'Healthcare', description: 'Natural antibacterial properties and resistance to alcohol-based hand sanitizers support hygienic clinical environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'rubber': {
    title: 'Rubber Flooring', subtitle: 'Synthetic & Natural Rubber', slug: 'rubber',
    accentColor: '#37474F',
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors are contained throughout the thickness and won\'t fade or wear. Rubber has long been a solution for high-traffic settings that demand durability, water and burn resistance, and easy cleaning. Available in natural rubber, synthetic rubber, and recycled rubber variations.',
    tags: [{ label: 'Acoustic', variant: 'green' }, { label: 'Premium', variant: 'amber' }, { label: 'Slip Resistant', variant: 'gray' }],
    features: [
      { title: 'Exceptional Durability', description: 'Properly cared for, rubber flooring can last 20 years or more. Resistant to motor and cooking oils with superior wear characteristics.' },
      { title: 'Easy Maintenance', description: 'Cleaning requires no more than damp mopping. Water-resistant on both top and bottom surfaces.' },
      { title: 'Comfort & Acoustics', description: 'Soft underfoot, important for fitness centers and areas where people stand for long periods. Elasticity makes it very quiet to walk on.' },
      { title: 'Slip Resistance', description: 'Excellent slip resistance with waterproof and slip-resistant properties ideal for harsh environments requiring frequent cleaning.' },
    ],
    composition: 'There are several variations of rubber flooring including natural rubber, synthetic rubber, and recycled rubber. Different versions exist for a number of situations including fatigue resistance in areas where people stand or walk for long periods, and heavy traffic floor stress in industrial environments. Rubber products are available in sheet form and tiles, which are typically 20-inch and 40-inch squares.',
    advantages: [
      'Durability — properly cared for, rubber flooring can last for 20 years or more.',
      'Resistant to motor and cooking oils — excellent product in environments where oil and grease are factors such as auto shops and food preparation areas.',
      'Easy Maintenance — cleaning requires no more than a damp mopping.',
      'Softness — despite its durability, rubber is soft underfoot, an important feature for fitness centers.',
      'Water-resistant — highly resistant to damage from moisture on both top and bottom surfaces.',
      'Quiet — the elasticity of rubber flooring makes it very quiet to walk on. Heels don\'t click, and dropped objects land softly.',
      'Excellent slip resistance.',
    ],
    installation: 'Rubber flooring can be installed in sheet or tile format. With advancements in colors, designs, and textures, rubber flooring is increasingly popular in office and residential settings as well as traditional commercial and industrial applications.',
    applications: [
      { environment: 'Institutional & Commercial', description: 'Waterproof and slip-resistant properties ideal for institutional and commercial facilities demanding durability and easy cleaning.' },
      { environment: 'Fitness', description: 'Soft underfoot with impact absorption, making it ideal for fitness centers and athletic facilities.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'cork': {
    title: 'Cork Flooring', subtitle: 'Natural · Renewable', slug: 'cork',
    accentColor: '#8D6E63',
    description: 'Sleek and contemporary, this resilient flooring is enjoying renewed interest. Cork is made by removing the bark of the Cork Oak, predominantly found in Spain and Portugal, usually harvested every nine years without harming the tree. Cork is renewable, recyclable, and biodegradable. For flooring, cork is ground up, compressed, and formed into blocks or sheets bonded with polyurethane.',
    tags: [{ label: 'Renewable', variant: 'green' }, { label: 'Thermal Insulation', variant: 'amber' }, { label: 'Hypoallergenic', variant: 'gray' }],
    features: [
      { title: 'Completely Renewable', description: 'A completely natural and renewable resource harvested without harming the tree. Biodegradable, recyclable, and environmentally responsible.' },
      { title: 'Natural Insulation', description: 'Natural thermal and acoustic insulator that muffles sound and lowers energy bills. Soft underfoot with ergonomic relief.' },
      { title: 'Hypoallergenic', description: 'Hypoallergenic and resistant to mold and mildew. Can be refinished similar to hardwood flooring.' },
      { title: 'Versatile Installation', description: 'Can be installed as glue down or floating product. Available in natural color, stained, or painted in a variety of colors and sizes.' },
    ],
    composition: 'Cork flooring is made by removing the bark of the Cork Oak (Quercus Suber), predominantly found in Spain and Portugal. Cork bark is usually harvested every nine years, often from the same tree, which is a much faster rate of renewal than waiting for a seedling to grow large enough to harvest. Cork is a renewable, recyclable, and biodegradable raw material that minimally impacts the environment and produces very little waste. For flooring products, cork is ground up, compressed, and formed into blocks or sheets bonded with polyurethane. Cork is available in homogeneous direct gluedown, heterogeneous direct gluedown, and floating floor with click system constructions.',
    advantages: [
      'A completely natural and renewable resource — harvested without harming the tree.',
      'Biodegradable.',
      'Natural thermal and acoustic insulator — thicker cork offers better insulation.',
      'Soft underfoot and can provide ergonomic relief.',
      'Hypoallergenic and resistant to mold and mildew.',
      'Can be installed as a glue down or floating product.',
      'Can be refinished, similar to hardwood flooring.',
      'Note: Cork can fade in direct sunlight and can be dented, punctured, or scratched. Requires sealing with wax, polyurethane, or vinyl sealant. Not recommended for rooms that get wet.',
    ],
    installation: 'Cork can be installed as a homogeneous direct gluedown, heterogeneous direct gluedown, or as a floating floor with a click system. Cork flooring is available in natural color, stained, or painted in a variety of colors and sizes.',
    applications: [
      { environment: 'Residential', description: 'Warm and soft underfoot with natural insulation. Available in tiles or planks for bedrooms, living rooms, and home offices.' },
      { environment: 'Commercial', description: 'Ergonomic relief and acoustic insulation make cork suitable for offices and spaces where comfort and quiet are valued.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
}

function generateSlugFromTitle(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ft = FLOORING_TYPES.find(f => (f.slug || generateSlugFromTitle(f.title)) === slug)
  if (!ft) {
    const fallback = FLOORING_FALLBACK[slug]
    if (fallback) {
      return {
        title: `${fallback.title} | RFCI Resilient Flooring`,
        description: fallback.description,
      }
    }
    return { title: 'Flooring Type | RFCI' }
  }

  return {
    title: `${ft.title} | RFCI Resilient Flooring`,
    description: ft.description,
  }
}

export function generateStaticParams() {
  const fromTypes = FLOORING_TYPES.map(ft => ft.slug || generateSlugFromTitle(ft.title))
  const fromFallback = Object.keys(FLOORING_FALLBACK)
  const allSlugs = [...new Set([...fromTypes, ...fromFallback])]
  return allSlugs.map(slug => ({ slug }))
}

export default async function FlooringTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ft = FLOORING_TYPES.find(f => (f.slug || generateSlugFromTitle(f.title)) === slug)
  const fallback = FLOORING_FALLBACK[slug]

  if (!ft && !fallback) notFound()

  // Merge: FLOORING_TYPES card data + FLOORING_FALLBACK rich content
  const flooringType = { ...fallback, ...ft, ...(fallback && {
    features: ft?.features ?? fallback.features,
    applications: ft?.applications ?? fallback.applications,
    composition: fallback.composition,
    advantages: fallback.advantages,
    installation: fallback.installation,
    relatedCertifications: fallback.relatedCertifications,
  })}

  const allTypes = Object.values(FLOORING_FALLBACK).filter((t) => t.slug !== slug)
  return <FlooringDetail flooringType={flooringType} otherTypes={allTypes} />
}
