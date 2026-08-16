import React, { useState, useEffect, useRef } from "react";
import { Bell, ChevronDown, Check, Landmark, Menu, X, ArrowRight } from "lucide-react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About SAC", href: "#about" },
  { label: "Clubs", href: "#clubs" },
  { label: "Events", href: "#events" },
  { label: "Competitions", href: "#competitions" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
];

const campusOptions = [
  { id: "aziz-nagar" as CampusId, name: "Aziz Nagar", order: 1 },
  { id: "bachupally" as CampusId, name: "Bachupally", order: 2 },
  { id: "gbs" as CampusId, name: "GBS", order: 3 },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const { campusId, setCampus, campus } = useCampus();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active campus display name (guaranteed Aziz Nagar default)
  const currentCampus =
    campusOptions.find((c) => c.id === campusId || (c.id === "aziz-nagar" && (campusId as string) === "aziznagar")) ||
    campusOptions[0];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const scrollPos = window.scrollY + 100;
      for (const link of links) {
        const el = document.querySelector(link.href) as HTMLElement;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(link.href);
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCampus = (id: CampusId) => {
    setCampus(id);
    setDropdownOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/98 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] backdrop-blur-md border-b border-slate-200/80 py-2"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-200/60 py-2.5"
      )}
    >
      <nav className="section-shell flex h-14 md:h-15 items-center justify-between gap-3">
        {/* ================================================================= */}
        {/* 1. COMPACT LOGO GROUP (KLH + SAC)                                 */}
        {/* ================================================================= */}
        <a href="#home" className="flex items-center gap-3 select-none shrink-0 group">
          <img
            src="/pictures/common/sac-logo.png"
            alt="KLH Student Activity Center Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* ================================================================= */}
        {/* 2. CENTER NAVIGATION LINKS                                       */}
        {/* ================================================================= */}
        <ul className="hidden items-center gap-5 lg:gap-7 xl:flex">
          {links.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={cn(
                    "relative py-1 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-[#6D0826] font-bold"
                      : "text-slate-700 hover:text-[#6D0826]"
                  )}
                >
                  {link.label}
                  {/* Subtle Thin Gold/Burgundy Underline on Active */}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full bg-[#6D0826]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ================================================================= */}
        {/* 3. RIGHT ACTIONS: CAMPUS DROPDOWN + BELL + LOGIN + REGISTER      */}
        {/* ================================================================= */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Campus Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn(
                "flex items-center gap-1.5 rounded-xl border border-amber-300/80 bg-amber-50/40 px-3 py-1.5 text-xs font-bold text-slate-800 transition-all duration-200 hover:border-[#C99A3D] hover:bg-amber-50 active:scale-[0.98]",
                dropdownOpen && "ring-2 ring-[#C99A3D]/30 border-[#C99A3D]"
              )}
              aria-expanded={dropdownOpen}
              aria-label="Select Campus"
            >
              <Landmark size={14} className="text-[#C99A3D] shrink-0" />
              <span className="font-semibold text-slate-900">{currentCampus.name}</span>
              <ChevronDown
                size={13}
                className={cn(
                  "text-slate-500 transition-transform duration-200",
                  dropdownOpen && "rotate-180 text-[#6D0826]"
                )}
              />
            </button>

            {/* Dropdown Menu Popup */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#C99A3D]">
                  Select Campus
                </div>
                <div className="mt-1 space-y-1">
                  {campusOptions.map((c) => {
                    const isSelected = c.id === campusId;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleSelectCampus(c.id as CampusId)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                          isSelected
                            ? "bg-amber-50/80 text-[#6D0826] font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Landmark
                            size={13}
                            className={isSelected ? "text-[#6D0826]" : "text-slate-400"}
                          />
                          <span>{c.name}</span>
                        </div>
                        {isSelected && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#6D0826] text-white">
                            <Check size={10} strokeWidth={3} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Notification Bell with Red Badge 3 */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-sm">
              3
            </span>
          </button>

          {/* Login Button (Outlined) */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-sm hover:border-[#6D0826] hover:text-[#6D0826] hover:bg-slate-50 transition-all"
          >
            Login
          </button>

          {/* Register Button (Gold Primary CTA) */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D9B771] to-[#C99A3D] px-5 py-1.5 text-xs font-bold text-[#1F2933] shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Register
            <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* 4. MOBILE NAVIGATION DRAWER                                      */}
      {/* ================================================================= */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-xl xl:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-amber-50 hover:text-[#6D0826]"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile Campus Selector */}
            <li className="pt-2 border-t border-slate-100">
              <span className="block px-3 text-[10px] font-extrabold uppercase tracking-wider text-[#C99A3D]">
                Campus
              </span>
              <div className="mt-1.5 grid grid-cols-3 gap-2 px-1">
                {campusOptions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      handleSelectCampus(c.id as CampusId);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "rounded-lg py-1.5 text-xs font-bold transition-colors",
                      c.id === campusId
                        ? "bg-[#6D0826] text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    )}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </li>

            {/* Mobile Login & Register */}
            <li className="mt-3 flex gap-2 pt-2 border-t border-slate-100">
              <button className="flex-1 rounded-xl border border-slate-300 py-2.5 text-xs font-bold text-slate-800 shadow-sm">
                Login
              </button>
              <button className="flex-1 rounded-xl bg-gradient-to-r from-[#D9B771] to-[#C99A3D] py-2.5 text-xs font-bold text-[#1F2933] shadow-sm">
                Register →
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
