import { ArrowRight, MapPin } from "lucide-react";
import type { EventItem } from "@/types";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center rounded-xl bg-black/70 px-3 py-1.5 text-white backdrop-blur-md border border-white/15 shadow-lg">
          <span className="font-display text-lg font-black leading-none text-[#C99A3D]">
            {event.day}
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white">
            {event.month}
          </span>
        </div>

        {/* Bottom Overlay Title & Location */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <span className="inline-block rounded-md bg-[#6D0826]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-200 backdrop-blur-sm">
            {event.category}
          </span>
          <h3 className="mt-2 font-display text-base sm:text-lg font-bold leading-snug group-hover:text-amber-200 transition-colors">
            {event.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-100/80">
            <MapPin size={13} className="text-[#C99A3D] shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between bg-slate-950 px-5 py-3.5 text-xs text-slate-300">
        <span className="line-clamp-1">{event.description}</span>
      </div>
    </div>
  );
}
