const ITEMS = ['PIZZAS', 'EMPANADAS', 'MILANESAS', 'HAMBURGUESAS', 'TARTAS', 'PAPAS'];

export default function Strip() {
  return (
    <div className="relative z-10 -mt-5 md:-mt-6 overflow-hidden">
      <div className="bg-naranja border-y-2 border-tinta py-3 -rotate-[1.4deg] scale-[1.03]">
        <p className="whitespace-nowrap text-center font-sans font-bold tracking-[0.25em] text-crema text-xs sm:text-sm overflow-x-auto no-scrollbar px-4">
          {ITEMS.join('   ·   ')}
        </p>
      </div>
    </div>
  );
}
