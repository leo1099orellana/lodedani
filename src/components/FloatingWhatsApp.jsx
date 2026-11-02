import { useEffect, useRef, useState } from 'react';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { WhatsAppIcon } from './icons.jsx';

// Margen alrededor del botón (incluye su sombra) para considerar que toca a otro botón de pedido
const GAP = 8;

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [coversCta, setCoversCta] = useState(false);
  const buttonRef = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-end');
    if (!sentinel || observed.current) return;
    observed.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Se oculta mientras coincide con otro botón de pedido: ese botón hace lo mismo y así nunca queda tapado.
  // El observer mira solo el rectángulo del flotante, y lo rehace si cambia el tamaño de la pantalla.
  useEffect(() => {
    const button = buttonRef.current;
    const touching = new Set();
    let observer;

    const watch = () => {
      observer?.disconnect();
      touching.clear();
      setCoversCta(false);
      if (!button.offsetWidth) return; // En desktop el flotante no se muestra

      const top = button.offsetTop - GAP;
      const left = button.offsetLeft - GAP;
      const bottom = window.innerHeight - button.offsetTop - button.offsetHeight - GAP;
      const right = window.innerWidth - button.offsetLeft - button.offsetWidth - GAP;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) touching.add(target);
            else touching.delete(target);
          });
          setCoversCta(touching.size > 0);
        },
        { rootMargin: `${-top}px ${-right}px ${-bottom}px ${-left}px` }
      );
      document.querySelectorAll('a[href*="wa.me"], button[type="submit"]').forEach((cta) => {
        if (cta !== button) observer.observe(cta);
      });
    };

    watch();
    window.addEventListener('resize', watch);
    return () => {
      window.removeEventListener('resize', watch);
      observer?.disconnect();
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('click_whatsapp', { origin: 'flotante' })}
      aria-label="Pedir por WhatsApp"
      className={`md:hidden fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-13 h-13 rounded-full bg-naranja text-crema border-2 border-tinta shadow-hard transition-all duration-200 ${
        visible && !coversCta ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
