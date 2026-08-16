import { ArrowRight, MapPin } from "lucide-react";

export function EventCard({
  day,
  month,
  title,
  location,
  category,
  image,
  description,
}: {
  day: string;
  month: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1000}
          height={700}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:var(--ease-premium)] group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-burgundy)] text-center shadow-[var(--shadow-card)]">
          <span className="font-display text-xl font-extrabold leading-none text-primary-foreground">
            {day}
          </span>
          <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gold">
            {month}
          </span>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-navy-deep/75 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} className="shrink-0 text-gold" />
          <span className="min-w-0 truncate">{location}</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
          View Details
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
