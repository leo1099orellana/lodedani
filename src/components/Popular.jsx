import { useRef, useState } from 'react';
import { popular } from '../data/popular.js';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ChevronLeftIcon, ChevronRightIcon } from './icons.jsx';

const total = popular.length;

export default function Popular() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const go = (i) => setIndex(((i % total) + total) % total);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) (delta > 0 ? prev() : next());
    touchStartX.current = null;
  };

  const slide = popular[index];

  return (
    <section id="populares" className="bg-crema-2 px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Los más pedidos" title="Lo que nunca falta" script="en la mesa" />

        <div className="relative max-w-3xl mx-auto w-full">
          <div className="relative">
            <div
              className="relative aspect-4/3 md:aspect-16/10 lg:aspect-16/8 rounded-3xl border-2 border-tinta bg-papel shadow-hard overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              role="group"
              aria-roledescription="carrusel"
              aria-label="Los más pedidos"
            >
              <PlaceholderImage
                fill
                priority={index === 0}
                alt={slide.alt}
                src={slide.image}
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col gap-2 text-crema">
                <p className="font-display text-2xl md:text-3xl font-bold">{slide.name}</p>
                <p className="text-crema/85 text-sm md:text-base max-w-md">{slide.description}</p>
                <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
                  <span className="rounded-full bg-miel border-2 border-tinta px-4 py-1.5 font-display font-bold text-tinta">
                    {slide.price}
                  </span>
                  <WhatsAppButton
                    origin="popular"
                    detail={`${slide.name} (${slide.price})`}
                    label="Pedir"
                    variant="whatsapp"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Plato anterior"
              className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-tinta bg-crema shadow-hard"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Plato siguiente"
              className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-tinta bg-crema shadow-hard"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <p className="sr-only" aria-live="polite">{`Plato ${index + 1} de ${total}: ${slide.name}`}</p>
          <p className="text-center mt-4 font-display font-bold text-tinta" aria-hidden="true">
            {index + 1} / {total}
          </p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          {popular.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ver ${item.name}`}
              aria-current={i === index}
              className={`w-16 h-16 shrink-0 rounded-xl border-2 overflow-hidden transition-colors ${
                i === index ? 'border-naranja' : 'border-tinta/30'
              }`}
            >
              <PlaceholderImage fill alt="" src={item.image} className="w-full h-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
