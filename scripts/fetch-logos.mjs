import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'public', 'media', 'member-logos')

// Board members with known website domains
const MEMBERS = [
  { name: 'AHF Products', slug: 'ahf-products', domain: 'ahfproducts.com', website: 'https://ahfproducts.com' },
  { name: 'American Biltrite', slug: 'american-biltrite', domain: 'americanbiltrite.com', website: 'https://americanbiltrite.com' },
  { name: 'Beauflor', slug: 'beauflor', domain: 'beauflor.com', website: 'https://beauflor.com' },
  { name: 'Bentley', slug: 'bentley', domain: 'bentleymills.com', website: 'https://bentleymills.com' },
  { name: 'CFL', slug: 'cfl', domain: 'cfloors.com', website: 'https://cfloors.com' },
  { name: 'Classen', slug: 'classen', domain: 'classen.de', website: 'https://classen.de' },
  { name: 'Congoleum', slug: 'congoleum', domain: 'congoleum.com', website: 'https://congoleum.com' },
  { name: 'Engineered Floors', slug: 'engineered-floors', domain: 'engineeredfloors.com', website: 'https://engineeredfloors.com' },
  { name: 'Gerflor', slug: 'gerflor', domain: 'gerflor.com', website: 'https://gerflor.com' },
  { name: 'HMTX Industries', slug: 'hmtx', domain: 'hmtx.com', website: 'https://hmtx.com' },
  { name: 'Interface', slug: 'interface', domain: 'interface.com', website: 'https://interface.com' },
  { name: 'Karndean', slug: 'karndean', domain: 'karndean.com', website: 'https://karndean.com' },
  { name: 'Lonseal', slug: 'lonseal', domain: 'lfrubber.com', website: 'https://lfrubber.com' },
  { name: 'Mannington', slug: 'mannington', domain: 'mannington.com', website: 'https://mannington.com' },
  { name: 'Mohawk', slug: 'mohawk', domain: 'mohawkflooring.com', website: 'https://mohawkflooring.com' },
  { name: 'MSI', slug: 'msi', domain: 'msisurfaces.com', website: 'https://msisurfaces.com' },
  { name: 'Novalis', slug: 'novalis', domain: 'novalis.com', website: 'https://novalis.com' },
  { name: 'NOX Corp', slug: 'nox-corp', domain: 'nox-corp.com', website: 'https://nox-corp.com' },
  { name: 'Roppe', slug: 'roppe', domain: 'roppe.com', website: 'https://roppe.com' },
  { name: 'Shaw', slug: 'shaw', domain: 'shawfloors.com', website: 'https://shawfloors.com' },
  { name: 'Tarkett', slug: 'tarkett', domain: 'tarkett.com', website: 'https://tarkett.com' },
  { name: 'Torlys', slug: 'torlys', domain: 'torlys.com', website: 'https://torlys.com' },
  { name: 'Wellmade', slug: 'wellmade', domain: 'wellmadefloors.com', website: 'https://wellmadefloors.com' },
  { name: 'Windmöller', slug: 'windmoller', domain: 'windmoeller.de', website: 'https://windmoeller.de' },
]

fs.mkdirSync(OUT_DIR, { recursive: true })

