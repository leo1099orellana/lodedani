// Datos centrales del sitio: marca, contacto, horarios, SEO y tracking.
// Editá este archivo para actualizar textos y datos sin tocar los componentes.

export const site = {
  brand: 'Lo de Dani',
  tagline: 'Casa de comidas · Delivery',
  domain: 'https://lodedani.vercel.app', // Cambiar por el dominio propio cuando se compre
  locality: 'Gutiérrez, Berazategui',
  address: {
    street: 'Camino Real Norte 1824',
    locality: 'Gutiérrez, Berazategui',
    region: 'Buenos Aires',
    country: 'AR',
  },
  phoneDisplay: '11 2317-3941',
  whatsappNumber: '5491123173941',
  whatsappBaseMessage: 'Hola! Quiero hacer un pedido',
  instagram: '@lodedani_casadecomidas',
  instagramUrl: 'https://www.instagram.com/lodedani_casadecomidas',
  facebookUrl: '', // pendiente — crear página de Facebook
  schedule: {
    days: 'Martes a domingo',
    hours: '11 a 15 h y 20 a 00 h',
  },
  deliveryAreas: ['Juan María Gutiérrez', 'El Carmen', 'El Mirador'],
  yearsCooking: '6',

  seo: {
    title: 'Lo de Dani | Casa de comidas y delivery en J. M. Gutiérrez',
    description:
      'Pizzas, milanesas, empanadas y tartas con delivery en J. M. Gutiérrez, El Carmen y El Mirador. Pedí por WhatsApp. Martes a domingo.',
    keywords: [
      'delivery de comida casera en Juan María Gutiérrez',
      'pizza napolitana a domicilio en El Carmen',
      'milanesas a domicilio en El Mirador',
      'empanadas caseras delivery en J. M. Gutiérrez',
      'tartas caseras con delivery en J. M. Gutiérrez',
    ],
    ogImage: '/og-image.jpg',
  },

  // IDs de tracking: dejar en null para no cargar ningún script de terceros.
  tracking: {
    ga4Id: null, // ej: 'G-XXXXXXXXXX'
    metaPixelId: null, // ej: '000000000000000'
  },
};
