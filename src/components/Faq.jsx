import { useState } from 'react';
import { faq } from '../data/faq.js';
import SectionHeading from './SectionHeading.jsx';
import { ChevronDownIcon } from './icons.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="preguntas" className="bg-crema px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas" script="comunes." />

        <div className="max-w-2xl mx-auto w-full flex flex-col gap-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="rounded-2xl border-2 border-tinta bg-papel overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-display text-lg font-bold text-tinta">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-tinta shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-${i}`}
                  className={`${isOpen ? 'block' : 'hidden'} px-5 pb-5 text-suave text-sm sm:text-base -mt-1`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
