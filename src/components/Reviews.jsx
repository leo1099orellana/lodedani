import { reviews } from '../data/reviews.js';
import SectionHeading from './SectionHeading.jsx';
import { GoogleIcon, StarIcon } from './icons.jsx';

const MAX_STARS = 5;

export default function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-crema px-5 md:px-12 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <SectionHeading eyebrow="Opiniones" title="Lo que dicen" script="los vecinos." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="rounded-2xl border-2 border-tinta bg-papel shadow-hard p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-0.5 text-miel" role="img" aria-label={`${review.rating} de ${MAX_STARS} estrellas`}>
                  {Array.from({ length: MAX_STARS }, (_, i) => (
                    <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? '' : 'opacity-25'}`} />
                  ))}
                </div>
                {review.source === 'google' && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-suave">
                    <GoogleIcon className="w-4 h-4" />
                    Google
                  </span>
                )}
              </div>
              <blockquote className="text-tinta text-sm sm:text-base leading-relaxed">
                “{review.quote}”
              </blockquote>
              <figcaption className="text-sm font-semibold text-suave mt-auto">
                {review.name} · {review.neighborhood}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
