import SectionTitle from '../ui/SectionTitle';
import ProfileCard from '../ui/ProfileCard';
import { visionaries } from '../../data/visionariesData';

export default function VisionariesSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Guiding. Inspiring. Leading." title="Visionaries" align="center" className="mb-16" />
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {visionaries.map((v, i) => (
            <ProfileCard key={v.name} name={v.name} designation={v.designation} seed={v.seed} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
