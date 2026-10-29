import { useState } from 'react';
import { site } from '../data/site.js';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { listWithY } from '../lib/format.js';
import SectionHeading from './SectionHeading.jsx';
import { WhatsAppIcon, InstagramIcon, ClockIcon, PinIcon } from './icons.jsx';

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.brand} ${site.address.street}, ${site.address.locality}`
)}`;

const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.locality}, ${site.address.region}, ${site.address.country}`
)}&output=embed`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', neighborhood: '', order: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const detail = `Nombre: ${form.name} | Barrio y dirección: ${form.neighborhood} | Pedido: ${form.order}`;
    track('submit_pedido', { name: form.name, neighborhood: form.neighborhood });
    window.open(whatsappLink(detail), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="bg-crema px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Contacto" title="¿Qué se te" script="antoja hoy?" />

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto w-full rounded-3xl border-2 border-tinta bg-papel shadow-hard p-6 md:p-10 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-tinta">
              Nombre
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={update('name')}
                className="rounded-xl border-2 border-tinta bg-crema px-4 py-3 min-h-11 focus:outline-none"
                placeholder="Tu nombre"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-tinta">
              Barrio y dirección
              <input
                type="text"
                name="neighborhood"
                required
                value={form.neighborhood}
                onChange={update('neighborhood')}
                className="rounded-xl border-2 border-tinta bg-crema px-4 py-3 min-h-11 focus:outline-none"
                placeholder="Ej. El Carmen, calle y número"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-tinta">
            Tu pedido
            <textarea
              name="order"
              required
              rows={4}
              value={form.order}
              onChange={update('order')}
              className="rounded-xl border-2 border-tinta bg-crema px-4 py-3 focus:outline-none resize-y"
              placeholder="Ej. 1 pizza napolitana y 6 empanadas de carne"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-tinta bg-whatsapp text-whatsapp-ink px-6 py-3 min-h-11 font-sans font-semibold tracking-wide self-start"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enviar pedido por WhatsApp
          </button>
          <p className="text-xs text-suave">Llegamos a {listWithY(site.deliveryAreas)}.</p>
        </form>

        <div className="max-w-3xl mx-auto w-full grid sm:grid-cols-3 gap-5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_whatsapp', { origin: 'contact_card' })}
            className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-5 flex flex-col items-center text-center gap-2"
          >
            <WhatsAppIcon className="w-6 h-6 text-verde" />
            <p className="font-display font-bold text-tinta">WhatsApp</p>
            <p className="text-sm text-suave">{site.phoneDisplay}</p>
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_instagram')}
            className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-5 flex flex-col items-center text-center gap-2"
          >
            <InstagramIcon className="w-6 h-6 text-verde" />
            <p className="font-display font-bold text-tinta">Instagram</p>
            <p className="text-sm text-suave">{site.instagram}</p>
          </a>
          <div className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-5 flex flex-col items-center text-center gap-2">
            <ClockIcon className="w-6 h-6 text-verde" />
            <p className="font-display font-bold text-tinta">Horario</p>
            <p className="text-sm text-suave">{site.schedule.days}</p>
            <p className="text-sm text-suave">{site.schedule.hours}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full grid sm:grid-cols-[1fr_1.4fr] gap-5 items-stretch">
          <div className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-5 flex items-start gap-3">
            <PinIcon className="w-5 h-5 text-verde shrink-0 mt-0.5" />
            <div className="text-sm text-suave">
              <p>{site.address.street}</p>
              <p>{site.address.locality}</p>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-semibold text-verde hover:text-naranja"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          <iframe
            title="Ubicación de Lo de Dani en el mapa"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl border-2 border-tinta w-full min-h-40"
          />
        </div>
      </div>
    </section>
  );
}
