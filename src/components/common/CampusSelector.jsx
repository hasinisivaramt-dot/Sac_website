import { useState, useRef, useEffect } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { campusList } from '../../data/campusData';

export default function CampusSelector({ campus, onChange, scrolled, transparent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const textClass = transparent && !scrolled ? 'text-cream-soft' : 'text-burgundy-deep';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-utility text-xs uppercase tracking-widest transition-colors ${
          transparent && !scrolled
            ? 'border-cream-soft/40 text-cream-soft hover:border-gold'
            : 'border-burgundy/25 text-burgundy-deep hover:border-gold-dark'
        }`}
      >
        <MapPin size={14} className="text-gold" />
        {campus.name}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-sm border border-gold/30 bg-cream-soft shadow-premium"
          >
            {campusList.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => {
                    onChange(c.id);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left font-body text-sm transition-colors hover:bg-gold/10 ${
                    c.id === campus.id ? 'text-gold-dark' : 'text-burgundy-deep'
                  }`}
                >
                  {c.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
