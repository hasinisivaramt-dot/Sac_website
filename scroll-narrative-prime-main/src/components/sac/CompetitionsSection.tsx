import { ArrowRight } from "lucide-react";
import { competitions } from "@/lib/sac-data";
import { CompetitionCard } from "./CompetitionCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function CompetitionsSection() {
  return (
    <section
      id="competitions"
      className="section-pad relative overflow-hidden bg-[image:var(--gradient-navy)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Compete"
          title="Competitions"
          subtitle="Challenge yourself. Showcase your talent."
          tone="dark"
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 110}>
              <CompetitionCard {...c} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <a href="#competitions" className="btn-base btn-gold group">
            View All Competitions
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
