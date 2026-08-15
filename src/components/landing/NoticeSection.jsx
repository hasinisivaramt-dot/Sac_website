import { Megaphone } from 'lucide-react';

const notices = [
  'Club registrations for the new academic year open Sept 1.',
  'Founder\'s Week Carnival schedule released — check Events.',
  'Photography Competition submissions close Oct 20.',
];

/**
 * A slim, marquee-style notice strip. Not part of the primary landing-page
 * flow yet — kept here so a NoticesPage or a future homepage revision can
 * drop it in without new scaffolding.
 */
export default function NoticeSection() {
  return (
    <div className="flex items-center gap-3 overflow-hidden border-y border-gold/20 bg-burgundy px-6 py-2.5">
      <Megaphone size={14} className="shrink-0 text-gold-light" />
      <div className="flex gap-10 overflow-x-auto font-utility text-xs uppercase tracking-widest text-cream-soft/80 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {notices.map((n) => (
          <span key={n} className="whitespace-nowrap">{n}</span>
        ))}
      </div>
    </div>
  );
}
