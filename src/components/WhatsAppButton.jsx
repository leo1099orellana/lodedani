import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { WhatsAppIcon } from './icons.jsx';

const VARIANTS = {
  whatsapp: 'bg-whatsapp text-whatsapp-ink hover:brightness-95',
  naranja: 'bg-naranja text-crema hover:brightness-110',
  crema: 'bg-crema text-tinta hover:bg-papel',
  outline: 'bg-transparent text-tinta hover:bg-tinta/5',
};

/**
 * Botón de pedido por WhatsApp. `origin` identifica el punto de contacto
 * para el evento de tracking click_whatsapp (hero, combo, carta, flotante...).
 */
export default function WhatsAppButton({
  detail,
  origin,
  label = 'Pedir por WhatsApp',
  variant = 'whatsapp',
  className = '',
  icon = true,
}) {
  const href = whatsappLink(detail);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('click_whatsapp', { origin, detail })}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-tinta px-6 py-3 min-h-11 font-sans font-semibold tracking-wide transition-colors ${VARIANTS[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon className="w-5 h-5 shrink-0" />}
      <span>{label}</span>
    </a>
  );
}
