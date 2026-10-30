import { site } from '../data/site.js';

const STATS = [
  { value: site.yearsCooking, label: 'años de cocina' },
  { value: '3', label: 'barrios con delivery' },
  { value: '6', label: 'días a la semana' },
];

export default function Numbers() {
  return (
    <section className="bg-crema px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-6 md:gap-10 text-center border-y-2 border-tinta/15 py-10 md:py-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="font-display text-4xl md:text-6xl font-bold text-naranja">
              {stat.value}
            </span>
            <span className="text-suave text-xs md:text-base font-semibold tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
