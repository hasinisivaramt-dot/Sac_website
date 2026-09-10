import { ArrowRight, Trophy } from "lucide-react";
export function CompetitionCard({
  comp
}) {
  return <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <img src={comp.image} alt={comp.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6D0826]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
            <Trophy size={11} className="text-[#C99A3D]" />
            {comp.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="font-display text-base sm:text-lg font-bold leading-snug group-hover:text-amber-200 transition-colors uppercase tracking-wide">
            {comp.title}
          </h3>
          <p className="mt-1.5 text-xs text-amber-100/75">{comp.date}</p>
        </div>
      </div>
    </div>;
}