import { useState } from 'react';
import { menu } from '../data/menu.js';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { ChevronDownIcon } from './icons.jsx';

export default function Menu() {
  const [openId, setOpenId] = useState(menu[0].id);

  return (
    <section id="carta" className="bg-crema px-5 md:px-12 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading
          eyebrow="La carta"
          title="Pizzas, milanesas"
          script="y mucho más."
          tone="light"
        />
        <p className="text-suave text-center max-w-2xl mx-auto -mt-6">
          Pizza napolitana a domicilio, milanesas a domicilio y empanadas caseras delivery:
          todo lo que cocinamos, con sus precios.
        </p>

        <div className="rounded-3xl border-[10px] border-madera bg-pizarra shadow-hard p-5 sm:p-7 md:p-10">
          <div className="md:columns-2 md:gap-x-12">
            {menu.map((category) => {
              const isOpen = openId === category.id;
              return (
                <div key={category.id} className="border-b border-crema/10 md:border-none md:break-inside-avoid py-4 md:py-5">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : category.id)}
                    aria-expanded={isOpen}
                    aria-controls={`cat-${category.id}`}
                    className="w-full flex items-center justify-between gap-3 text-left md:pointer-events-none md:cursor-default"
                  >
                    <span>
                      <span className="font-script text-2xl sm:text-3xl text-miel font-bold">
                        {category.title}
                      </span>
                      {category.note && (
                        <span className="block text-[11px] uppercase tracking-widest text-crema/60 mt-0.5">
                          {category.note}
                        </span>
                      )}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-miel shrink-0 transition-transform md:hidden ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <ul
                    id={`cat-${category.id}`}
                    className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col gap-2.5 mt-4`}
                  >
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="chalk-rule flex items-baseline justify-between gap-3 pb-1.5 text-sm sm:text-[15px]"
                      >
                        <span className="text-crema/90">{item.name}</span>
                        <span className="font-display font-bold text-miel whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <WhatsAppButton
          origin="carta"
          label="Pedir por WhatsApp"
          variant="naranja"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
