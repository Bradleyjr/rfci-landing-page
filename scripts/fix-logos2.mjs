import https from 'https'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '..', 'public', 'media', 'member-logos')

const fixes = [
  { slug: 'windmoller', url: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg' },
  { slug: 'ahf-products', url: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg' },
]

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
    }).on('error', reject)
  })
}

async function processLogo(slug, url) {
  const buf = await fetchUrl(url)
  const processed = await sharp(buf).resize({ height: 200, withoutEnlargement: true }).png().toBuffer()
  const { data, info } = await sharp(processed).raw().ensureAlpha().toBuffer({ resolveWithObject: true })
  const pixels = new Uint8Array(data)
  const { width, height } = info

  const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1]]
  let rSum=0, gSum=0, bSum=0
  for (const [x,y] of corners) {
    const i = (y*width+x)*4
    rSum += pixels[i]; gSum += pixels[i+1]; bSum += pixels[i+2]
  }
  const avgR = rSum/4, avgG = gSum/4, avgB = bSum/4

  for (let i = 0; i < pixels.length; i += 4) {
    const dist = Math.sqrt((pixels[i]-avgR)**2 + (pixels[i+1]-avgG)**2 + (pixels[i+2]-avgB)**2)
    if (dist < 35) pixels[i+3] = 0
    else if (dist < 50) pixels[i+3] = Math.min(pixels[i+3], Math.round(((dist-35)/15)*255))
  }

  await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } }).png().toFile(path.join(OUT, slug + '.png'))
  console.log(`  ✓ ${slug}`)
}

for (const f of fixes) await processLogo(f.slug, f.url)
console.log('Done')
