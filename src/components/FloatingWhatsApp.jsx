import { useEffect, useRef, useState } from 'react';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { WhatsAppIcon } from './icons.jsx';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
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

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('click_whatsapp', { origin: 'flotante' })}
      aria-label="Pedir por WhatsApp"
      className={`md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-naranja text-crema border-2 border-tinta shadow-hard transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
