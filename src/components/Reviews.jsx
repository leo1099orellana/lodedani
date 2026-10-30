import { reviews } from '../data/reviews.js';
import SectionHeading from './SectionHeading.jsx';

export default function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-crema-2 px-5 md:px-12 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Opiniones" title="Lo que dicen" script="los vecinos." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-6 flex flex-col gap-4"
            >
              <blockquote className="text-tinta text-sm sm:text-base leading-relaxed">
                “{review.quote}”
              </blockquote>
              <figcaption className="text-sm font-semibold text-suave">
                {review.name} · {review.neighborhood}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
