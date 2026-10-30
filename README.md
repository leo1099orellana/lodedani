# Lo de Dani — landing

Landing de producción para "Lo de Dani", casa de comidas con delivery. Vite + React + Tailwind CSS v4, pre-renderizada de forma estática con `vite-react-ssg` (el HTML sale del build ya con el `h1`, los textos y el JSON-LD escritos, sin depender de que Google ejecute JavaScript).

## Correr el proyecto

```bash
npm install
npm run dev       # desarrollo, http://localhost:5173
npm run build     # build de producción pre-renderizado -> dist/
npm run preview   # sirve dist/ para probarlo localmente
npm run images    # genera AVIF/WebP a partir de public/assets/img/originals/
```

## Dónde editar contenido

Todo lo editable vive en `src/data/`, sin tocar JSX:

- `site.js` — marca, teléfono/WhatsApp, horarios, barrios de delivery, dirección, Instagram, SEO (title/description/keywords), IDs de tracking (GA4/Meta Pixel).
- `menu.js` — la carta completa, por categoría.
- `combos.js` — las promos.
- `popular.js` — los slides de "Los más pedidos".
- `reviews.js` — las reseñas de clientes.
- `faq.js` — las preguntas frecuentes.

## Cómo poner las fotos reales

1. Guardá las fotos originales (buena resolución) en `public/assets/img/originals/`.
2. Corré `npm run images`. Genera `.webp` y `.avif` en 160/480/800/1200px de ancho dentro de `public/assets/img/`.
3. En el archivo de datos correspondiente (`popular.js`) o directamente en el componente, poné el nombre de la foto sin extensión en `photo`, por ejemplo `photo="napolitana"`, y definí `sizes` según el ancho en pantalla.
4. Donde no haya `photo` ni `src`, el componente `PlaceholderImage` muestra un bloque con la etiqueta `[Foto: ...]` — así se ve claramente qué falta reemplazar y no hay pedidos de red a imágenes rotas.

Si cambian los colores de marca, `scripts/generate-brand-assets.mjs` regenera el favicon, el apple-touch-icon, los íconos del manifest y el `og-image.jpg` (`node scripts/generate-brand-assets.mjs`).

## Placeholders pendientes antes de publicar

Buscá `[corchetes]` en el código y reemplazá:

- **Dominio real**: hoy está puesto `https://lodedani.vercel.app` en `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt` y `public/sitemap.xml`, y `src/data/site.js`. Hay que reemplazarlo en los cuatro lugares por el dominio definitivo.
- **Localidad y partido** (`[partido/ciudad]`): en `src/data/site.js`, `index.html` (JSON-LD `address`) y el texto de About.
- **Dirección del local**: `src/data/site.js` (`address.street`) y la tarjeta de mapa en Contacto.
- **Mapa de Google**: en `src/components/Contact.jsx` hay un bloque placeholder `[Mapa de Google con la ubicación]`; reemplazarlo por un `<iframe loading="lazy">` con el embed real una vez haya dirección confirmada (Google Maps → Compartir → Insertar un mapa).
- **Instagram** (`[@usuario]`): `src/data/site.js` (`instagram`, `instagramUrl`) y el `sameAs` del JSON-LD en `index.html`.
- **Años de cocina** (`[X]`): `src/data/site.js` (`yearsCooking`).
- **Foto de Dani**: en `src/components/About.jsx` hoy hay una foto de tarta de calabaza; reemplazarla si aparece una de Dani.
- **Reseñas reales** (opcional): cargarlas en `src/data/reviews.js`; mientras esté vacío, la sección no se muestra.
- **IDs de GA4 / Meta Pixel**: `src/data/site.js` (`tracking.ga4Id`, `tracking.metaPixelId`). Mientras estén en `null` no se carga ningún script de terceros.

## SEO técnico ya resuelto

- Un solo `<h1>`, jerarquía `h1 > h2 > h3` sin saltos.
- `title`/`description` dentro de los límites de caracteres pedidos, Open Graph, Twitter Card, `lang="es-AR"`, `canonical`, `theme-color`.
- JSON-LD `Restaurant` con horarios, barrios de delivery, carta y redes.
- `noscript` con nombre, teléfono, horario y carta resumida para navegadores sin JS.
- `robots.txt`, `sitemap.xml`, `404.html`, favicon + manifest.
- Keywords de cola larga (delivery en J. M. Gutiérrez, pizza napolitana a domicilio en El Carmen, milanesas a domicilio en El Mirador, etc.) distribuidas en el `h1`, subtítulos, FAQ y footer — no repetidas de forma forzada.

## Performance

- Fuentes (Cormorant Garamond, Josefin Sans, Caveat) self-hosted en `public/assets/fonts/`, subset latin, `font-display: swap`; solo se precargan las 2 que se ven arriba del pliegue.
- Sin librerías de carrusel/íconos/animación: el carrusel de "Los más pedidos" es JS propio en `Popular.jsx`, los íconos son SVG inline (`src/components/icons.jsx`).
- `vercel.json` cachea `/assets/*` y las fuentes por 1 año (`immutable`) y no cachea el HTML.
- Mientras no haya fotos reales cargadas, el primer peso de carga es de ~90 KB gzip (JS + CSS), muy por debajo del tope de 500 KB — al sumar fotos reales, respetar los límites: hero ≤150 KB, el resto ≤80 KB (`npm run images` ya comprime a AVIF/WebP).

## Checklist off-page (no es código)

- [ ] Completar Google Business Profile con las mismas fotos, horario y datos que la web.
- [ ] Poner el link de la web en la bio de Instagram, Facebook y WhatsApp Business, con parámetros UTM (`utm_source`, `utm_medium`, `utm_campaign` — ya se leen y se mandan con cada evento de tracking).
- [ ] Pedir reseñas reales a clientes en Google y cargarlas en `src/data/reviews.js`.
- [ ] Conseguir 3 a 5 enlaces locales relevantes (grupos de barrio, medios locales, directorios). Calidad antes que cantidad, nunca comprar links.

## Deploy

Pensado para Vercel: conectar el repo, build command `npm run build`, output `dist`. `vercel.json` ya define los headers de caché.
