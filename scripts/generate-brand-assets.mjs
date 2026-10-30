// Genera favicons, apple-touch-icon e íconos del manifest a partir de public/favicon.svg,
// y el og-image.jpg (1200x630) a partir de la foto de la napolitana.
// Uso: node scripts/generate-brand-assets.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const svg = readFileSync(path.join(publicDir, 'favicon.svg'));

const icons = [
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
];

for (const { file, size } of icons) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(path.join(publicDir, file));
  console.log(`✓ ${file}`);
}

const ogSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.35" stop-color="#1F4D34" stop-opacity="0" />
      <stop offset="0.8" stop-color="#1F4D34" stop-opacity="0.95" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)" />
  <text x="600" y="490" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="96" fill="#F4EBD7">Lo de Dani</text>
  <text x="600" y="548" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="#F1C165" letter-spacing="2">CASA DE COMIDAS · DELIVERY</text>
</svg>
`);

await sharp(path.join(publicDir, 'assets', 'img', 'originals', 'napolitana.jpg'))
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: ogSvg }])
  .jpeg({ quality: 82 })
  .toFile(path.join(publicDir, 'og-image.jpg'));
console.log('✓ og-image.jpg');
