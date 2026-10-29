/**
 * Si `src` está definido, renderiza una <img> real optimizada (con width/height
 * para evitar saltos de layout). Si no, renderiza un bloque placeholder con la
 * etiqueta [Foto: ...] para que el cliente sepa qué foto falta reemplazar.
 */
export default function PlaceholderImage({
  src,
  srcSet,
  sizes,
  alt,
  label,
  width,
  height,
  className = '',
  priority = false,
  rounded = '',
  fill = false,
}) {
  if (src) {
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? undefined : 'lazy'}
        decoding={priority ? undefined : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        className={`object-cover ${rounded} ${className}`}
      />
    );
  }

  const decorative = !alt;

  return (
    <div
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : alt}
      aria-hidden={decorative ? 'true' : undefined}
      className={`flex items-center justify-center text-center bg-crema-2 border-2 border-dashed border-suave/50 text-suave text-sm font-sans px-4 ${rounded} ${className}`}
      style={!fill && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {label || (alt ? `[Foto: ${alt}]` : null)}
    </div>
  );
}
