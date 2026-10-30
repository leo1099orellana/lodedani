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
    <section id="populares" className="bg-crema px-5 md:px-12 pt-20 md:pt-28 pb-6 md:pb-8">
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
                photo={slide.photo}
                sizes="(min-width: 768px) 768px, 100vw"
                className={`absolute inset-0 w-full h-full ${slide.imageClass ?? ''}`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-tinta/95 via-tinta/70 via-40% to-transparent to-75%"
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
                    variant="naranja"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Plato anterior"
              className="absolute left-2 md:-left-5 top-4 md:top-1/2 md:-translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-tinta bg-crema shadow-hard"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Plato siguiente"
              className="absolute right-2 md:-right-5 top-4 md:top-1/2 md:-translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-tinta bg-crema shadow-hard"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <p className="sr-only" aria-live="polite">{`Plato ${index + 1} de ${total}: ${slide.name}`}</p>
          <div className="flex justify-center flex-wrap mt-4">
            {popular.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ver ${item.name}`}
                aria-current={i === index}
                className="group inline-flex items-center justify-center w-5 h-7"
              >
                <span
                  className={`block rounded-full transition-all ${
                    i === index ? 'w-3 h-3 bg-naranja' : 'w-2 h-2 bg-tinta/30 group-hover:bg-tinta/60'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
