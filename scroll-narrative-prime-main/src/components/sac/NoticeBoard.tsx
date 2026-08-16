import { ArrowRight, Bell } from "lucide-react";
import { Reveal } from "./Reveal";

export function NoticeBoard() {
  return (
    <section id="notices" className="relative overflow-hidden bg-[image:var(--gradient-burgundy)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="section-shell relative py-16 md:py-20">
        <Reveal className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 md:flex md:flex-wrap md:justify-between md:gap-8">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/40 bg-[image:var(--gradient-gold)] text-burgundy-deep">
            <Bell size={26} />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              Notice Board
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/70 md:text-base">
              Stay updated with the latest announcements and important information.
            </p>
          </div>
          <a
            href="#notices"
            className="btn-base btn-gold group col-span-2 w-full justify-center md:w-auto"
          >
            View All Notices
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
