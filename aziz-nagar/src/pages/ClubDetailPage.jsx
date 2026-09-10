import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Camera,
  Clapperboard,
  Mic,
  Music,
  Palette,
  Shirt,
  Sparkles,
  Users,
  Clock,
  Trophy,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useCampus } from "@/hooks/useCampus";
import { Button } from "@/components/common";

const iconMap = {
  camera: Camera,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  music: Music,
  mic: Mic,
  "book-open": BookOpen,
  palette: Palette,
  shirt: Shirt,
};

export function ClubDetailPage() {
  const { clubId } = useParams();
  const { clubs = [] } = useCampus();

  const club = clubs.find((c) => c.id === clubId);
  const otherClubs = clubs.filter((c) => c.id !== clubId).slice(0, 4);

  if (!club) {
    return (
      <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold text-[#6D0826]">
          Club not found
        </h1>
        <p className="max-w-md text-sm text-slate-500">
          We couldn't find the club you were looking for. It may have been
          renamed or removed.
        </p>
        <Button as={Link} to="/#clubs" variant="primary">
          <ArrowLeft size={16} />
          Back to all clubs
        </Button>
      </section>
    );
  }

  const Icon = iconMap[club.icon] || Sparkles;

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B1424]">
        <div className="absolute inset-0">
          <img
            src={club.image}
            alt={club.name}
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.17_0.03_262/0.55)_0%,oklch(0.17_0.03_262/0.88)_70%,#1B1424_100%)]" />
        </div>

        <div className="section-shell relative z-10 flex min-h-[46vh] flex-col justify-end gap-5 py-14 md:min-h-[52vh]">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/#clubs" className="transition-colors hover:text-[#C99A3D]">
              Clubs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/85">{club.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C99A3D]/15 text-[#C99A3D] ring-1 ring-[#C99A3D]/40">
              <Icon size={26} />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99A3D]">
                {club.category}
              </span>
              <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                {club.name}
              </h1>
            </div>
          </motion.div>

          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            {club.description}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <Users size={16} className="text-[#C99A3D]" />
              {club.membersCount}+ members
            </span>
            {club.meetingSchedule && (
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#C99A3D]" />
                {club.meetingSchedule}
              </span>
            )}
            {club.lead && (
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#C99A3D]" />
                Led by {club.lead}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#FAFAF8] py-14 md:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            {/* About */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-[#6D0826]">
                About the club
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                {club.longDescription || club.description}
              </p>
            </div>

            {/* Activities */}
            {club.activities?.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#6D0826]">
                  What members do
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {club.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2.5 rounded-xl border border-[#EAE6DF] bg-white p-4 text-sm text-slate-600 shadow-sm"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#C99A3D]" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {club.achievements?.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[#6D0826]">
                  Achievements
                </h2>
                <ul className="mt-4 space-y-3">
                  {club.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-3 rounded-xl bg-[#6D0826]/5 p-4 text-sm text-[#272329]"
                    >
                      <Trophy size={18} className="mt-0.5 shrink-0 text-[#6D0826]" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#EAE6DF] bg-white p-6 shadow-sm">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-[#6D0826]">
                Club snapshot
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Category</dt>
                  <dd className="text-right font-semibold text-[#272329]">{club.category}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Members</dt>
                  <dd className="text-right font-semibold text-[#272329]">{club.membersCount}+</dd>
                </div>
                {club.lead && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Club Lead</dt>
                    <dd className="text-right font-semibold text-[#272329]">{club.lead}</dd>
                  </div>
                )}
                {club.meetingSchedule && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Meets</dt>
                    <dd className="text-right font-semibold text-[#272329]">{club.meetingSchedule}</dd>
                  </div>
                )}
                {club.featuredProject && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Featured Project</dt>
                    <dd className="text-right font-semibold text-[#272329]">{club.featuredProject}</dd>
                  </div>
                )}
              </dl>

              <Button
                as={Link}
                to={`/register?club=${encodeURIComponent(club.name)}`}
                variant="primary"
                className="mt-6 w-full justify-center"
              >
                Join {club.name}
                <ArrowRight size={16} />
              </Button>
              <Button
                as={Link}
                to="/#clubs"
                variant="outline"
                className="mt-3 w-full justify-center"
              >
                <ArrowLeft size={16} />
                All clubs
              </Button>
            </div>
          </aside>
        </div>

        {/* Explore other clubs */}
        {otherClubs.length > 0 && (
          <div className="section-shell mt-16 border-t border-[#EAE6DF] pt-12">
            <h2 className="font-display text-xl font-extrabold text-[#6D0826]">
              Explore other clubs
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {otherClubs.map((c) => {
                const OtherIcon = iconMap[c.icon] || Sparkles;
                return (
                  <Link
                    key={c.id}
                    to={`/clubs/${c.id}`}
                    className="group relative block overflow-hidden rounded-2xl bg-navy-deep shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[9/16] w-full overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,oklch(0.17_0.03_262/0.7)_62%,oklch(0.17_0.03_262/0.96)_100%)]" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-2.5 pb-4">
                      <span className="text-gold">
                        <OtherIcon size={18} />
                      </span>
                      <h3 className="mt-2 text-center font-display text-[0.78rem] font-bold leading-tight text-primary-foreground/90">
                        {c.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
