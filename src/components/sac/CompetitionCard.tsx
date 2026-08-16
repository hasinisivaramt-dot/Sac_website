import { ArrowRight, CalendarDays } from "lucide-react";

export function CompetitionCard({
  title,
  category,
  date,
  image,
}: {
  title: string;
  category: string;
  date: string;
  image: string;
}) {
  return (
    <article className="card-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-navy shadow-[var(--shadow-card)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={800}
          height={550}
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-transform duration-700 [transition-timing-function:var(--ease-premium)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.17_0.03_262/0.15),oklch(0.17_0.03_262/0.9))]" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-navy-deep/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-primary-foreground">{title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-primary-foreground/60">
          <CalendarDays size={14} className="shrink-0 text-gold" />
          <span className="min-w-0">{date}</span>
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          View Competition
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
