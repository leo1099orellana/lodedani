import { useState } from 'react';
import { site } from '../data/site.js';
import { listWithY } from '../lib/format.js';
import { useKeepInView } from '../lib/useKeepInView.js';
import SectionHeading from './SectionHeading.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ChevronDownIcon } from './icons.jsx';

const STEPS = [
  {
    id: '01',
    title: 'Delivery a domicilio',
    text: `Repartimos en ${listWithY(site.deliveryAreas)}. El envío es gratis: escribinos por WhatsApp con tu pedido y tu dirección.`,
  },
  {
    id: '02',
    title: 'Retiro en el local',
    text: `Hacé tu pedido por WhatsApp y pasá a buscarlo por ${site.address.street}, ${site.address.locality}.`,
  },
  {
    id: '03',
    title: 'Combos y promos',
    text: 'Pedí alguno de nuestros combos armados y ahorrá en cada pedido.',
  },
];

export default function HowToOrder() {
  const [openId, setOpenId] = useState(STEPS[0].id);
  const keepInView = useKeepInView(openId);

  return (
    <section id="pedir" className="bg-crema px-5 md:px-12 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        <SectionHeading eyebrow="Cómo pedir" title="Pedí en" script="tres pasos." />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-3">
            {STEPS.map((step) => {
              const isOpen = openId === step.id;
              return (
                <div key={step.id} className="rounded-2xl border-2 border-tinta bg-papel overflow-hidden">
                  <button
                    type="button"
                    onClick={(e) => {
                      keepInView(e.currentTarget.parentElement);
                      setOpenId(isOpen ? null : step.id);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`step-${step.id}`}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-2xl font-bold text-naranja shrink-0">
                      {step.id}
                    </span>
                    <span className="font-display text-lg font-bold text-tinta flex-1">
                      {step.title}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-tinta shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    id={`step-${step.id}`}
                    className={`${isOpen ? 'block' : 'hidden'} px-5 pb-5 text-suave text-sm sm:text-base -mt-1`}
                  >
                    {step.text}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto w-full max-w-xs rotate-2 bg-papel border-2 border-tinta shadow-hard p-3 pb-6">
            <PlaceholderImage
              alt="Tres tartas individuales de Lo de Dani recién horneadas en sus moldes"
              photo="tartas-individuales"
              sizes="320px"
              width={400}
              height={400}
              className="w-full aspect-square"
            />
            <p className="font-script text-xl text-center text-tinta mt-3">
              Recién salido del horno
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
