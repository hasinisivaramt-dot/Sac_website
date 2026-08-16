import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/sac-data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

function TestimonialCard({
  name,
  club,
  image,
  quote,
  rating,
}: {
  name: string;
  club: string;
  image: string;
  quote: string;
  rating: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
      <Quote size={26} className="text-gold" />
      <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">"{quote}"</p>
      <div className="mt-6 flex min-w-0 items-center gap-4">
        <img
          src={image}
          alt={name}
          width={512}
          height={512}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-gold/50"
        />
        <div className="min-w-0">
          <p className="truncate font-display text-base font-bold text-navy">{name}</p>
          <p className="truncate text-sm text-muted-foreground">{club}</p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={13} className="fill-gold text-gold" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function StudentVoicesSection() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  return (
    <section id="student-voices" className="section-pad bg-muted/60">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Students Say"
          subtitle="Real stories. Real impact."
        />

        <div className="mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 [transition-timing-function:var(--ease-premium)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1 lg:hidden">
                <TestimonialCard {...t} />
              </div>
            ))}
            <div className="hidden w-full shrink-0 gap-7 lg:grid lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-gold" : "w-2 bg-navy/20",
                )}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
