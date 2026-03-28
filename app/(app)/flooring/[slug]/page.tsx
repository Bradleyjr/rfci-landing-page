import { notFound } from 'next/navigation'
import { FlooringDetail } from './FlooringDetail'
import { FLOORING_TYPES } from '../../../_data/flooring-types'
import { CERTIFICATIONS } from '../../../_data/certifications'

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
const CERT_EPD = certificationSummary('epd', 'Standardized environmental impact reporting based on ISO 14025 and lifecycle assessment methodology.')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FLOORING_FALLBACK: Record<string, any> = {
  'flexible-lvt': {
    title: 'Flexible LVT', subtitle: 'Luxury Vinyl Tile · Planks', slug: 'flexible-lvt',
    accentColor: '#0164DB',
    diagrams: [
      { url: '/media/flooring/diagrams/flexible-lvt-gluedown-diagram.png', label: 'Glue-Down (Dry-Back)' },
      { url: '/media/flooring/diagrams/flexible-lvt-looselay-diagram.png', label: 'Floating / Loose-Lay' },
    ],
    description: 'Flexible luxury vinyl flooring comes in tiles (LVT) and planks (LVP). Continued improvements in film printing, in-register embossing, and finish technology give LVT authentic wood and stone visuals with strong water-resistant performance and easy maintenance.',
    tags: [{ label: 'Water Resistant', variant: 'green' }, { label: 'High Traffic', variant: 'tan' }, { label: 'Easy Install', variant: 'gray' }],
    features: [
      { title: 'Easy to Maintain', description: 'Flexible luxury vinyl flooring makes clean-up a breeze. No need for harsh chemicals. Just sweep and damp mop to keep it looking like new.' },
      { title: 'Design Realism', description: 'Longer and wider planks with larger-format tiles reduce pattern repeat, while in-register printing and texture embossing create authentic wood and stone visuals.' },
      { title: 'Versatile Installation', description: 'Three installation methods: dry-back/glue-down, floating click/lock system, and loose-lay with minimal or no adhesives for installing over existing floors.' },
      { title: 'Scratch & Scuff Resistant', description: 'Commercial grade wear layers provide high-performance attributes. Ideal for pet-loving owners and busy lifestyles with easy cleaning and durability.' },
      { title: 'Water Resistant', description: 'Designed to handle routine moisture exposure and cleaning. Product-specific seams, subfloor conditions, and installation details still matter when evaluating water performance.' },
    ],
    composition: 'Luxury Vinyl Tile is produced in either tiles or planks. LVT comes in a variety of shapes and sizes from squares that are 12 x 12" to 24 x 24" or rectangular shapes such as 12 x 24". LVP comes in planks that are 4.5 x 36", 7 x 48", as well as extra-long and wide such as 9 x 72".',
    advantages: [
      'Design realism combined with the ability to produce longer and wider planks and larger-format tiles significantly enhances product appearance.',
      'Low installation costs, water-resistant performance, and low maintenance requirements offer excellent performance for busy lifestyles.',
      'Highly durable — scratch and scuff resistant.',
      'Provides a wide range of exotic species visuals for design versatility.',
      'Ideal product for pet-loving owners — scratch resistance for energetic pets, easy to clean and durable.',
      'Water resistant and well suited to routine cleaning and everyday moisture exposure when installed per manufacturer instructions.',
      'Damaged individual tiles or planks are easy to replace.',
      'Commercial grade wear layers and associated finishes provide high-performance attributes.',
      'Grout can be added to some LVT products for a high-end design option at an affordable price.',
    ],
    installation: 'There are three basic ways to install flexible luxury vinyl flooring: dry-back or glue-down where planks or tiles are glued directly to the subfloor; floating, which uses a click or locking system to keep the floor in place; and loose-lay where the products are designed to stay flat on the subfloor using minimal or no adhesives — great for installing over existing floors that are difficult or costly to remove. An underlayment is often used to provide a moisture vapor barrier and for sound absorption. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Residential', description: 'Beauty and realism of natural wood and stone combined with low installation costs and low maintenance for busy lifestyles.' },
      { environment: 'Commercial', description: 'Versatile design aesthetics and incomparable performance attributes make LVT and LVP ideal for commercial spaces.' },
      { environment: 'Hospitality & Multifamily', description: 'Pet-friendly, water resistant, and scratch resistant for multifamily or hospitality environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_AFFIRM],
  },
  'rigid-core': {
    title: 'Rigid Core', subtitle: 'SPC · WPC · Multilayer', slug: 'rigid-core',
    accentColor: '#455A64',
    diagrams: [
      { url: '/media/flooring/diagrams/rigid-core-spc-diagram.png', label: 'SPC (Solid Polymer Core)' },
      { url: '/media/flooring/diagrams/rigid-core-wpc-diagram.png', label: 'WPC (Expanded Polymer Core)' },
    ],
    description: 'Rigid Core, sometimes called multilayer flooring, is a modular resilient flooring category with a rigid polymeric core, a decorative top surface, and often an attached underlayment. Available in WPC (Expanded Polymer Core) and SPC (Solid Polymer Core) constructions, it is widely specified for dimensional stability, floating installation, and strong moisture performance.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'Dimensionally Stable', variant: 'tan' }, { label: 'ASSURE Eligible', variant: 'gray' }],
    features: [
      { title: 'Floating Installation', description: 'Unique locking systems allow floating installation with no adhesives required. Can often be installed without acclimation and with minimal subfloor preparation.' },
      { title: 'Easy to Maintain', description: 'Rigid Core flooring makes clean-up a breeze. No need for harsh chemicals. Just sweep and damp mop to keep it looking like new.' },
      { title: 'Waterproof Construction', description: 'Many Rigid Core products offer waterproof performance when properly installed, per the manufacturer\'s instructions. This makes Rigid Core an ideal solution for moisture-prone areas such as kitchens and bathrooms.' },
      { title: 'Temperature & Humidity Stability', description: 'Greater resistance to humidity and temperature variations with no telegraphing of minor subfloor irregularities.' },
      { title: 'Cushioning & Acoustics', description: 'Pre-attached cork or foam underlayment provides added cushioning, sound absorption, and underfoot comfort.' },
    ],
    composition: 'There are two primary rigid core product constructions: Expanded Polymer Core (WPC) and Solid Polymer Core (SPC). WPC is lighter in weight and often emphasizes comfort and acoustical performance. SPC is denser, offering stronger indentation resistance and dimensional stability. Both constructions use rigid cores and are commonly paired with attached underlayments for sound absorption and underfoot comfort.',
    advantages: [
      'Unique locking systems enable installation as a floating installation — no adhesives required.',
      'Can often be installed without any need for acclimation.',
      'Require minimal, time-consuming subfloor preparation.',
      'No telegraphing of minor subfloor irregularities or imperfections.',
      'Commonly specified where waterproof finished-product performance is important, such as kitchens, baths, laundry rooms, and entryways.',
      'Greater resistance to humidity and temperature variations.',
      'Can install over most existing hard surfaces, including ceramic tile.',
      'Added cushioning and sound absorption with attached underlayment.',
    ],
    installation: 'Rigid Core products commonly install as floating floors using click-lock systems. Because of their rigidity, they can often tolerate minor substrate variation better than flexible products, but manufacturer requirements for flatness, expansion space, moisture, and underlayment should still govern the installation. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Residential', description: 'A strong option for kitchens, baths, laundry rooms, and entryways where waterproof product performance and simple floating installation are valued.' },
      { environment: 'Commercial', description: 'SPC construction offers greater indentation resistance and improved dimensional stability for demanding commercial environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
  },
  'sheet-vinyl': {
    title: 'Sheet Vinyl', subtitle: 'Heterogeneous \u00b7 Homogeneous', slug: 'sheet-vinyl',
    accentColor: '#00897B',
    diagrams: [
      { url: '/media/flooring/diagrams/heterogeneous-sheet-vinyl-diagram.jpg', label: 'Heterogeneous Construction' },
      { url: '/media/flooring/diagrams/homogeneous-sheet-vinyl-diagram.png', label: 'Homogeneous Construction' },
    ],
    description: 'Sheet vinyl is offered in two primary constructions \u2014 heterogeneous and homogeneous \u2014 each optimized for different performance priorities. Both deliver seamless, heat-weldable surfaces available in wide widths, making them a standard specification in healthcare, education, commercial, and residential environments.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'Hygienic', variant: 'tan' }, { label: 'Seamless', variant: 'gray' }],
    features: [
      { title: 'Heterogeneous Construction', description: 'Multi-layer construction with a rotogravure-printed design layer and optional foam comfort layer. In-register embossing delivers authentic wood and stone visuals. Available in 6\u2019 and 12\u2019 widths.' },
      { title: 'Homogeneous Construction', description: 'Single-layer, through-body construction where color and pattern run the full thickness. Scratches and wear do not reveal a different layer underneath \u2014 the standard for hospitals and cleanroom environments.' },
      { title: 'Heat-Welded Seams', description: 'Seams can be heat welded to create a strong, monolithic surface that aids infection prevention. Product can be flash coved for more efficient cleaning.' },
      { title: 'Seamless Wide Widths', description: 'Available in wide widths for seamless installations with excellent top-down moisture protection. Reduces grout joints and crevices that can harbor contaminants.' },
      { title: 'Design Versatility', description: 'Heterogeneous products offer authentic wood and stone visuals with in-register embossing. Homogeneous products offer solid and multi-color chip configurations.' },
      { title: 'Easy Maintenance', description: 'Superior stain resistance and easy cleaning. Homogeneous surfaces can be restored over decades of use. Highly advanced finishes on heterogeneous products reduce ongoing maintenance requirements.' },
      { title: 'Water-Jet Cutting Ability (Homogeneous)', description: 'For intricate designs, such as logos or directional graphics.' },
    ],
    composition: 'Sheet vinyl comes in two primary constructions. Heterogeneous sheet vinyl features a multi-layer build with a wear layer \u2014 either a printed image or vinyl chip design \u2014 over optional foam for underfoot comfort. Homogeneous sheet vinyl is a single-layer, through-color product where the pattern runs all the way through the floor, giving it rigidity, toughness, and vibrant depth of color. Both types are typically offered in 6\u2019 and 12\u2019 widths for residential and commercial use.',
    advantages: [
      'Seamless wide-width installation provides excellent top-down moisture protection and a monolithic surface.',
      'Heat-weldable seams support infection control and hygienic maintenance in clinical environments.',
      'Flash cove capability allows the floor to be turned up the wall for a continuous, easy-to-clean surface.',
      'Heterogeneous products offer authentic wood and stone visuals with in-register embossing.',
      'Homogeneous products provide through-color construction that resists wear and can be restored over decades.',
      'Homogeneous construction is a proven product for healthcare, education, and institutional applications.',
      'Both constructions can typically be installed over a wide variety of existing surfaces.',
      'Warm, quiet, and comfortable underfoot.',
    ],
    installation: 'Sheet vinyl is installed as a continuous surface in wide widths. Heterogeneous products come with fiberglass, felt, or foam backings \u2014 fiberglass-backed versions can be installed loose-lay or with minimal adhesive; felt and foam-backed products require adhesive. Homogeneous sheet vinyl is glued down to withstand heavy foot and rolling load traffic. Both require professional installation with precise cutting and seaming technique. Seams can be heat welded for hygienic, monolithic performance. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Healthcare', description: 'The standard specification for hospitals, clinics, and cleanrooms. Heat-welded seams, flash coving, and through-body color support infection prevention and long-term performance.' },
      { environment: 'Education', description: 'Through-color construction and superior durability make it a durable, cost-effective choice for high-traffic school corridors, classrooms, and cafeterias.' },
      { environment: 'Commercial & Institutional', description: 'Wide-width seamless installation and low maintenance requirements make both constructions popular in commercial and institutional environments.' },
      { environment: 'Residential', description: 'Heterogeneous sheet vinyl provides an attractive, budget-conscious option for kitchens, bathrooms, and living spaces with authentic visual options and comfort underfoot.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'vct': {
    title: 'Vinyl Composition Tile', subtitle: 'VCT · Commercial Standard', slug: 'vct',
    accentColor: '#0164DB',
    diagrams: [
      { url: '/media/flooring/diagrams/vct-diagram.png', label: 'VCT Construction' },
    ],
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. The tiles can be used in a wide range of color and design combinations to create unique, custom effects. Composed primarily of North American limestone with vinyl and color pigments, VCT is an economic, commercial grade product built to last.',
    tags: [{ label: 'Low Cost', variant: 'green' }, { label: 'Refinishable', variant: 'amber' }, { label: 'Commercial', variant: 'gray' }],
    features: [
      { title: 'Budget-Friendly Value', description: 'Lowest carbon footprint of all resilient products with great performance history. Many products include factory finish for quick initial maintenance.' },
      { title: 'Through-Pattern Durability', description: 'Long life value with true through-pattern VCT. Durable through-color construction provides years of lasting beauty.' },
      { title: 'Modular Flexibility', description: 'Modular flexibility including large format shapes and sizes. Most common size 12 x 12", 1/8" thick. Recyclable and contributes to LEED credits.' },
      { title: 'Heavy Traffic Performance', description: 'Withstands heavy foot and rolling load traffic. Made in USA with the lowest carbon footprint of all resilient products.' },
      { title: 'Water-Jet Cutting Ability', description: 'For intricate designs, such as logos or directional graphics.' },
    ],
    composition: 'The primary raw material in VCT is limestone, which is a natural, highly abundant ingredient. Vinyl and color pigments are added to provide product flexibility and design. These products, composed of polyvinyl chloride (PVC) chips, limestone, other fillers, a thermoplastic binder, and color pigments are formed into sheets of varying thicknesses (1/8" is most common) by heat and pressure. The sheets are cut into floor tiles with the most common size being 12 x 12". VCT is composed of 85% North American limestone, has a very low carbon footprint, and is recyclable — contributing to LEED credits and reducing environmental impacts through landfill diversion.',
    advantages: [
      'Modular flexibility including large format shapes and sizes.',
      'Long life value with true through-pattern VCT.',
      'Withstands heavy foot and rolling load traffic.',
      'Many products include a factory finish that makes initial maintenance quick and easy.',
      'Budget-friendly value with a history of great performance.',
      'Made in USA with lowest carbon footprint of all resilient products.',
    ],
    installation: 'VCT for commercial applications requires the use of an appropriate adhesive as specified by the manufacturer. It is also a very popular do-it-yourself product since it is easy to handle and install. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Commercial & Institutional', description: 'A popular choice for commercial and institutional applications due to low cost and superior durability.' },
      { environment: 'Retail & Education', description: 'Wide range of color and design combinations create unique, custom effects for retail and educational environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'solid-vinyl-tile': {
    title: 'Solid Vinyl Tile', subtitle: 'SVT · Flexible Tiles', slug: 'solid-vinyl-tile',
    accentColor: '#A5B4BC',
    diagrams: [
      { url: '/media/flooring/diagrams/solid-vinyl-tile-diagram.png', label: 'SVT Construction' },
    ],
    description: 'Solid vinyl tile (SVT) is a type of flexible resilient flooring produced in tiles and is often used in healthcare, institutional, and educational settings. SVT is produced by cutting homogeneous sheet vinyl into tiles or using molds to make the tiles. It is versatile and easy to handle and can be used to create patterns and shapes within an overall creative floor design.',
    tags: [{ label: 'Through-Color', variant: 'green' }, { label: 'Healthcare', variant: 'amber' }, { label: 'Replaceable', variant: 'gray' }],
    features: [
      { title: 'Through-Color Construction', description: 'Through-color construction provides even wear and a consistent appearance over time.' },
      { title: 'Heat Weldable', description: 'The product can be heat welded and coved into an integral base for hygienic, seamless installations.' },
      { title: 'Heavy Rolling Load Performance', description: 'Performs under heavy rolling loads, ideal for healthcare settings requiring equipment to be rolled from space to space.' },
      { title: 'Design Flexibility', description: 'Shapes ranging from 12 x 12" to 36 x 36" provide design flexibility. Electrotile CVT and SDT variants meet electrical resistance requirements.' },
      { title: 'Water-Jet Cutting Ability', description: 'For intricate designs, such as logos or directional graphics.' },
    ],
    composition: 'Solid vinyl tile is produced by cutting homogeneous sheet vinyl into tiles or using molds to make the tiles. SVT has similar product construction, properties, and performance as sheet products, but is easier to install because of the smaller sizes and less weight. Electrotile Conductive Tile (CVT) and Static Dissipative Tile (SDT) are solid vinyl tiles that include characteristics meeting performance requirements for spaces with sensitive electronic equipment.',
    advantages: [
      'Through-color construction provides even wear and a consistent appearance over time.',
      'Can be heat welded and coved into an integral base.',
      'Performs under heavy rolling loads — ideal for healthcare settings.',
      'Tiles from 12 x 12" to 36 x 36" provide design flexibility.',
      'Electrotile CVT and SDT variants meet electrical resistance requirements for sensitive environments.',
      'No-wax solution — flexible and can be coved up the wall.',
      'Individual tiles can be replaced with less disruption than sheet products.',
    ],
    installation: 'The installation considerations for solid vinyl tile are similar to vinyl sheet products, but there is less weight to manage because of the smaller tile sizes. SVT is a no-wax solution that is flexible, so it can be coved up the wall and heat welded to create an integral base. Because SVT is in tiles, repairs or replacement allows for flooring repairs to be made with less disruption to an overall area. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Healthcare', description: 'Heat-weldable seams, flash coving capability, and heavy rolling load performance make SVT ideal for healthcare environments.' },
      { environment: 'Institutional', description: 'Through-color durability and design flexibility for institutional and educational settings.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'linoleum': {
    title: 'Linoleum', subtitle: 'Bio-Based · Natural', slug: 'linoleum',
    accentColor: '#2E7D32',
    diagrams: [
      { url: '/media/flooring/diagrams/linoleum-diagram.png', label: 'Linoleum Construction' },
    ],
    description: 'Invented in the 1860s, linoleum as a floor covering is experiencing a revival in popularity due to its natural ingredients and environmental properties. Made from all natural ingredients including linseed oil, wood flour, limestone, cork, tree resins, and jute backing. Available in various formats including tiles and wide sheets, linoleum is very durable and withstands heavy traffic for decades.',
    tags: [{ label: 'Bio-Based', variant: 'green' }, { label: 'Antibacterial', variant: 'amber' }, { label: 'Colorful', variant: 'gray' }],
    features: [
      { title: 'All-Natural & Renewable', description: 'Bio-based construction from renewable natural ingredients. Biodegradable without releasing harmful gasses. Natural antibacterial properties.' },
      { title: 'Vibrant Through-Pattern Colors', description: 'Wide variety of colors from quiet neutrals to vibrant hues. Colors and patterns run all the way through. Colorfast hue does not fade even as it naturally wears.' },
      { title: 'Design Versatility', description: 'Sheet linoleum lends itself to vibrant designs through borders and insets. Tiles can be arranged in virtually any pattern. Soft in feel and warm to the touch.' },
      { title: 'Durability & Resistance', description: 'Abrasion and gouge resistant with a through-pattern wear layer. Resistant to alcohol-based hand sanitizers. Naturally insulating and light-reflective.' },
    ],
    composition: 'Linoleum is made from all natural ingredients including linseed oil, wood flour, limestone, cork, and tree resins. Linseed oil is derived by pressing flaxseed that is dried and ground into a powdery binder. This is combined with limestone, pine resin, and cork and wood flours to form a doughy material to which color is added. Once pressed, it is rolled onto a jute backing and dried. Jute is spun from fibers of jute plants grown in India and Bangladesh. Available in formats including 12 x 12", 12 x 24" and 24 x 24" tiles and sheets just over 6 ft. wide.',
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
    installation: 'Linoleum is manufactured in Europe and imported into the United States. It is available in both sheet and tile formats for professional installation across commercial and residential applications. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Education', description: 'Natural composition and vibrant colors make it popular in schools and universities. Durable enough to withstand heavy traffic for decades.' },
      { environment: 'Healthcare', description: 'Natural antibacterial properties and resistance to alcohol-based hand sanitizers support hygienic clinical environments.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'rubber': {
    title: 'Rubber Flooring', subtitle: 'Synthetic & Natural Rubber', slug: 'rubber',
    accentColor: '#37474F',
    diagrams: [
      { url: '/media/flooring/diagrams/rubber-sheet-diagram.png', label: 'Sheet Construction' },
      { url: '/media/flooring/diagrams/rubber-tile-diagram.png', label: 'Tile Construction' },
    ],
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors are contained throughout the thickness and won\'t fade or wear. Rubber has long been a solution for high-traffic settings that demand durability, water and burn resistance, and easy cleaning. Available in natural rubber, synthetic rubber, and recycled rubber variations.',
    tags: [{ label: 'Acoustic', variant: 'green' }, { label: 'Premium', variant: 'amber' }, { label: 'Slip Resistant', variant: 'gray' }],
    features: [
      { title: 'Exceptional Durability', description: 'Properly cared for, rubber flooring can last 20 years or more. Resistant to motor and cooking oils with superior wear characteristics.' },
      { title: 'Easy Maintenance', description: 'Cleaning requires no more than damp mopping. Water-resistant on both top and bottom surfaces.' },
      { title: 'Comfort & Acoustics', description: 'Soft underfoot, important for fitness centers and areas where people stand for long periods. Elasticity makes it very quiet to walk on.' },
      { title: 'Slip Resistance', description: 'Excellent slip resistance and moisture-resistant properties ideal for harsh environments requiring frequent cleaning.' },
      { title: 'Water-Jet Cutting Ability', description: 'For intricate designs, such as logos or directional graphics.' },
    ],
    composition: 'There are several variations of rubber flooring including natural rubber, synthetic rubber, and recycled rubber. Different versions exist for a number of situations including fatigue resistance in areas where people stand or walk for long periods, and heavy traffic floor stress in industrial environments. Rubber products are available in sheet form and tiles, which are typically 20 x 20" or 40 x 40".',
    advantages: [
      'Durability — properly cared for, rubber flooring can last for 20 years or more.',
      'Resistant to motor and cooking oils — excellent product in environments where oil and grease are factors such as auto shops and food preparation areas.',
      'Easy Maintenance — cleaning requires no more than a damp mopping.',
      'Softness — despite its durability, rubber is soft underfoot, an important feature for fitness centers.',
      'Water-resistant — highly resistant to damage from moisture on both top and bottom surfaces.',
      'Quiet — the elasticity of rubber flooring makes it very quiet to walk on. Heels don\'t click, and dropped objects land softly.',
      'Excellent slip resistance.',
    ],
    installation: 'Rubber flooring can be installed in sheet or tile format. With advancements in colors, designs, and textures, rubber flooring is increasingly popular in office and residential settings as well as traditional commercial and industrial applications. Always follow the manufacturer\'s installation instructions.',
    applications: [
      { environment: 'Institutional & Commercial', description: 'Waterproof and slip-resistant performance ideal for institutional and commercial facilities demanding durability and easy cleaning.' },
      { environment: 'Fitness', description: 'Soft underfoot with impact absorption, making it ideal for fitness centers and athletic facilities.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'cork': {
    title: 'Cork Flooring', subtitle: 'Natural · Renewable', slug: 'cork',
    accentColor: '#8D6E63',
    diagrams: [
      { url: '/media/flooring/diagrams/cork-gluedown-diagram.png', label: 'Direct Glue-Down' },
      { url: '/media/flooring/diagrams/cork-floating-diagram.jpg', label: 'Floating / Click System' },
    ],
    description: 'Sleek and contemporary, this resilient flooring is enjoying renewed interest. Cork is made by removing the bark of the Cork Oak, predominantly found in Spain and Portugal, usually harvested every nine years without harming the tree. Cork is renewable, recyclable, and biodegradable. For flooring, cork is ground up, compressed, and formed into blocks or sheets bonded with polyurethane.',
    tags: [{ label: 'Renewable', variant: 'green' }, { label: 'Hypoallergenic', variant: 'amber' }, { label: 'Acoustic', variant: 'gray' }],
    features: [
      { title: 'Completely Renewable', description: 'A completely natural and renewable resource harvested without harming the tree. Biodegradable, recyclable, and environmentally responsible.' },
      { title: 'Natural Insulation', description: 'Natural thermal and acoustic insulator that muffles sound and lowers energy bills. Soft underfoot with ergonomic relief.' },
      { title: 'Hypoallergenic & Mold Resistant', description: 'Hypoallergenic and naturally resistant to mold and mildew. Can be refinished similar to hardwood flooring.' },
      { title: 'Versatile Installation', description: 'Can be installed as glue down or floating product. Available in natural color, stained, or painted in a variety of colors and sizes.' },
    ],
    composition: 'Cork flooring is made by removing the bark of the Cork Oak (Quercus Suber), predominantly found in Spain and Portugal. Cork bark is usually harvested every nine years, often from the same tree, which is a much faster rate of renewal than waiting for a seedling to grow large enough to harvest. Cork is a renewable, recyclable, and biodegradable raw material that minimally impacts the environment and produces very little waste. For flooring products, cork is ground up, compressed, and formed into blocks or sheets bonded with polyurethane. Cork is available in homogeneous direct gluedown, heterogeneous direct gluedown, and floating floor with click system constructions.',
    advantages: [
      'A completely natural and renewable resource — harvested without harming the tree.',
      'Biodegradable.',
      'Natural thermal and acoustic insulator — thicker cork offers better insulation.',
      'Soft underfoot and can provide ergonomic relief.',
      'Naturally resistant to mold and mildew.',
      'Can be installed as a glue down or floating product.',
      'Can be refinished, similar to hardwood flooring.',
      'Note: Cork can fade in direct sunlight and can be dented, punctured, or scratched. Requires sealing with wax, polyurethane, or vinyl sealant. Not recommended for rooms that get wet.',
    ],
    installation: 'Cork can be installed as a homogeneous direct gluedown, heterogeneous direct gluedown, or as a floating floor with a click system. Cork flooring is available in natural color, stained, or painted in a variety of colors and sizes. Always follow the manufacturer\'s installation instructions.',
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
