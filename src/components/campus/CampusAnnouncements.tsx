import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { announcementsByCampusSlug, type AnnouncementItem } from "@/data/announcements";
import { Bell, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export function CampusAnnouncements() {
  const { campusId, campus } = useCampus();
  const announcements: AnnouncementItem[] = (announcementsByCampusSlug[campusId] || []) as AnnouncementItem[];

  return (
    <section id="announcements" className="relative bg-slate-50/80 py-16 border-t border-slate-100">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">{campus.shortName} Notice Board</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#1F2933] sm:text-3xl">
              Official Announcements & Updates
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#650B25]">
            <Bell className="h-4 w-4 text-[#C99A3D]" />
            <span>Updated Weekly</span>
          </div>
        </div>

        {announcements.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title={`No New Announcements for ${campus.shortName}`}
              message="Important circulars, audition schedules, and club notices will appear here."
            />
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
              >
                {item.isImportant && (
                  <div className="absolute top-0 right-0 rounded-bl-xl bg-[#650B25] px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                    Important
                  </div>
                )}

                <div className="flex items-center gap-2 text-[11px] font-bold text-[#C99A3D]">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>

                <h4 className="mt-2 font-display text-base font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
