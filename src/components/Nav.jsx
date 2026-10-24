import { useState } from 'react';
import { site } from '../data/site.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import { MenuIcon, CloseIcon } from './icons.jsx';

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#populares', label: 'Populares' },
  { href: '#promos', label: 'Promos' },
  { href: '#carta', label: 'Carta' },
  { href: '#pedir', label: 'Cómo pedir' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido principal
      </a>

      <header className="fixed top-3 md:top-5 inset-x-0 z-50 px-4 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <nav
            aria-label="Principal"
            className="flex items-center justify-between gap-4 rounded-full border-2 border-tinta bg-crema/95 backdrop-blur px-4 md:px-6 py-2.5 shadow-hard"
          >
            <a href="#main" className="font-display italic text-xl md:text-2xl font-bold text-verde shrink-0">
              {site.brand}
            </a>

            <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-[13px] lg:text-sm font-semibold tracking-wide text-tinta whitespace-nowrap">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-naranja transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <WhatsAppButton
                origin="nav"
                label="Pedir"
                variant="naranja"
                icon={false}
                className="px-5 py-2 text-sm hidden sm:inline-flex"
              />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-tinta text-tinta"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </nav>

          {open && (
            <div
              id="mobile-menu"
              className="md:hidden mt-3 rounded-3xl border-2 border-tinta bg-crema shadow-hard p-6"
            >
              <ul className="flex flex-col gap-4 text-lg font-display font-semibold text-tinta">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setOpen(false)} className="block py-1">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <WhatsAppButton origin="nav_mobile" className="w-full mt-5" />
            </div>
          )}
        </div>
      </header>
    </>
  );
}
