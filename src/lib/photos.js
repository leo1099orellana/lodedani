// Rutas de las versiones .webp que genera `npm run images` para cada foto de originals/.
// Mantener WIDTHS igual que en scripts/optimize-images.mjs.
const WIDTHS = [160, 480, 800, 1200];

export const photoSrc = (name) => `/assets/img/${name}-800.webp`;

export const photoSrcSet = (name) =>
  WIDTHS.map((width) => `/assets/img/${name}-${width}.webp ${width}w`).join(', ');
