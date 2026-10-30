import { site } from './site.js';
import { listWithY } from '../lib/format.js';

export const faq = [
  {
    question: '¿A qué barrios hacen delivery?',
    answer:
      'Repartimos en Juan María Gutiérrez, El Carmen y El Mirador. Escribinos por WhatsApp con tu dirección para confirmar.',
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: `Atendemos de ${site.schedule.days.toLowerCase()}, de ${site.schedule.hours}.`,
  },
  {
    question: '¿Cómo hago mi pedido?',
    answer:
      'Elegís lo que querés comer en la carta y nos escribís por WhatsApp al 11 2317-3941 con tu pedido y dirección.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Aceptamos efectivo y transferencia.',
  },
  {
    question: '¿Cuánto cuesta el envío?',
    answer: `El envío es gratis en ${listWithY(site.deliveryAreas)}.`,
  },
  {
    question: '¿Puedo retirar mi pedido en el local?',
    answer: `Sí. Hacé tu pedido por WhatsApp y pasá a buscarlo por ${site.address.street}, ${site.address.locality}.`,
  },
];
