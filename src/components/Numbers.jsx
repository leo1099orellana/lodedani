import { site } from '../data/site.js';
import PlaceholderImage from './PlaceholderImage.jsx';

const STATS = [
  { value: site.yearsCooking, label: 'años de cocina' },
  { value: '3', label: 'barrios con delivery' },
  { value: '6', label: 'días a la semana' },
];

export default function Numbers() {
  return (
    <section className="relative isolate overflow-hidden bg-pizarra px-5 md:px-12 py-16 md:py-20">
      <PlaceholderImage
        fill
        alt=""
        label=""
        className="absolute inset-0 -z-10 opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-pizarra/80" aria-hidden="true" />

      <div className="relative max-w-[1280px] mx-auto grid grid-cols-3 gap-6 md:gap-10 text-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="font-display text-4xl md:text-6xl font-bold text-miel">
              {stat.value}
            </span>
            <span className="text-crema/85 text-xs md:text-base font-semibold tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
