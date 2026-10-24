const TONES = {
  light: { line: 'bg-verde/50', eyebrow: 'text-verde', title: 'text-tinta' },
  dark: { line: 'bg-miel/50', eyebrow: 'text-miel', title: 'text-crema' },
};

export default function SectionHeading({
  eyebrow,
  title,
  script,
  tone = 'light',
  align = 'center',
  id,
}) {
  const t = TONES[tone];
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignCls} gap-3`}>
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${t.line}`} aria-hidden="true" />
        <span className={`uppercase text-xs tracking-[0.22em] font-semibold ${t.eyebrow}`}>
          {eyebrow}
        </span>
        <span className={`h-px w-8 ${t.line}`} aria-hidden="true" />
      </div>
      <h2 id={id} className={`font-display text-3xl md:text-4xl font-bold leading-tight ${t.title}`}>
        {title}
        {script ? (
          <>
            {' '}
            <span className="font-script text-naranja text-[1.15em] leading-none">{script}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}
