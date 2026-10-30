import { useEffect, useRef } from 'react';

/**
 * Para acordeones: al abrir un ítem se cierra otro y la página cambia de alto, lo que puede
 * esconder el ítem debajo del menú fijo o dejarlo fuera de pantalla. `openKey` es el ítem
 * abierto; llamar a la función devuelta con el elemento tocado antes de cambiarlo.
 */
export function useKeepInView(openKey) {
  const target = useRef(null);

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    target.current = null;

    const navBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
    const minTop = navBottom + 12;
    const { top, bottom } = el.getBoundingClientRect();

    let delta = 0;
    if (top < minTop) delta = top - minTop;
    else if (bottom > window.innerHeight) delta = Math.min(bottom - window.innerHeight + 16, top - minTop);

    if (delta) window.scrollBy({ top: delta, behavior: 'instant' });
  }, [openKey]);

  return (el) => {
    target.current = el;
  };
}
