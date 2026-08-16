import { clubs } from "@/lib/sac-data";
import { ClubCard } from "./ClubCard";
import { Reveal } from "./Reveal";

export function ClubsSection() {
  return (
    <section id="clubs" className="section-pad relative bg-ivory">
      <div className="section-shell">
        <div className="flex flex-col items-center text-center">
          <span className="h-px w-16 bg-[image:var(--gradient-gold)]" />
          <h2 className="mt-5 font-display text-3xl font-extrabold text-secondary md:text-5xl">
            Clubs
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Explore. Engage. Excel.
          </p>
          <span className="mt-5 h-px w-16 bg-[image:var(--gradient-gold)]" />
        </div>

        <Reveal>
          <div className="club-row mt-12 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 xl:grid-cols-8">
            {clubs.map((club) => (
              <ClubCard key={club.name} name={club.name} image={club.image} icon={club.icon} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
