import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Plate from '../ui/Plate';
import Modal from '../ui/Modal';
import ProfileCard from '../ui/ProfileCard';
import { council } from '../../data/councilData';

export default function StudentCouncilSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <SectionTitle
          eyebrow="Student Voice, In Office"
          title="Student Council"
          subtitle="Elected by their peers, the Student Council represents every department and campus in shaping SAC's calendar — from budgets to big ideas. They're the bridge between students and the administration."
        >
          <Button variant="dark" className="mt-2" onClick={() => setOpen(true)}>
            Know More
          </Button>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-sm shadow-premium"
        >
          <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.7 }}>
            <Plate seed="student-council-group" monogram="SC" className="aspect-[16/11] w-full" />
          </motion.div>
        </motion.div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Student Council">
        <p className="mb-8 max-w-2xl font-body text-sm text-charcoal/70">
          Meet the students currently leading SAC's initiatives across departments and years.
        </p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {council.map((member, i) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              designation={member.position}
              extra={member.dept}
              seed={member.seed}
              index={i}
            />
          ))}
        </div>
      </Modal>
    </section>
  );
}
