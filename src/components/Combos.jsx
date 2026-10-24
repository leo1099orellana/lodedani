import { combos } from '../data/combos.js';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function Combos() {
  return (
    <section id="promos" className="bg-crema-2 px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Promos" title="Combos que" script="rinden." />

        <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {combos.map((combo) => (
            <article
              key={combo.id}
              className="snap-start shrink-0 w-[78%] sm:w-[60%] md:w-auto rounded-2xl border-2 border-tinta bg-papel shadow-hard p-6 flex flex-col gap-3"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-verde text-crema text-[11px] font-bold tracking-widest uppercase px-3 py-1">
                Combo
              </span>
              <h3 className="font-display text-xl font-bold text-tinta leading-snug">
                {combo.name}
              </h3>
              <p className="text-suave text-sm">{combo.detail}</p>
              <span className="inline-flex w-fit items-center rounded-full bg-miel border-2 border-tinta px-4 py-1.5 font-display font-bold text-tinta mt-1">
                {combo.price}
              </span>
              <WhatsAppButton
                origin="combo"
                detail={`Combo ${combo.name} (${combo.price})`}
                label="Pedir este combo"
                variant="naranja"
                className="mt-2 w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
