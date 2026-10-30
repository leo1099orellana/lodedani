import { site } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ClockIcon, PinIcon } from './icons.jsx';

const CHIPS = [
  { icon: ClockIcon, text: site.schedule.days },
  { icon: ClockIcon, text: site.schedule.hours },
  { icon: PinIcon, text: 'Delivery en 3 barrios' },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-crema px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <SectionHeading
            eyebrow="Nuestra cocina"
            title="Cocina de barrio,"
            script="hecha todos los días."
            align="left"
          />
          <p className="text-suave text-base md:text-lg max-w-prose">
            Lo de Dani nació hace {site.yearsCooking} años, cuando nuestra familia decidió animarse
            a emprender con lo que más nos gusta: cocinar para otros. Empezamos con pocos platos y
            muchas ganas, y la carta fue creciendo pedido a pedido, de la mano de los vecinos de
            Gutiérrez. Hoy seguimos en familia y con la misma idea del primer día: que cada plato
            llegue a tu mesa como si saliera de casa.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {CHIPS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-papel px-4 py-2 text-sm font-semibold text-tinta"
              >
                <Icon className="w-4 h-4 text-verde" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="relative order-1 md:order-2 mx-auto w-full max-w-sm">
          <div className="rounded-t-full rounded-b-3xl border-[6px] border-verde p-2">
            <PlaceholderImage
              alt="Pizza de Lo de Dani con jamón, morrones y aceitunas"
              photo="pizza-jamon-morron"
              sizes="(min-width: 768px) 384px, 90vw"
              width={480}
              height={600}
              rounded="rounded-t-full rounded-b-2xl"
              className="w-full aspect-4/5"
            />
          </div>
          <span className="absolute -right-3 bottom-8 md:-right-5 md:bottom-12 inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-miel border-2 border-tinta rotate-12 text-center font-script text-xl md:text-2xl leading-[1.05] font-bold text-tinta shadow-hard p-3">
            Hecha en casa
          </span>
        </div>
      </div>
    </section>
  );
}
