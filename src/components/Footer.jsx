import { site } from '../data/site.js';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { listWithY } from '../lib/format.js';

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#populares', label: 'Populares' },
  { href: '#promos', label: 'Promos' },
  { href: '#carta', label: 'Carta' },
  { href: '#pedir', label: 'Cómo pedir' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-verde text-crema px-5 md:px-12 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display italic text-2xl font-bold mb-3">{site.brand}</p>
          <p className="text-crema/75 text-sm max-w-xs">
            Casa de comidas con delivery de pizzas, milanesas, empanadas y tartas en{' '}
            {listWithY(site.deliveryAreas)}.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-widest text-crema/60">
            Enlaces
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-crema/85 hover:text-miel transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-widest text-crema/60">
            Contacto y horario
          </p>
          <ul className="flex flex-col gap-2 text-sm text-crema/85">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_whatsapp', { origin: 'footer' })}
                className="hover:text-miel transition-colors"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_instagram')}
                className="hover:text-miel transition-colors"
              >
                Instagram {site.instagram}
              </a>
            </li>
            <li>{site.schedule.days}</li>
            <li>{site.schedule.hours}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto border-t border-crema/15 mt-12 pt-6 text-xs text-crema/60">
        © {new Date().getFullYear()} {site.brand}. Casa de comidas · Delivery.
      </div>
    </footer>
  );
}
