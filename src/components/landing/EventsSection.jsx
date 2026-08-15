import { motion } from 'framer-motion';
import EventCard from '../ui/EventCard';
import Button from '../ui/Button';
import { events } from '../../data/eventsData';

export default function EventsSection() {
  return (
    <section id="events" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold-dark" />
            <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">Events</h2>
            <span className="h-px w-10 bg-gold-dark" />
          </div>
          <p className="mt-3 font-body text-sm text-charcoal/60">What&apos;s happening in college</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button as="a" href="#" variant="dark">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
