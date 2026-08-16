import SectionTitle from '../ui/SectionTitle';
import CompetitionCard from '../ui/CompetitionCard';
import Button from '../ui/Button';
import { competitions } from '../../data/competitionsData';

export default function CompetitionsSection() {
  return (
    <section id="competitions" className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Test Your Craft" title="Competitions" />
          <Button as="a" href="#" variant="ghost" className="shrink-0">
            View More
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {competitions.map((c, i) => (
            <CompetitionCard key={c.id} competition={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
