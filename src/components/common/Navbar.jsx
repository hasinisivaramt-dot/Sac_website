import { useEffect, useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../config/navigation';
import CampusSelector from './CampusSelector';

export default function Navbar({ campus, onCampusChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const transparent = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent py-6'
          : 'border-b border-gold/15 bg-cream-soft/85 py-3 shadow-[0_8px_30px_-15px_rgba(43,10,21,0.25)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/pictures/common/klsac-logo.png"
            alt="KLH University Student Activity Center"
            className={`h-9 w-auto object-contain transition-opacity sm:h-11 ${
              transparent ? 'brightness-0 invert' : ''
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-utility text-xs uppercase tracking-widest transition-colors ${
                transparent ? 'text-cream-soft/90 hover:text-gold-light' : 'text-burgundy-deep/90 hover:text-gold-dark'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                  active === link.href ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
          <CampusSelector campus={campus} onChange={onCampusChange} scrolled={scrolled} transparent={transparent} />
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            aria-label="Notifications"
            className={`relative rounded-full p-2 transition-colors ${
              transparent ? 'text-cream-soft hover:text-gold-light' : 'text-burgundy-deep hover:text-gold-dark'
            }`}
          >
            <Bell size={18} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
          </button>
          <button
            className={`font-utility text-xs uppercase tracking-widest transition-colors ${
              transparent ? 'text-cream-soft hover:text-gold-light' : 'text-burgundy-deep hover:text-gold-dark'
            }`}
          >
            Login
          </button>
          <button className="rounded-sm bg-gold px-5 py-2 font-utility text-xs uppercase tracking-widest text-burgundy-deep shadow-gold transition-colors hover:bg-gold-light">
            Register
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${transparent ? 'text-cream-soft' : 'text-burgundy-deep'}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold/15 bg-cream-soft lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-utility text-sm uppercase tracking-widest text-burgundy-deep"
                >
                  {link.label}
                </a>
              ))}
              <CampusSelector campus={campus} onChange={onCampusChange} scrolled transparent={false} />
              <div className="mt-2 flex gap-3">
                <button className="flex-1 rounded-sm border border-burgundy/25 py-2.5 font-utility text-xs uppercase tracking-widest text-burgundy-deep">
                  Login
                </button>
                <button className="flex-1 rounded-sm bg-gold py-2.5 font-utility text-xs uppercase tracking-widest text-burgundy-deep">
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
