/**
 * Une una lista en español con "y" antes del último elemento
 * (ej. ["A", "B", "C"] -> "A, B y C").
 */
export function listWithY(items) {
  if (items.length <= 1) return items[0] || '';
  return `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;
}
