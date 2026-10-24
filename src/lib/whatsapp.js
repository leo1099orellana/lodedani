import { site } from '../data/site.js';

/**
 * Arma un link de WhatsApp con el mensaje base + el detalle opcional
 * (plato, combo o pedido del formulario de contacto).
 */
export function whatsappLink(detail) {
  const text = detail
    ? `${site.whatsappBaseMessage}: ${detail}`
    : site.whatsappBaseMessage;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
