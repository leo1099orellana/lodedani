// Genera favicons, apple-touch-icon e íconos del manifest a partir de public/favicon.svg,
// y un og-image.jpg placeholder (1200x630) hasta tener una foto real para reemplazarlo.
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
  <rect width="1200" height="630" fill="#1F4D34" />
  <rect x="40" y="40" width="1120" height="550" rx="28" fill="none" stroke="#F1C165" stroke-width="3" />
  <text x="600" y="330" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="120" fill="#F4EBD7">Lo de Dani</text>
  <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#F1C165" letter-spacing="2">CASA DE COMIDAS · DELIVERY</text>
  <text x="600" y="460" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#F4EBD7">Pizzas · Milanesas · Empanadas · Pollo al horno</text>
</svg>
`);

await sharp(ogSvg).jpeg({ quality: 82 }).toFile(path.join(publicDir, 'og-image.jpg'));
console.log('✓ og-image.jpg (placeholder — reemplazar por una foto real antes de publicar)');
