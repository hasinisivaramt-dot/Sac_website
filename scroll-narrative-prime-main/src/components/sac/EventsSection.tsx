import { ArrowRight } from "lucide-react";
import { events } from "@/lib/sac-data";
import { EventCard } from "./EventCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function EventsSection() {
  return (
    <section id="events" className="section-pad bg-background">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Calendar"
          title="Upcoming Events"
          subtitle="What's happening at KLH"
        />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 110}>
              <EventCard {...event} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <a href="#events" className="btn-base btn-outline-navy group">
            View All Events
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