function fetch(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && maxRedirects > 0) {
        const redirect = new URL(res.headers.location, url).href
        return resolve(fetch(redirect, maxRedirects - 1))
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }))
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function fetchLogo(member) {
  const slug = member.slug
  const outPath = path.join(OUT_DIR, `${slug}.png`)

  if (fs.existsSync(outPath)) {
    console.log(`  ✓ ${member.name} — already exists`)
    return outPath
  }

  // Strategy 1: Try apple-touch-icon (usually high-res color logo)
  const iconUrls = [
    `https://${member.domain}/apple-touch-icon.png`,
    `https://${member.domain}/apple-touch-icon-precomposed.png`,
    `https://www.${member.domain}/apple-touch-icon.png`,
    `https://www.${member.domain}/apple-touch-icon-precomposed.png`,
    `https://${member.domain}/favicon-192x192.png`,
    `https://www.${member.domain}/favicon-192x192.png`,
  ]

  for (const url of iconUrls) {
    try {
      const res = await fetch(url)
      if (res.status === 200 && res.body.length > 500) {
        const meta = await sharp(res.body).metadata()
        if (meta.width >= 100) {
          await processLogo(res.body, outPath)
          console.log(`  ✓ ${member.name} — from ${url} (${meta.width}x${meta.height})`)
          return outPath
        }
      }
    } catch {}
  }

  // Strategy 2: Fetch HTML and look for og:image or logo in meta
  try {
    const urls = [`https://www.${member.domain}`, `https://${member.domain}`]
    for (const pageUrl of urls) {
      try {
        const res = await fetch(pageUrl)
        if (res.status !== 200) continue
        const html = res.body.toString('utf-8')

        // Try og:image
        const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
          || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i)
        if (ogMatch) {
          const imgUrl = new URL(ogMatch[1], pageUrl).href
          try {
            const imgRes = await fetch(imgUrl)
            if (imgRes.status === 200 && imgRes.body.length > 1000) {
              const meta = await sharp(imgRes.body).metadata()
              if (meta.width >= 100) {
                await processLogo(imgRes.body, outPath)
                console.log(`  ✓ ${member.name} — from og:image (${meta.width}x${meta.height})`)
                return outPath
              }
            }
          } catch {}
        }

        // Try finding logo img in HTML
        const logoMatch = html.match(/<img[^>]*(?:class|id|alt)=["'][^"']*logo[^"']*["'][^>]*src=["']([^"']+)["']/i)
          || html.match(/<img[^>]*src=["']([^"']+)["'][^>]*(?:class|id|alt)=["'][^"']*logo[^"']*["']/i)
        if (logoMatch) {
          const imgUrl = new URL(logoMatch[1], pageUrl).href
          try {
            const imgRes = await fetch(imgUrl)
            if (imgRes.status === 200 && imgRes.body.length > 500) {
              const meta = await sharp(imgRes.body).metadata()
              if (meta.width >= 50) {
                await processLogo(imgRes.body, outPath)
                console.log(`  ✓ ${member.name} — from HTML logo tag (${meta.width}x${meta.height})`)
                return outPath
              }
            }
          } catch {}
        }
        break // got HTML, no need to try www variant
      } catch {}
    }
  } catch {}

  console.log(`  ✗ ${member.name} — FAILED, no logo found`)
  return null
}

async function processLogo(inputBuffer, outPath) {
  // Convert to PNG with transparent background
  const image = sharp(inputBuffer)
  const meta = await image.metadata()

  // Resize to consistent height, maintain aspect ratio
  const processed = await image
    .resize({ height: 200, withoutEnlargement: true })
    .png()
    .toBuffer()

  // Remove white/light backgrounds
  const { data, info } = await sharp(processed)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true })

  const pixels = new Uint8Array(data)
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
    // If pixel is very light (near white/light gray), make transparent
    if (r > 220 && g > 220 && b > 220) {
      pixels[i + 3] = 0 // set alpha to 0
    }
    // Also handle light gray backgrounds
    else if (r > 200 && g > 200 && b > 200 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15) {
      pixels[i + 3] = 0
    }
  }

  await sharp(Buffer.from(pixels), { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outPath)
}

async function main() {
  console.log(`Fetching logos for ${MEMBERS.length} members...\n`)

  const results = { success: [], failed: [] }

  // Process in batches of 4 to avoid overwhelming
  for (let i = 0; i < MEMBERS.length; i += 4) {
    const batch = MEMBERS.slice(i, i + 4)
    const promises = batch.map(m => fetchLogo(m).then(r => {
      if (r) results.success.push(m.name)
      else results.failed.push(m.name)
    }))
    await Promise.all(promises)
  }

  console.log(`\n=== Results ===`)
  console.log(`Success: ${results.success.length}/${MEMBERS.length}`)
  if (results.failed.length) {
    console.log(`Failed: ${results.failed.join(', ')}`)
  }
}

main().catch(console.error)
