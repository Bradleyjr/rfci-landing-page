import https from 'https'
import http from 'http'
import path from 'path'
import sharp from 'sharp'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '..', 'public', 'media', 'member-logos')

// All logos from rfci.com/about-the-institute/ (color versions)
const logos = [
  // Board members
  { slug: 'ahf-products',      url: 'https://rfci.com/wp-content/uploads/2022/01/AHF-color-big.jpg' },
  { slug: 'american-biltrite', url: 'https://rfci.com/wp-content/uploads/2018/01/m1.png' },
  { slug: 'beauflor',          url: 'https://rfci.com/wp-content/uploads/2018/01/m4.png' },
  { slug: 'bentley',           url: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-big.png' },
  { slug: 'cfl',               url: 'https://rfci.com/wp-content/uploads/2021/01/cfl1.png' },
  { slug: 'classen',           url: 'https://rfci.com/wp-content/uploads/2025/02/classen-big.jpg' },
  { slug: 'congoleum',         url: 'https://rfci.com/wp-content/uploads/2021/12/Congoleum-1.png' },
  { slug: 'dongshin-polymer',  url: 'https://rfci.com/wp-content/uploads/2025/10/DongshinPolymer.jpg' },
  { slug: 'engineered-floors', url: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-color2.jpg' },
  { slug: 'gerflor',           url: 'https://rfci.com/wp-content/uploads/2018/01/m9.png' },
  { slug: 'hmtx',              url: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-color1.jpg' },
  { slug: 'interface',         url: 'https://rfci.com/wp-content/uploads/2018/01/m11.png' },
  { slug: 'karndean',          url: 'https://rfci.com/wp-content/uploads/2018/01/m14.png' },
  { slug: 'lonseal',           url: 'https://rfci.com/wp-content/uploads/2019/02/new-lonseal.jpg' },
  { slug: 'mannington',        url: 'https://rfci.com/wp-content/uploads/2018/01/m16.png' },
  { slug: 'mohawk',            url: 'https://rfci.com/wp-content/uploads/2018/01/m18.png' },
  { slug: 'msi',               url: 'https://rfci.com/wp-content/uploads/2022/04/MSI-color-big.jpg' },
  { slug: 'novalis',           url: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-color1.jpg' },
  { slug: 'nox-corp',          url: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-color1.jpg' },
  { slug: 'roppe',             url: 'https://rfci.com/wp-content/uploads/2018/01/m21.png' },
  { slug: 'shaw',              url: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-color-big.jpg' },
  { slug: 'tarkett',           url: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-color1.jpg' },
  { slug: 'torlys',            url: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo.png' },
  { slug: 'wellmade',          url: 'https://rfci.com/wp-content/uploads/2019/02/new-wellmade.jpg' },
  { slug: 'windmoller',        url: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-color-big.jpg' },
  // Associate members
  { slug: 'amorim',              url: 'https://rfci.com/wp-content/uploads/2023/02/Amorim-Logo.jpg' },
  { slug: 'am-stabilizers',      url: 'https://rfci.com/wp-content/uploads/2023/02/AM-Stabilizers-Logo.jpg' },
  { slug: 'baerlocher',          url: 'https://rfci.com/wp-content/uploads/2021/12/baerlocher-1.png' },
  { slug: 'basf',                url: 'https://rfci.com/wp-content/uploads/2021/03/BASF-logo-SCM.png' },
  { slug: 'bostik',              url: 'https://rfci.com/wp-content/uploads/2021/03/Bostik-logo-SCM.png' },
  { slug: 'dmx-membranes',       url: 'https://rfci.com/wp-content/uploads/2026/02/DMX-Membranes-Logo.jpg' },
  { slug: 'dow',                 url: 'https://rfci.com/wp-content/uploads/2021/03/DOW-logo-SCM.png' },
  { slug: 'eastman',             url: 'https://rfci.com/wp-content/uploads/2021/03/Eastman-logo-SCM.png' },
  { slug: 'formosa',             url: 'https://rfci.com/wp-content/uploads/2021/03/Formosa-logo-SCM.png' },
  { slug: 'interprint',          url: 'https://rfci.com/wp-content/uploads/2024/01/Interprint-logo.png' },
  { slug: 'i4f',                 url: 'https://rfci.com/wp-content/uploads/2021/10/I4F-Logo-RBG-big.jpg' },
  { slug: 'klockner-pentaplast', url: 'https://rfci.com/wp-content/uploads/2021/03/Klockner-Pentaplast-logo-SCM.png' },
  { slug: 'lighthouse-adhesive', url: 'https://rfci.com/wp-content/uploads/2025/09/adhesive-lighthouse-logo.jpg' },
  { slug: 'mapei',               url: 'https://rfci.com/wp-content/uploads/2021/03/Mapei-logo-SCM.png' },
  { slug: 'microban',            url: 'https://rfci.com/wp-content/uploads/2025/05/microban-logo.jpg' },
  { slug: 'mondorevive',         url: 'https://rfci.com/wp-content/uploads/2025/08/mondorevive.jpg' },
  { slug: 'owens-corning',       url: 'https://rfci.com/wp-content/uploads/2021/04/OwensCorning-logo-SCM.png' },
  { slug: 'oxychem',             url: 'https://rfci.com/wp-content/uploads/2025/10/OXYCHEM_LOGO_COLOR_CMYK-1.png' },
  { slug: 'patcham',             url: 'https://rfci.com/wp-content/uploads/2022/05/PATCHAM-LOGO.jpg' },
  { slug: 'penn-color',          url: 'https://rfci.com/wp-content/uploads/2021/03/Penn-Color-logo-SCM.png' },
  { slug: 'performance-additives', url: 'https://rfci.com/wp-content/uploads/2025/08/performance-additives-logo.jpg' },
  { slug: 'pli-pak-lite',        url: 'https://rfci.com/wp-content/uploads/2021/03/PLI-Pak-Lite-logo-SCM.png' },
  { slug: 'polytex',             url: 'https://rfci.com/wp-content/uploads/2025/08/polytex-logo.jpg' },
  { slug: 'schattdecor',         url: 'https://rfci.com/wp-content/uploads/2025/06/Schattdecor-1.svg' },
  { slug: 'selit',               url: 'https://rfci.com/wp-content/uploads/2021/04/SELIT-logo-SCM.png' },
  { slug: 'shintech',            url: 'https://rfci.com/wp-content/uploads/2023/10/Shintech-Logo.png' },
  { slug: 'taylor-adhesives',    url: 'https://rfci.com/wp-content/uploads/2026/02/taylor-adhesives-300x210-1-e1770374046400.png' },
  { slug: 'tec',                 url: 'https://rfci.com/wp-content/uploads/2021/03/Tec-logo-SCM.png' },
  { slug: 'tmt-america',         url: 'https://rfci.com/wp-content/uploads/2025/08/tmt-america-logo.jpg' },
  { slug: 'valinge',             url: 'https://rfci.com/wp-content/uploads/2024/10/valinge.jpg' },
  { slug: 'valtris',             url: 'https://rfci.com/wp-content/uploads/2022/04/Valtris-color-big.jpg' },
  { slug: 'versatrim',           url: 'https://rfci.com/wp-content/uploads/2025/01/Versatrim-Logo-box.jpg' },
  { slug: 'vestolit',            url: 'https://rfci.com/wp-content/uploads/2021/03/Vestolit-logo-SCM.png' },
  { slug: 'ww-henry',            url: 'https://rfci.com/wp-content/uploads/2021/03/WWHenry-logo-SCM.png' },
]

function fetchUrl(url) {
  const mod = url.startsWith('https') ? https : http
  return new Promise((resolve, reject) => {
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
    }).on('error', reject)
  })
}

async function processLogo(slug, url) {
  try {
    const buf = await fetchUrl(url)

    // SVG files: save as-is
    if (url.endsWith('.svg')) {
      fs.writeFileSync(path.join(OUT, slug + '.svg'), buf)
      console.log(`  \u2713 ${slug} (svg)`)
      return
    }

    // Raster images: resize and remove background
    const processed = await sharp(buf)
      .resize({ height: 200, withoutEnlargement: true })
      .png()
      .toBuffer()

    const { data, info } = await sharp(processed)
      .raw()
      .ensureAlpha()
      .toBuffer({ resolveWithObject: true })

    const pixels = new Uint8Array(data)
    const { width, height } = info

    // Sample corner pixels to detect background color
    const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1]]
    let rSum=0, gSum=0, bSum=0
    for (const [x,y] of corners) {
      const i = (y*width+x)*4
      rSum += pixels[i]; gSum += pixels[i+1]; bSum += pixels[i+2]
    }
    const avgR = rSum/4, avgG = gSum/4, avgB = bSum/4

    // Remove background pixels similar to corner color
    for (let i = 0; i < pixels.length; i += 4) {
      const dist = Math.sqrt((pixels[i]-avgR)**2 + (pixels[i+1]-avgG)**2 + (pixels[i+2]-avgB)**2)
      if (dist < 35) pixels[i+3] = 0
      else if (dist < 50) pixels[i+3] = Math.min(pixels[i+3], Math.round(((dist-35)/15)*255))
    }

    await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(OUT, slug + '.png'))

    console.log(`  \u2713 ${slug}`)
  } catch (err) {
    console.error(`  \u2717 ${slug}: ${err.message}`)
  }
}

// Process in batches of 5 to avoid overwhelming the server
async function run() {
  console.log(`Downloading ${logos.length} logos to ${OUT}...`)
  for (let i = 0; i < logos.length; i += 5) {
    const batch = logos.slice(i, i + 5)
    await Promise.all(batch.map(l => processLogo(l.slug, l.url)))
  }
  console.log('Done!')
}

run()
