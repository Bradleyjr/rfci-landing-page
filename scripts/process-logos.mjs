import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'public', 'media', 'member-logos')
fs.mkdirSync(OUT_DIR, { recursive: true })

// All board members with best-known logo sources
const MEMBERS = [
  { slug: 'ahf-products', name: 'AHF Products', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg' },
  { slug: 'american-biltrite', name: 'American Biltrite', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg' },
  { slug: 'beauflor', name: 'Beauflor', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg' },
  { slug: 'bentley', name: 'Bentley', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg' },
  { slug: 'cfl', name: 'CFL', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg' },
  { slug: 'classen', name: 'Classen', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg' },
  { slug: 'congoleum', name: 'Congoleum', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg' },
  { slug: 'engineered-floors', name: 'Engineered Floors', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg' },
  { slug: 'gerflor', name: 'Gerflor', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg' },
  { slug: 'hmtx', name: 'HMTX Industries', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg' },
  { slug: 'interface', name: 'Interface', colorUrl: 'https://shop.interface.com/on/demandware.static/Sites-int-us-Site/-/default/dwddad16b4/images/logo.png', grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg' },
  { slug: 'karndean', name: 'Karndean', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg' },
  { slug: 'lonseal', name: 'Lonseal', colorUrl: null, grayUrl: null },
  { slug: 'mannington', name: 'Mannington', colorUrl: 'https://mannington.com/static/img/logo-residential.png', grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg' },
  { slug: 'mohawk', name: 'Mohawk', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg' },
  { slug: 'msi', name: 'MSI', colorUrl: 'https://www.msisurfaces.com/new-branding/images/msi_logo_with_tagline.svg', grayUrl: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg' },
  { slug: 'novalis', name: 'Novalis', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg' },
  { slug: 'nox-corp', name: 'NOX Corp', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg' },
  { slug: 'roppe', name: 'Roppe', colorUrl: 'https://roppe.com/wp-content/uploads/2016/12/ROPP-Logo_800.png', grayUrl: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg' },
  { slug: 'shaw', name: 'Shaw', colorUrl: 'https://shawfloors.widen.net/content/3sepoqbula/webp/ShawFloors_Primary_RGB.webp?w=400&position=c&color=ffffff00&quality=80', grayUrl: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg' },
  { slug: 'tarkett', name: 'Tarkett', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg' },
  { slug: 'torlys', name: 'Torlys', colorUrl: 'https://torlys.com/wp-content/uploads/2025/05/torlys-logo-1.svg', grayUrl: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png' },
  { slug: 'wellmade', name: 'Wellmade', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg' },
  { slug: 'windmoller', name: 'Windmöller', colorUrl: null, grayUrl: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg' },
]

function fetchUrl(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' }, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && maxRedirects > 0) {
        const redirect = new URL(res.headers.location, url).href
        return resolve(fetchUrl(redirect, maxRedirects - 1))
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`))
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function removeBackground(inputBuffer, outPath, isGray = false) {
  // First convert to PNG and resize
  let processed = await sharp(inputBuffer)
    .resize({ height: 200, withoutEnlargement: true })
    .png()
    .toBuffer()

  // Get raw pixels
  const { data, info } = await sharp(processed)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true })

  const pixels = new Uint8Array(data)
  const { width, height } = info

  // Sample corners to detect background color
  const cornerPixels = []
  for (const [x, y] of [[0,0], [width-1,0], [0,height-1], [width-1,height-1]]) {
    const idx = (y * width + x) * 4
    cornerPixels.push([pixels[idx], pixels[idx+1], pixels[idx+2]])
  }

  // Average corner colors to determine background
  const avgR = Math.round(cornerPixels.reduce((s, p) => s + p[0], 0) / 4)
  const avgG = Math.round(cornerPixels.reduce((s, p) => s + p[1], 0) / 4)
  const avgB = Math.round(cornerPixels.reduce((s, p) => s + p[2], 0) / 4)

  const bgThreshold = 35 // color distance threshold

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
    const dist = Math.sqrt((r - avgR) ** 2 + (g - avgG) ** 2 + (b - avgB) ** 2)

    if (dist < bgThreshold) {
      pixels[i + 3] = 0 // fully transparent
    } else if (dist < bgThreshold + 15) {
      // Feather edges for smoother transition
      const alpha = Math.round(((dist - bgThreshold) / 15) * 255)
      pixels[i + 3] = Math.min(pixels[i + 3], alpha)
    }
  }

  await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outPath)
}

async function processMember(member) {
  const outPath = path.join(OUT_DIR, `${member.slug}.png`)

  // Try color logo first
  if (member.colorUrl) {
    try {
      const buf = await fetchUrl(member.colorUrl)
      // SVGs need special handling
      if (member.colorUrl.endsWith('.svg')) {
        // Convert SVG to PNG via sharp
        await sharp(buf)
          .resize({ height: 200, withoutEnlargement: true })
          .png()
          .toFile(outPath)
        console.log(`  ✓ ${member.name} — color logo (SVG→PNG)`)
        return true
      }
      await removeBackground(buf, outPath, false)
      console.log(`  ✓ ${member.name} — color logo`)
      return true
    } catch (e) {
      console.log(`  ⚠ ${member.name} — color failed (${e.message}), trying gray...`)
    }
  }

  // Check if we already have a good logo from the first script
  if (fs.existsSync(outPath)) {
    const stat = fs.statSync(outPath)
    if (stat.size > 1000) {
      console.log(`  ✓ ${member.name} — using existing (${(stat.size/1024).toFixed(1)}KB)`)
      return true
    }
  }

  // Fall back to gray logo from rfci.com
  if (member.grayUrl) {
    try {
      const buf = await fetchUrl(member.grayUrl)
      await removeBackground(buf, outPath, true)
      console.log(`  ✓ ${member.name} — gray logo (bg removed)`)
      return true
    } catch (e) {
      console.log(`  ✗ ${member.name} — FAILED: ${e.message}`)
      return false
    }
  }

  console.log(`  ✗ ${member.name} — no logo source available`)
  return false
}

async function main() {
  console.log(`Processing ${MEMBERS.length} member logos...\n`)

  let success = 0, failed = 0
  const failedNames = []

  for (let i = 0; i < MEMBERS.length; i += 3) {
    const batch = MEMBERS.slice(i, i + 3)
    const results = await Promise.all(batch.map(m => processMember(m)))
    results.forEach((ok, j) => {
      if (ok) success++
      else { failed++; failedNames.push(batch[j].name) }
    })
  }

  console.log(`\n=== Done ===`)
  console.log(`✓ ${success} logos processed`)
  if (failed) console.log(`✗ ${failed} failed: ${failedNames.join(', ')}`)

  // List all files
  const files = fs.readdirSync(OUT_DIR)
  console.log(`\nFiles in ${OUT_DIR}:`)
  files.forEach(f => {
    const stat = fs.statSync(path.join(OUT_DIR, f))
    console.log(`  ${f} (${(stat.size / 1024).toFixed(1)}KB)`)
  })
}

main().catch(console.error)
