'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MapPin, Buildings, X, ArrowRight, Compass } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

export const PROJECTS_STATIC = [
  { title: 'AHF Fog Residential', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/1HG2M005_Fog-ROOM-1.jpg', memberName: 'AHF Products', flooringTypeName: 'Rubber', environmentName: 'Homes', description: 'A serene residential installation featuring AHF\'s Fog collection, demonstrating how rubber floor tiles create warm, quiet interiors.' },
  { title: 'American Biltrite ABPure Cafeteria', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/abpure_cafeteria_ABS-38-34.jpg', memberName: 'American Biltrite', flooringTypeName: 'Homogeneous Sheet Vinyl', environmentName: 'Education', description: 'ABPure resilient flooring in a high-traffic cafeteria, chosen for hygienic properties and ease of maintenance.' },
  { title: 'Beauflor Blacktex HD', imageUrl: 'https://rfci.com/wp-content/uploads/2019/06/Sheet-Vinyl-Blacktex-HD-Abstract_Mocha-Celina-Wood_607M.jpg', memberName: 'Beauflor', flooringTypeName: 'Heterogeneous Sheet Vinyl', environmentName: 'Homes', description: 'Premium wood-look sheet vinyl in Abstract Mocha and Celina Wood pattern for residential applications.' },
  { title: 'Bentley Memory Craftsman', imageUrl: 'https://rfci.com/wp-content/uploads/2023/07/memory-craftsman-random-ashlar-9x48-1.jpeg', memberName: 'Bentley', flooringTypeName: 'Rigid Core', environmentName: 'Corporate', description: 'Artisan wood aesthetics in a random ashlar 9x48 plank layout for commercial interiors.' },
  { title: 'CFL FirmFit Intown', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/FirmFit-Intown.png', memberName: 'CFL', flooringTypeName: 'Rigid Core', environmentName: 'Apartments', description: 'Rigid core flooring combining dimensional stability with contemporary wood visuals for modern apartments.' },
  { title: 'Congoleum Commercial', imageUrl: 'https://rfci.com/wp-content/uploads/2022/02/72005-RS.jpg', memberName: 'Congoleum', flooringTypeName: 'Flexible LVT', environmentName: 'Corporate', description: 'Resilient flooring showcasing Congoleum\'s legacy of durability and design in demanding commercial spaces.' },
  { title: 'Gerflor Mipolam Symbioz Healthcare', imageUrl: 'https://rfci.com/wp-content/uploads/2019/10/Healthcare_Mipolam-Symbioz_Homogeneous-Sheet.jpg', memberName: 'Gerflor', flooringTypeName: 'Homogeneous Sheet Vinyl', environmentName: 'Healthcare', description: 'Mipolam Symbioz homogeneous sheet vinyl designed for seamless, hygienic healthcare environments.' },
  { title: 'HMTX MetStone Graphite', imageUrl: 'https://rfci.com/wp-content/uploads/2022/02/MetStone_9620GE32_Graphite_RS.jpg', memberName: 'HMTX Industries', flooringTypeName: 'Rigid Core', environmentName: 'Hospitality', description: 'Sophisticated stone-look resilient floor for modern commercial and hospitality spaces.' },
  { title: 'Interface Daycare', imageUrl: 'https://rfci.com/wp-content/uploads/2020/09/IED-DAY-PI001-Daycare_0000_web.jpg', memberName: 'Interface', flooringTypeName: 'Flexible LVT', environmentName: 'Education', description: 'Resilient flooring selected for safety, comfort, and easy maintenance in early childhood spaces.' },
  { title: 'Karndean Ghost Elm Library', imageUrl: 'https://rfci.com/wp-content/uploads/2022/04/RCP6544-GhostElm-UniversityLibrary_CM.jpg', memberName: 'Karndean', flooringTypeName: 'Flexible LVT', environmentName: 'Education', description: 'Ghost Elm luxury vinyl plank in a university library, creating a refined wood-look surface.' },
  { title: 'Lonseal Lonbead Designer Office', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/Lonseal-Lonbead-Designer-Office.jpg', memberName: 'Lonseal', flooringTypeName: 'Heterogeneous Sheet Vinyl', environmentName: 'Corporate', description: 'Lonbead resilient flooring combining aesthetic versatility with commercial-grade performance.' },
  { title: 'Mannington Prop Hive Swarm', imageUrl: 'https://rfci.com/wp-content/uploads/2022/02/130382-Prop-Hive-Swarm.jpg', memberName: 'Mannington', flooringTypeName: 'Flexible LVT', environmentName: 'Corporate', description: 'A bold pattern demonstrating how resilient flooring can serve as a striking design element.' },
  { title: 'Mohawk Resilient Collection', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/RES06_48_00.jpg', memberName: 'Mohawk', flooringTypeName: 'Flexible LVT', environmentName: 'Homes', description: 'Plank-format design with authentic wood visuals for residential and commercial specification.' },
  { title: 'MSI Bedroom Installation', imageUrl: 'https://rfci.com/wp-content/uploads/2022/04/Bedroom-0016-HiResJPG-scaled.jpg', memberName: 'MSI', flooringTypeName: 'Rigid Core', environmentName: 'Homes', description: 'Realistic aesthetics with comfort and water resistance in a residential bedroom.' },
  { title: 'Novalis Alpine Oak Aurora', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/18NOV_002_Educational-Main_Alphine-Oak-Aurora_V02-01_Flat.jpg', memberName: 'Novalis', flooringTypeName: 'Flexible LVT', environmentName: 'Education', description: 'Warm wood aesthetics with durability for high-traffic school corridors.' },
  { title: 'NOX ECOLAY Terrazzo', imageUrl: 'https://rfci.com/wp-content/uploads/2022/02/ECOLAY-mixmatch-terrazzo-education-1.jpg', memberName: 'NOX Corp', flooringTypeName: 'Rigid Core', environmentName: 'Education', description: 'Mix-and-match terrazzo-look flooring combining creative patterns with rigid core performance.' },
  { title: 'Roppe Rubber Sports Flooring', imageUrl: 'https://rfci.com/wp-content/uploads/2019/06/YaleES-RichardsonTx-Roppe-Oct178403.jpg', memberName: 'Roppe', flooringTypeName: 'Rubber', environmentName: 'Education', location: 'Richardson, TX', description: 'Rubber flooring at Yale Elementary School — superior slip resistance and acoustic comfort.' },
  { title: 'Shaw UV810 Room Scene', imageUrl: 'https://rfci.com/wp-content/uploads/2022/04/UV810_05025_Room.jpg', memberName: 'Shaw', flooringTypeName: 'Flexible LVT', environmentName: 'Homes', description: 'Design-forward hard surface resilient flooring in a refined residential setting.' },
  { title: 'Tandus Centiva Crayola Experience', imageUrl: 'https://rfci.com/wp-content/uploads/2018/03/Crayola_Experience-0002-20.jpg', memberName: 'Shaw', flooringTypeName: 'Flexible LVT', environmentName: 'Retail', description: 'Vibrant commercial entertainment venue where creative design meets heavy foot traffic.' },
  { title: 'Tarkett Aria Melodia', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/large-Aria-Melodia-HO-Vinyl-066-658-773-.jpg', memberName: 'Tarkett', flooringTypeName: 'Heterogeneous Sheet Vinyl', environmentName: 'Healthcare', description: 'High-opacity vinyl flooring ideal for healthcare and medical clinic environments.' },
  { title: 'Torlys RigidTile Firm', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/RS_RT-FMD28781_RigidTile-Firm-Designer_Industrial_Com-scaled.jpg', memberName: 'Torlys', flooringTypeName: 'Rigid Core', environmentName: 'Corporate', description: 'Rigid core tile demonstrating performance under demanding industrial-commercial conditions.' },
  { title: 'Windm\u00F6ller Queens Oak Amber', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/Raumbild-Queens-Oak-Amber-PL096C-a4-4c-01.jpg', memberName: 'Windm\u00F6ller', flooringTypeName: 'Flexible LVT', environmentName: 'Homes', description: 'Premium European oak aesthetics brought to modern interiors.' },
  { title: 'Assisted Living Capri', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/RS_RT-FMP747_RigidTile_Capri_Residential-1-scaled.jpg', flooringTypeName: 'Rigid Core', environmentName: 'Senior Living', description: 'RigidTile Capri in a senior care facility — comfort, slip resistance, and calming aesthetic.' },
  { title: 'K-12 Classic Rock Ashlar', imageUrl: 'https://rfci.com/wp-content/uploads/2023/08/classic-rock-yacht-rock-18x36-ashlar.jpg', flooringTypeName: 'Flexible LVT', environmentName: 'Education', description: 'Visual interest with institutional durability in a K-12 educational environment.' },
  { title: 'Grocery Contour LVT', imageUrl: 'https://rfci.com/wp-content/uploads/2020/10/Contour_LVT_Abstract-Faux-Bois-Spread.jpg', flooringTypeName: 'Flexible LVT', environmentName: 'Retail', description: 'Abstract faux bois wood-look pattern — durable, easy to clean, and visually appealing.' },
  { title: 'Hospital Batiste Chambray', imageUrl: 'https://rfci.com/wp-content/uploads/2023/08/batiste-chambray-stair-step-18x36-1.jpg', flooringTypeName: 'Flexible LVT', environmentName: 'Healthcare', description: 'Textile-inspired pattern providing hygienic surfaces in a hospital setting.' },
  { title: 'Restaurant Contract Vinyl', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/uc_contract_restaurant_UNT-04.jpg', flooringTypeName: 'Heterogeneous Sheet Vinyl', environmentName: 'Hospitality', description: 'Commercial-grade resilient flooring for high-traffic food service environments.' },
  { title: 'Sonata Boutique Retail', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/sonata_boutique_CEO-01-03.jpg', flooringTypeName: 'Flexible LVT', environmentName: 'Retail', description: 'Design sophistication meets commercial wear resistance in a boutique retail setting.' },
  { title: 'Transportation Brunella Marble', imageUrl: 'https://rfci.com/wp-content/uploads/2020/10/RKT3013-G-BrunellaMarble-Bathroom-P1_CM.jpg', flooringTypeName: 'Rigid Core', environmentName: 'Transportation', description: 'Stone aesthetics with water resistance and easy maintenance in transportation facilities.' },
  { title: 'Sustainable Workplace Plank', imageUrl: 'https://rfci.com/wp-content/uploads/2023/08/mood-sustainable-random-ashlar-9x48-1.jpg', flooringTypeName: 'Flexible LVT', environmentName: 'Corporate', description: 'Sustainability meets design flexibility in a modern workplace installation.' },
  // Solid Vinyl Tile
  { title: 'SVT Commercial Installation', imageUrl: 'https://rfci.com/wp-content/uploads/2021/01/SVT_Final-Header-Photo_Landing-Page.jpg', flooringTypeName: 'Solid Vinyl Tile', environmentName: 'Corporate', description: 'Solid vinyl tile in a commercial setting — versatile, easy to handle, and ideal for creative floor designs.' },
  { title: 'SVT Institutional Flooring', imageUrl: 'https://rfci.com/wp-content/uploads/2021/10/solid-vinyl-tile-replacement.jpeg', flooringTypeName: 'Solid Vinyl Tile', environmentName: 'Education', description: 'Durable solid vinyl tile installation in an institutional environment with pattern flexibility.' },
  { title: 'SVT Healthcare Setting', imageUrl: 'https://rfci.com/wp-content/uploads/2021/10/Solid-Vinyl-Tile-1.jpg', flooringTypeName: 'Solid Vinyl Tile', environmentName: 'Healthcare', description: 'Solid vinyl tile providing hygienic, easily maintained surfaces in healthcare facilities.' },
  { title: 'SVT Pattern Design', imageUrl: 'https://rfci.com/wp-content/uploads/2021/10/Solid-Vinyl-Tile.jpg', flooringTypeName: 'Solid Vinyl Tile', environmentName: 'Corporate', description: 'Solid vinyl tiles arranged in a creative pattern design for commercial interiors.' },
  // Vinyl Composition Tile
  { title: 'Tarkett VCT Multi-Color', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/large-Tarkett-VCT-II_CompTile_480_500_526_569_572_RS_HiRes.jpg', memberName: 'Tarkett', flooringTypeName: 'Vinyl Composition Tile', environmentName: 'Corporate', description: 'Tarkett VCT II CompTile in a vibrant multi-color commercial installation.' },
  { title: 'Tarkett VCT Colorway', imageUrl: 'https://rfci.com/wp-content/uploads/2022/03/large-Tarkett-VCT-II_CompTile_328_575_588_594_RS_HiRes.jpg', memberName: 'Tarkett', flooringTypeName: 'Vinyl Composition Tile', environmentName: 'Education', description: 'Alternate colorway of Tarkett VCT providing bright, durable flooring for educational spaces.' },
  { title: 'Expressions VCT Hospitality', imageUrl: 'https://rfci.com/wp-content/uploads/2020/10/Expressions_VYL_VCT_Hospitality_1240_1347_1789_RS_HiRes.jpg', memberName: 'Tarkett', flooringTypeName: 'Vinyl Composition Tile', environmentName: 'Hospitality', description: 'Expressions VCT in a hospitality setting — cost-effective durability with through-color construction.' },
  { title: 'Expressions VCT Layout', imageUrl: 'https://rfci.com/wp-content/uploads/2020/10/Expressions_VYL_VCT_1824_1608_1364_1310_1336_RS.jpg', memberName: 'Tarkett', flooringTypeName: 'Vinyl Composition Tile', environmentName: 'Corporate', description: 'Multi-color VCT layout demonstrating the creative versatility of vinyl composition tile.' },
  { title: 'VCT Commercial Installation', imageUrl: 'https://rfci.com/wp-content/uploads/2021/01/VCT_Replacement-Photo-e1610645427934.jpg', flooringTypeName: 'Vinyl Composition Tile', environmentName: 'Retail', description: 'Vinyl composition tile in a high-traffic commercial environment — durable and low-cost.' },
  // Linoleum
  { title: 'Gerflor DLW Bio Supermarkt Berlin', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/gerflordlw_reference_biosupermarkt_berlin_2_de.jpg', memberName: 'Gerflor', flooringTypeName: 'Linoleum', environmentName: 'Retail', location: 'Berlin, Germany', description: 'Gerflor DLW linoleum in a Berlin organic supermarket — natural materials for a sustainability-focused retail environment.' },
  { title: 'Glasgow Royal Infirmary Linoleum', imageUrl: 'https://rfci.com/wp-content/uploads/2021/11/Linoleum_Glasgow-Royal-Infirmary-UK-055-lpr.jpg', memberName: 'Gerflor', flooringTypeName: 'Linoleum', environmentName: 'Healthcare', location: 'Glasgow, UK', description: 'Bio-based linoleum flooring in a major hospital — naturally antibacterial with low environmental impact.' },
  { title: 'DLW Linoleum Room Scene', imageUrl: 'https://rfci.com/wp-content/uploads/2019/10/Room-Set-UP_DLW-Linoleum.jpg', memberName: 'Gerflor', flooringTypeName: 'Linoleum', environmentName: 'Corporate', description: 'DLW Linoleum showcasing the material\'s warm tones and natural composition in a modern interior.' },
  { title: 'Park Mains High School Linoleum', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/Park-Mains-High-School-DLW-Linoleum.jpg', memberName: 'Gerflor', flooringTypeName: 'Linoleum', environmentName: 'Education', description: 'DLW Linoleum in a high school — durable, easy to maintain, and made from renewable ingredients.' },
  { title: 'Library Bookstore Linoleum', imageUrl: 'https://rfci.com/wp-content/uploads/2019/07/Library_Book-store_DLW-Linoleum.jpg', memberName: 'Gerflor', flooringTypeName: 'Linoleum', environmentName: 'Retail', description: 'Natural linoleum flooring creating a warm, inviting atmosphere in a library bookstore.' },
  // Cork
  { title: 'Torlys CorkWood Fairwinds Oak', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/CorkWood-Designer_Fairwinds-Oak_Residential_CW-DS702-FSC-MX_300dpi-RGB-1.jpg', memberName: 'Torlys', flooringTypeName: 'Cork', environmentName: 'Homes', description: 'CorkWood Designer Fairwinds Oak — warm wood aesthetics with cork\'s natural comfort underfoot.' },
  { title: 'Cork XP Elite Burl Oolong', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/RS_CCUXP-EL134-FSMX_Cork-XP-Elite_Burl-Oolong_res-1-scaled.jpg', memberName: 'Torlys', flooringTypeName: 'Cork', environmentName: 'Homes', description: 'Cork XP Elite in Burl Oolong — natural insulation that muffles sound and lowers energy bills.' },
  { title: 'Cork XP Designer Paseo Fulwell', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/RS_CCUXP-DS773-FSMX_Cork-XP-Designer_Paseo-Fulwell_res-1-scaled.jpg', memberName: 'Torlys', flooringTypeName: 'Cork', environmentName: 'Homes', description: 'Contemporary cork plank flooring with rich grain patterns for residential spaces.' },
  { title: 'Cork Vista Vintage Cinder', imageUrl: 'https://rfci.com/wp-content/uploads/2022/05/RS_CCU-V90014-FSMX_Cork-Vista_Vintage-Cinder_res-1-scaled.jpg', memberName: 'Torlys', flooringTypeName: 'Cork', environmentName: 'Homes', description: 'Cork Vista in Vintage Cinder — renewable material with a modern, sophisticated finish.' },
  { title: 'Napa DryCork Room Scene', imageUrl: 'https://rfci.com/wp-content/uploads/2019/06/Napa_DryCork_RoomScene.jpg', memberName: 'Torlys', flooringTypeName: 'Cork', environmentName: 'Homes', description: 'Napa DryCork flooring in a residential living space — soft, warm, and naturally acoustic.' },
]

// ---------------------------------------------------------------------------
// 2D Canvas layout engine
// ---------------------------------------------------------------------------

type SizeClass = 'large' | 'small' | 'tall' | 'medium' | 'wide'

const SIZE_CONFIG: Record<SizeClass, { w: number; h: number }> = {
  large: { w: 380, h: 300 },
  small: { w: 240, h: 220 },
  tall: { w: 270, h: 380 },
  medium: { w: 310, h: 270 },
  wide: { w: 420, h: 250 },
}

const SIZE_SEQUENCE: SizeClass[] = [
  'large', 'small', 'tall', 'medium', 'wide', 'small', 'medium', 'tall',
]

const GAP = 16

/**
 * Lay out items in a grid-like mosaic across a 2D canvas.
 * Items are placed left-to-right, top-to-bottom in columns,
 * with varying sizes creating the asymmetric gallery feel.
 * The canvas extends in both directions from center.
 */
function computeLayout(count: number): Array<{ x: number; y: number; w: number; h: number; sizeClass: SizeClass }> {
  if (count === 0) return []

  // Use a column-packing approach: track the bottom edge of each column
  const COLS = Math.max(3, Math.ceil(Math.sqrt(count * 1.4)))
  const COL_WIDTH = 440 // max item width + gap
  const colBottoms = new Array(COLS).fill(0)
  const positions: Array<{ x: number; y: number; w: number; h: number; sizeClass: SizeClass }> = []

  // Center the grid
  const totalWidth = COLS * COL_WIDTH
  const offsetX = -totalWidth / 2

  for (let i = 0; i < count; i++) {
    const sizeClass = SIZE_SEQUENCE[i % SIZE_SEQUENCE.length]
    const { w, h } = SIZE_CONFIG[sizeClass]

    // Find the column with the smallest bottom value (shortest column)
    let bestCol = 0
    for (let c = 1; c < COLS; c++) {
      if (colBottoms[c] < colBottoms[bestCol]) bestCol = c
    }

    // Add some horizontal jitter within the column for organic feel
    const jitterX = ((i * 37 + i * i * 13) % 60) - 30
    const x = offsetX + bestCol * COL_WIDTH + (COL_WIDTH - w) / 2 + jitterX
    const y = colBottoms[bestCol]

    positions.push({ x, y, w, h, sizeClass })
    colBottoms[bestCol] = y + h + GAP + ((i * 17) % 20) // variable gap for organic feel
  }

  // Center the layout vertically too
  const minY = Math.min(...positions.map(p => p.y))
  const maxY = Math.max(...positions.map(p => p.y + p.h))
  const centerOffsetY = -(minY + maxY) / 2

  return positions.map(p => ({ ...p, y: p.y + centerOffsetY }))
}

// ---------------------------------------------------------------------------
// 2D Canvas pan hook — uses refs + direct DOM transforms for 60fps panning
// ---------------------------------------------------------------------------

function useCanvasPan() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const dotGridRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 })
  const hasDragged = useRef(false)

  const applyTransform = useCallback(() => {
    const { x, y } = offsetRef.current
    if (canvasRef.current) {
      canvasRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    if (dotGridRef.current) {
      dotGridRef.current.style.backgroundPosition = `${x % 32}px ${y % 32}px`
    }
  }, [])

  const moveCursor = useCallback((clientX: number, clientY: number) => {
    const cur = cursorRef.current
    const el = containerRef.current
    if (!cur || !el) return
    const rect = el.getBoundingClientRect()
    cur.style.transform = `translate(${clientX - rect.left}px, ${clientY - rect.top}px)`
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
    }
    const onMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (isDragging.current) {
        isDragging.current = false
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      hasDragged.current = false
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        offsetX: offsetRef.current.x,
        offsetY: offsetRef.current.y,
      }
      if (cursorRef.current) cursorRef.current.dataset.dragging = 'true'
    }

    const onMouseMove = (e: MouseEvent) => {
      moveCursor(e.clientX, e.clientY)
      if (!isDragging.current) return
      const dx = e.clientX - dragStart.current.x
      const dy = e.clientY - dragStart.current.y
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true
      offsetRef.current = {
        x: dragStart.current.offsetX + dx,
        y: dragStart.current.offsetY + dy,
      }
      applyTransform()
    }

    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        if (cursorRef.current) cursorRef.current.dataset.dragging = 'false'
      }
    }

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      isDragging.current = true
      hasDragged.current = false
      dragStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        offsetX: offsetRef.current.x,
        offsetY: offsetRef.current.y,
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || e.touches.length !== 1) return
      const dx = e.touches[0].clientX - dragStart.current.x
      const dy = e.touches[0].clientY - dragStart.current.y
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasDragged.current = true
        e.preventDefault()
      }
      offsetRef.current = {
        x: dragStart.current.offsetX + dx,
        y: dragStart.current.offsetY + dy,
      }
      applyTransform()
    }

    const onTouchEnd = () => {
      isDragging.current = false
    }

    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [applyTransform, moveCursor])

  const resetPan = useCallback(() => {
    offsetRef.current = { x: 0, y: 0 }
    applyTransform()
  }, [applyTransform])

  return { containerRef, canvasRef, dotGridRef, cursorRef, hasDragged, resetPan }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getImageUrl(project: any): string {
  return mediaUrl(project.featuredImage, '') || project.imageUrl || project.featuredImage?.url || ''
}

function getProjectId(project: any): string {
  return project.id || project.title
}

function getEnvironmentName(project: any): string {
  return project.environment?.name || project.environmentName || ''
}

function getMemberName(project: any): string {
  return project.member?.name || project.memberName || ''
}

// ---------------------------------------------------------------------------
// Tile item — 3D flip entrance/exit animation
// ---------------------------------------------------------------------------

const tileVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotateX: -60,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0.5,
    rotateX: 45,
    y: -20,
    transition: {
      delay: i * 0.02,
      duration: 0.3,
      ease: [0.55, 0, 1, 0.45] as [number, number, number, number],
    },
  }),
}

const CanvasTile = memo(function CanvasTile({
  project,
  index,
  layout,
  onClick,
}: {
  project: any
  index: number
  layout: { x: number; y: number; w: number; h: number }
  onClick: () => void
}) {
  return (
    <motion.div
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute cursor-pointer group"
      style={{
        left: layout.x,
        top: layout.y,
        width: layout.w,
        height: layout.h,
      }}
      onClick={onClick}
    >
      <div className="w-full h-full relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src={getImageUrl(project)}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-display font-medium text-base leading-snug mb-1">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {getMemberName(project) && (
              <span className="text-[9px] font-bold tracking-widest uppercase text-white/90 bg-white/20 px-1.5 py-0.5">
                {getMemberName(project)}
              </span>
            )}
            {getEnvironmentName(project) && (
              <span className="text-[9px] font-bold tracking-widest uppercase text-white/80 bg-white/15 px-1.5 py-0.5">
                {getEnvironmentName(project)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
})

// ---------------------------------------------------------------------------
// Mobile masonry item
// ---------------------------------------------------------------------------

function MasonryItem({ project, index, onClick }: { project: any; index: number; onClick: () => void }) {
  const aspects = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[3/5]']
  const aspect = aspects[index % aspects.length]

  return (
    <motion.div
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${aspect} break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden`}
      style={{ perspective: 800 }}
      onClick={onClick}
    >
      <img src={getImageUrl(project)} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
        <h3 className="text-white font-display font-medium text-sm leading-snug">{project.title}</h3>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Filter bar (overlays the canvas)
// ---------------------------------------------------------------------------

function CanvasFilterBar({
  environmentOptions,
  manufacturerOptions,
  filterEnvironment,
  filterManufacturer,
  setFilterEnvironment,
  setFilterManufacturer,
  filteredCount,
  totalCount,
  resetFilters,
  resetPan,
}: {
  environmentOptions: string[]
  manufacturerOptions: string[]
  filterEnvironment: string
  filterManufacturer: string
  setFilterEnvironment: (v: string) => void
  setFilterManufacturer: (v: string) => void
  filteredCount: number
  totalCount: number
  resetFilters: () => void
  resetPan: () => void
}) {
  const hasFilters = filterEnvironment || filterManufacturer
  const pill = (active: boolean) =>
    `text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
      active
        ? 'bg-rfci-blue text-white'
        : 'bg-white/80 text-rfci-black/60 hover:text-rfci-black hover:bg-white'
    }`

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-white/85 backdrop-blur-lg border-b border-black/5">
      <div className="px-5 py-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        {/* Manufacturer */}
        <div className="flex items-center gap-1.5">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30 mr-0.5">Mfg</span>
          <select
            value={filterManufacturer}
            onChange={(e) => setFilterManufacturer(e.target.value)}
            className={`text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full border-0 cursor-pointer transition-all duration-200 pr-6 ${
              filterManufacturer
                ? 'bg-rfci-blue text-white'
                : 'bg-white/80 text-rfci-black/60'
            }`}
            style={{
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='${filterManufacturer ? '%23fff' : '%23999'}' d='M2.5 4l2.5 2.5 2.5-2.5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 4px center',
            }}
          >
            <option value="">All</option>
            {manufacturerOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className="w-px h-3.5 bg-rfci-black/10" />

        {/* Environment / Space */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30 mr-0.5">Space</span>
          <button onClick={() => setFilterEnvironment('')} className={pill(!filterEnvironment)}>All</button>
          {environmentOptions.map((o) => (
            <button key={o} onClick={() => setFilterEnvironment(filterEnvironment === o ? '' : o)} className={pill(filterEnvironment === o)}>{o}</button>
          ))}
        </div>

        {/* Status */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30">
            {filteredCount}/{totalCount}
          </span>
          {hasFilters && (
            <button onClick={resetFilters} className="text-label font-bold tracking-widest uppercase text-rfci-blue hover:text-rfci-blue/70 transition-colors">
              Clear
            </button>
          )}
          <button
            onClick={resetPan}
            className="text-label font-bold tracking-widest uppercase text-rfci-black/30 hover:text-rfci-black transition-colors flex items-center gap-1"
            title="Reset canvas position"
          >
            <Compass className="w-3.5 h-3.5" /> Center
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function InspirationGallery({
  projects,
  environments,
  pageSettings,
}: {
  projects: any[]
  flooringTypes?: any[]
  environments: any[]
  members?: any[]
  pageSettings?: any
}) {
  const allProjects = projects.length > 0 ? projects : PROJECTS_STATIC

  const [filterEnvironment, setFilterEnvironment] = useState('')
  const [filterManufacturer, setFilterManufacturer] = useState('')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const { containerRef, canvasRef, dotGridRef, cursorRef, hasDragged, resetPan } = useCanvasPan()

  const environmentOptions =
    environments.length > 0
      ? environments.map((e: any) => e.name)
      : [...new Set(PROJECTS_STATIC.map((p) => p.environmentName).filter(Boolean))]

  const manufacturerOptions = [...new Set(
    allProjects.map((p: any) => getMemberName(p)).filter(Boolean)
  )].sort()

  const filteredProjects = allProjects.filter((project: any) => {
    if (filterEnvironment && getEnvironmentName(project) !== filterEnvironment) return false
    if (filterManufacturer && getMemberName(project) !== filterManufacturer) return false
    return true
  })

  const resetFilters = () => {
    setFilterEnvironment('')
    setFilterManufacturer('')
  }

  const activeProject = selectedProjectId
    ? allProjects.find((p: any) => getProjectId(p) === selectedProjectId)
    : null

  const handleItemClick = useCallback((project: any) => {
    if (hasDragged.current) {
      hasDragged.current = false
      return
    }
    setSelectedProjectId(getProjectId(project))
  }, [hasDragged])

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProjectId(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Compute layout positions for filtered items
  const layout = useMemo(() => computeLayout(filteredProjects.length), [filteredProjects.length])

  return (
    <PageLayout>
      <PageHero
        label="Inspiration"
        heading={pageSettings?.heroHeading || <>Real-world <span className="font-semibold text-rfci-blue">installations.</span></>}
        subheading={pageSettings?.heroSubheading || 'Explore resilient flooring projects from RFCI member companies across healthcare, education, hospitality, corporate, and more.'}
        theme="dark"
      />

      {/* ============================================================ */}
      {/* Desktop: 2D free-roaming canvas                              */}
      {/* ============================================================ */}
      <section className="hidden md:block relative bg-rfci-cream" style={{ height: '100vh' }}>
        {/* Filter bar */}
        <CanvasFilterBar
          environmentOptions={environmentOptions}
          manufacturerOptions={manufacturerOptions}
          filterEnvironment={filterEnvironment}
          filterManufacturer={filterManufacturer}
          setFilterEnvironment={setFilterEnvironment}
          setFilterManufacturer={setFilterManufacturer}
          filteredCount={filteredProjects.length}
          totalCount={allProjects.length}
          resetFilters={resetFilters}
          resetPan={resetPan}
        />

        {/* Canvas viewport */}
        <div
          ref={containerRef}
          className="absolute inset-0 overflow-hidden select-none"
          style={{ top: 0, cursor: 'none' }}
        >
          {/* Custom cursor */}
          <div
            ref={cursorRef}
            data-dragging="false"
            className="pointer-events-none absolute top-0 left-0 z-30 opacity-0 transition-opacity duration-200 group/cursor"
            style={{ willChange: 'transform' }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 group-data-[dragging=true]/cursor:scale-75 transition-transform duration-150">
              <div className="bg-rfci-black text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-2 rounded-full whitespace-nowrap shadow-lg">
                Drag to explore
              </div>
            </div>
          </div>

          {/* Subtle dot grid background */}
          <div
            ref={dotGridRef}
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(circle, #94a3b8 0.8px, transparent 0.8px)',
              backgroundSize: '32px 32px',
              backgroundPosition: '0px 0px',
            }}
          />

          {/* Pannable canvas */}
          <div
            ref={canvasRef}
            className="absolute"
            style={{
              left: '50%',
              top: '55%',
              transform: 'translate(0px, 0px)',
              willChange: 'transform',
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project: any, i: number) => {
                const pos = layout[i]
                if (!pos) return null
                return (
                  <CanvasTile
                    key={getProjectId(project)}
                    project={project}
                    index={i}
                    layout={pos}
                    onClick={() => handleItemClick(project)}
                  />
                )
              })}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <div className="absolute -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-rfci-black/40 text-lg mb-4">No projects match your filters.</p>
                <button
                  onClick={resetFilters}
                  className="text-rfci-blue hover:text-rfci-blue/80 font-bold text-sm tracking-wider uppercase transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Mobile: Filter bar + Masonry                                 */}
      {/* ============================================================ */}
      <section className="md:hidden bg-rfci-cream">
        <div className="px-4 pt-8 pb-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-label font-bold tracking-widest uppercase text-rfci-black/35 w-full mb-1">Manufacturer</span>
              <select
                value={filterManufacturer}
                onChange={(e) => setFilterManufacturer(e.target.value)}
                className="text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-white text-rfci-black/60 border-0"
              >
                <option value="">All Manufacturers</option>
                {manufacturerOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-label font-bold tracking-widest uppercase text-rfci-black/35 w-full mb-1">Space</span>
              {[['', 'All'], ...environmentOptions.map((o: string) => [o, o])].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setFilterEnvironment(filterEnvironment === val ? '' : val)}
                  className={`text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-colors ${
                    filterEnvironment === val ? 'bg-rfci-blue text-white' : 'bg-white text-rfci-black/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-label font-bold tracking-widest uppercase text-rfci-black/35">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
            {(filterEnvironment || filterManufacturer) && (
              <button onClick={resetFilters} className="text-label font-bold tracking-widest uppercase text-rfci-blue">Clear</button>
            )}
          </div>
        </div>
        <div className="px-4 pb-8">
          {filteredProjects.length > 0 ? (
            <div className="columns-2 gap-3">
              <AnimatePresence>
                {filteredProjects.map((project: any, i: number) => (
                  <MasonryItem
                    key={getProjectId(project)}
                    project={project}
                    index={i}
                    onClick={() => setSelectedProjectId(getProjectId(project))}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-rfci-black/40 text-lg">No projects match your filters.</p>
              <button onClick={resetFilters} className="mt-4 text-rfci-blue font-bold text-sm tracking-wider uppercase">Clear Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Have a project to <span className="font-semibold text-rfci-blue">share?</span>
            </h2>
            <p className="text-rfci-black/60 max-w-xl mx-auto mb-8">
              RFCI members can submit their resilient flooring installations to be featured in our inspiration gallery.
            </p>
            <a
              href="mailto:info@rfci.com"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-6 py-3 rounded-full font-bold text-label tracking-widest uppercase hover:bg-rfci-blue/90 transition-colors"
            >
              Get in Touch
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto my-4 md:my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 hover:bg-white transition-colors shadow-md"
              >
                <X weight="bold" className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] overflow-hidden">
                <img src={getImageUrl(activeProject)} alt={activeProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {getMemberName(activeProject) && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-black/8 text-rfci-black/70 px-2.5 py-1">{getMemberName(activeProject)}</span>
                  )}
                  {getEnvironmentName(activeProject) && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-black/5 text-rfci-black/60 px-2.5 py-1">{getEnvironmentName(activeProject)}</span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-medium text-rfci-black mb-4">{activeProject.title}</h2>

                {activeProject.description && (
                  <p className="text-rfci-black/60 leading-relaxed mb-6">{activeProject.description}</p>
                )}

                <div className="border-t border-black/5 pt-6 grid sm:grid-cols-2 gap-4">
                  {getMemberName(activeProject) && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <Buildings weight="fill" className="w-4 h-4 text-rfci-blue" />
                      <span className="font-medium text-rfci-black/80">Manufacturer:</span>
                      {getMemberName(activeProject)}
                    </div>
                  )}
                  {activeProject.location && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <MapPin weight="fill" className="w-4 h-4 text-rfci-blue" />
                      <span className="font-medium text-rfci-black/80">Location:</span>
                      {activeProject.location}
                    </div>
                  )}
                  {getEnvironmentName(activeProject) && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <span className="font-medium text-rfci-black/80">Environment:</span>
                      {getEnvironmentName(activeProject)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
