import { site } from '../data/site.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { CheckIcon } from './icons.jsx';

const REASONS = [
  'Cocina casera todos los días',
  'Delivery en 3 barrios',
  'Pedidos directos por WhatsApp',
  'Abierto de martes a domingo',
  'Combos y promos',
];

export default function Hero() {
  return (
    <section id="main" className="relative isolate overflow-hidden min-h-[100svh] flex items-end md:items-center">
      <PlaceholderImage
        fill
        priority
        alt="Mesa con pizza napolitana, milanesas y empanadas caseras de Lo de Dani"
        label="[Foto: mesa con pizza napolitana, milanesas y empanadas recién hechas]"
        className="absolute inset-0 -z-10"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-pizarra via-pizarra/80 to-pizarra/50 md:bg-gradient-to-r md:from-pizarra/95 md:via-pizarra/60 md:to-pizarra/20"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1280px] mx-auto px-5 md:px-12 pt-32 pb-10 md:py-28">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-8 items-end md:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border-2 border-crema/70 bg-crema/10 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-crema">
              {site.tagline}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-crema leading-[1.05]">
              Comida casera,{' '}
              <span className="font-script text-miel text-[1.15em] leading-none">calentita</span> y a
              tu puerta.
            </h1>

            <p className="text-crema/90 text-base md:text-lg font-medium">
              Casa de comidas con delivery en J. M. Gutiérrez, El Carmen y El Mirador.
            </p>

            <p className="text-crema/80 max-w-prose">
              Pizzas, milanesas, empanadas, pollo al horno y mucho más. Pedís por WhatsApp y te lo
              llevamos calentito a tu casa, de {site.schedule.days.toLowerCase()}.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <WhatsAppButton origin="hero" variant="whatsapp" label="Pedir por WhatsApp" />
              <a
                href="#carta"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-crema px-6 py-3 min-h-11 font-sans font-semibold tracking-wide text-crema hover:bg-crema hover:text-tinta transition-colors"
              >
                Ver la carta
              </a>
            </div>
          </div>

          <div className="rounded-arc border-2 border-tinta bg-papel/95 backdrop-blur shadow-hard px-6 md:px-7 pt-20 md:pt-24 pb-6 md:pb-7">
            <p className="font-display text-xl font-bold text-tinta mb-4 text-center">Por qué elegirnos</p>
            <ul className="flex flex-col gap-3">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm md:text-[15px] text-tinta">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-verde text-crema">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="hero-end" aria-hidden="true" />
    </section>
  );
}
