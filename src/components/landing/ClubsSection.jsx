import SectionTitle from '../ui/SectionTitle';
import ClubCard from '../ui/ClubCard';
import { clubs } from '../../data/clubsData';

export default function ClubsSection() {
  return (
    <section id="clubs" className="bg-cream-soft pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Explore. Engage. Excel."
          title="Clubs"
          align="center"
          className="mb-6"
        />
        {/* Always a single row of 8 — no side-scroll, cards shrink to fit the viewport */}
        <div className="grid grid-cols-8 gap-1.5 sm:gap-3 lg:gap-4">
          {clubs.map((club, i) => (
            <ClubCard key={club.id} club={club} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
