import React from "react";
import { useCampus } from "@/hooks/useCampus";
import { MapPin, Mail, Phone, ArrowUp, Sparkles, Heart } from "lucide-react";

export function Footer() {
  const { campus, allCampuses, setCampus, openCampusModal } = useCampus();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-amber-200/30 bg-[#1F2933] text-slate-300">
      {/* Decorative gradient strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#650B25] via-[#C99A3D] to-[#650B25]" />

      <div className="section-shell py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Current Campus Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2 shadow-md">
                <img
                  src="/pictures/common/sac-logo.png"
                  alt="KLU SAC Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {campus.fullName} Student Activity Center — empowering students to explore passions, lead initiatives, and excel in competitive arts, tech, and leadership.
            </p>

            <div className="pt-2">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#C99A3D]">
                Current Active Campus:
              </span>
              <div className="mt-1 flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                <span className="font-display text-sm font-bold text-white">{campus.name}</span>
                <button
                  type="button"
                  onClick={openCampusModal}
                  className="text-xs font-bold text-[#C99A3D] hover:underline"
                >
                  Change →
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
              Campus Navigation
            </h4>
            <span className="mt-2 block h-0.5 w-10 bg-[#C99A3D]" />
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#C99A3D] transition-colors">
                  About {campus.shortName} SAC
                </a>
              </li>
              <li>
                <a href="#principal" className="hover:text-[#C99A3D] transition-colors">
                  Leadership & Principal's Desk
                </a>
              </li>
              <li>
                <a href="#clubs" className="hover:text-[#C99A3D] transition-colors">
                  Student Clubs & Societies
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#C99A3D] transition-colors">
                  Events & Fest Calendar
                </a>
              </li>
              <li>
                <a href="#visionaries" className="hover:text-[#C99A3D] transition-colors">
                  University Visionaries
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C99A3D] transition-colors">
                  Campus Photo Gallery
                </a>
              </li>
              <li>
                <a href="#announcements" className="hover:text-[#C99A3D] transition-colors">
                  Notice Board & Circulars
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: All Campuses Switcher */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
              Our Campuses
            </h4>
            <span className="mt-2 block h-0.5 w-10 bg-[#C99A3D]" />
            <div className="mt-4 space-y-2 text-xs">
              {allCampuses.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCampus(c.id as any)}
                  className={`flex w-full items-center justify-between rounded-lg p-2 text-left transition-all ${
                    c.id === campus.id
                      ? "bg-[#650B25] text-white font-bold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span>{c.name}</span>
                  {c.id === campus.id ? (
                    <span className="text-[10px] uppercase tracking-wider text-[#C99A3D]">Active</span>
                  ) : (
                    <span className="text-[10px] text-slate-400">Switch →</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
              {campus.shortName} Contact
            </h4>
            <span className="mt-2 block h-0.5 w-10 bg-[#C99A3D]" />
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#C99A3D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{campus.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#C99A3D] shrink-0" />
                <a href={`mailto:${campus.email}`} className="hover:text-white transition-colors">
                  {campus.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#C99A3D] shrink-0" />
                <span>{campus.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} KL Deemed to be University. All Rights Reserved. Student Activity Center (SAC).</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Explore. Engage. Excel.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-[#650B25] transition-colors"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
