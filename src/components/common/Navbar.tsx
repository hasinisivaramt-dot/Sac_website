import React, { useState, useEffect } from "react";
import { useCampus } from "@/hooks/useCampus";
import { CampusBadgeButton } from "./CampusSelector";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";

export function Navbar() {
  const { campus, getCampusUrl, openCampusModal } = useCampus();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Principal", href: "#principal" },
    { label: "Clubs", href: "#clubs" },
    { label: "Events", href: "#events" },
    { label: "Visionaries", href: "#visionaries" },
    { label: "Gallery", href: "#gallery" },
    { label: "Announcements", href: "#announcements" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md border-b border-amber-200/40 py-2.5"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-100 py-3.5"
      )}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href={getCampusUrl("")}
          className="flex items-center gap-3 select-none transition-transform hover:scale-[1.01]"
        >
          <img
            src="/pictures/common/sac-logo.png"
            alt="KLU SAC Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Desktop Campus Switcher + Navigation Links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Active Campus Switcher Badge */}
          <CampusBadgeButton />

          <span className="h-5 w-px bg-slate-200" />

          {/* Links */}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-amber-50 hover:text-[#650B25]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <a
            href="#clubs"
            className="btn-base btn-burgundy text-xs px-4 py-2 font-bold uppercase tracking-wider"
          >
            Explore Clubs
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <CampusBadgeButton className="scale-90" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-amber-200/50 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-2">
            <div className="mb-2 rounded-xl bg-amber-50/70 p-3 text-xs">
              <span className="font-bold text-[#650B25]">Selected Campus: </span>
              <span className="text-slate-600">{campus.name}</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCampusModal();
                }}
                className="mt-1 block text-xs font-bold text-[#C99A3D] underline"
              >
                Switch to another campus →
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-base font-semibold text-slate-800 hover:bg-amber-50 hover:text-[#650B25] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            ))}

            <a
              href="#clubs"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 block text-center rounded-xl bg-[#650B25] py-3 text-sm font-bold text-white shadow-md hover:bg-[#4A071B] transition-colors"
            >
              Explore {campus.shortName} Clubs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
