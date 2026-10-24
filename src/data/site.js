// Datos centrales del sitio: marca, contacto, horarios, SEO y tracking.
// Editá este archivo para actualizar textos y datos sin tocar los componentes.

export const site = {
  brand: 'Lo de Dani',
  tagline: 'Casa de comidas · Delivery',
  domain: 'https://lodedani.com.ar', // [Dominio] placeholder — reemplazar por el dominio real
  locality: '[partido/ciudad]', // [Confirmar localidad y partido exacto]
  address: {
    street: '[Dirección del local]',
    locality: '[partido/ciudad]',
    region: 'Buenos Aires',
    country: 'AR',
  },
  phoneDisplay: '11 2317-3941',
  whatsappNumber: '5491123173941',
  whatsappBaseMessage: 'Hola! Quiero hacer un pedido',
  instagram: '[@usuario]',
  instagramUrl: 'https://www.instagram.com/[usuario]',
  facebookUrl: '',
  schedule: {
    days: 'Martes a domingo',
    hours: '11 a 15 h y 19 a 23 h',
  },
  deliveryAreas: ['Juan María Gutiérrez', 'El Carmen', 'El Mirador'],
  yearsCooking: '[X]',

  seo: {
    title: 'Lo de Dani | Casa de comidas y delivery en J. M. Gutiérrez',
    description:
      'Pizzas, milanesas, empanadas y pollo al horno con delivery en J. M. Gutiérrez, El Carmen y El Mirador. Pedí por WhatsApp. Martes a domingo.',
    keywords: [
      'delivery de comida casera en Juan María Gutiérrez',
      'pizza napolitana a domicilio en El Carmen',
      'milanesas a domicilio en El Mirador',
      'empanadas caseras delivery en J. M. Gutiérrez',
      'pollo al horno con guarnición delivery',
    ],
    ogImage: '/og-image.jpg',
  },

  // IDs de tracking: dejar en null para no cargar ningún script de terceros.
  tracking: {
    ga4Id: null, // ej: 'G-XXXXXXXXXX'
    metaPixelId: null, // ej: '000000000000000'
  },
};
