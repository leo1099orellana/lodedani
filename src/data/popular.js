// Slides del carrusel "Los más pedidos".
// image: null = usa el placeholder visual. Para poner la foto real, guardar el
// archivo en public/assets/img/ (ver scripts/optimize-images.mjs) y completar la ruta acá.

export const popular = [
  {
    id: 'napolitana',
    name: 'Napolitana',
    description: 'Muzzarella, tomate fresco, orégano y aceitunas.',
    price: '$16.000',
    image: null, // [Foto real de la napolitana] — reemplazar por ej. "/assets/img/napolitana-640.webp"
    alt: 'Pizza napolitana de Lo de Dani con tomate y aceitunas',
  },
  {
    id: 'milanesa-napolitana',
    name: 'Milanesa napolitana',
    description: 'Común o grande, con salsa, muzzarella y jamón.',
    price: 'Desde $20.000',
    image: null,
    alt: 'Milanesa napolitana de Lo de Dani con muzzarella y jamón',
  },
  {
    id: 'pollo-horno',
    name: 'Pollo al horno',
    description: 'Pata y muslo, con guarnición.',
    price: '$15.000',
    image: null,
    alt: 'Pollo al horno de Lo de Dani con guarnición',
  },
  {
    id: 'hamburguesa-especial',
    name: 'Hamburguesa especial',
    description: 'Cheddar y panceta.',
    price: '$9.000',
    image: null,
    alt: 'Hamburguesa especial de Lo de Dani con cheddar y panceta',
  },
];
