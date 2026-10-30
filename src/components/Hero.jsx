import { site } from '../data/site.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ClockIcon, PinIcon } from './icons.jsx';

const CHIPS = [
  { icon: ClockIcon, text: site.schedule.days },
  { icon: ClockIcon, text: site.schedule.hours },
  { icon: PinIcon, text: 'Envío gratis en 3 barrios' },
];

export default function Hero() {
  return (
    <section id="main" className="relative bg-crema pt-28 pb-10 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border-2 border-tinta bg-miel px-4 py-1.5 text-xs md:text-sm font-bold tracking-wide text-tinta">
            {site.tagline}
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-[4.2rem] font-bold text-tinta leading-[0.98]">
            Hoy se come{' '}
            <span className="relative inline-block">
              <span className="relative z-10">rico</span>
              <span
                className="absolute left-0 right-0 bottom-1 h-4 md:h-5 bg-naranja/70 -rotate-1 z-0"
                aria-hidden="true"
              />
            </span>
            .
          </h1>

          <p className="text-suave text-base md:text-lg max-w-md">
            Pizzas, milanesas, empanadas, tartas y todo lo que sale de la cocina de Dani.
            Lo pedís por WhatsApp y llega calentito a tu casa.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <WhatsAppButton origin="hero" variant="naranja" label="Pedir por WhatsApp" />
            <a
              href="#carta"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-tinta px-6 py-3 min-h-11 font-sans font-semibold tracking-wide text-tinta hover:bg-tinta hover:text-crema transition-colors"
            >
              Ver la carta
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {CHIPS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-papel px-3.5 py-1.5 text-xs md:text-sm font-semibold text-tinta"
              >
                <Icon className="w-4 h-4 text-verde" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Collage de polaroids: en mobile se muestra solo la primera foto, sin rotación */}
        <div className="relative mx-auto w-48 sm:hidden">
          <div className="bg-papel border-2 border-tinta shadow-hard p-2 pb-6">
            <PlaceholderImage
              priority
              alt="Pizza napolitana de Lo de Dani con tomate y aceitunas"
              photo="napolitana"
              sizes="192px"
              width={300}
              height={300}
              className="w-full aspect-square"
            />
          </div>
        </div>

        <div className="relative h-105 md:h-120 hidden sm:block">
          <div className="absolute left-2 top-6 w-[58%] -rotate-6 bg-papel border-2 border-tinta shadow-hard p-2 pb-6">
            <PlaceholderImage
              priority
              alt="Pizza napolitana de Lo de Dani con tomate y aceitunas"
              photo="napolitana"
              sizes="320px"
              width={300}
              height={300}
              className="w-full aspect-square"
            />
            <p className="font-script text-center text-lg text-tinta mt-1">Con aceitunas</p>
          </div>
          <div className="absolute right-0 top-0 w-[54%] rotate-[5deg] bg-papel border-2 border-tinta shadow-hard p-2 pb-6">
            <PlaceholderImage
              alt="Milanesa napolitana de Lo de Dani"
              photo="milanesa-napolitana"
              sizes="300px"
              width={280}
              height={280}
              className="w-full aspect-square"
            />
          </div>
          <div className="absolute right-6 bottom-0 w-[50%] -rotate-3 bg-papel border-2 border-tinta shadow-hard p-2 pb-6">
            <PlaceholderImage
              alt="Empanadas caseras de Lo de Dani"
              photo="empanadas"
              sizes="280px"
              width={260}
              height={260}
              className="w-full aspect-square"
            />
          </div>
          <span className="absolute left-0 bottom-10 inline-flex items-center justify-center w-24 h-24 rounded-full bg-naranja border-2 border-tinta rotate-6 text-center font-script text-lg font-bold text-crema shadow-hard p-2">
            Hecha en casa
          </span>
        </div>
      </div>

      <div id="hero-end" aria-hidden="true" />
    </section>
  );
}
