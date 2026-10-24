import WhatsAppButton from './WhatsAppButton.jsx';

export default function CtaBand() {
  return (
    <section className="px-5 md:px-12 py-14 md:py-16">
      <div className="max-w-[1280px] mx-auto rounded-3xl border-2 border-tinta bg-naranja shadow-hard px-6 py-14 md:py-16 flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-crema">
          Pedí hoy, comé calentito.
        </h2>
        <WhatsAppButton
          origin="cta_band"
          label="Escribinos por WhatsApp"
          variant="crema"
        />
      </div>
    </section>
  );
}
