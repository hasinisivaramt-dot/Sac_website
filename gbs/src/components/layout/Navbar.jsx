import React, { useState, useEffect, useRef } from "react";
import { Bell, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPUS_OPTIONS, getCampusUrl } from "@/config/campuses";
const links = [{
  label: "Home",
  href: "#home"
}, {
  label: "About SAC",
  href: "#about"
}, {
  label: "Clubs",
  href: "#clubs"
}, {
  label: "Events",
  href: "#events"
}, {
  label: "Competitions",
  href: "#competitions"
}, {
  label: "Achievements",
  href: "#achievements"
}, {
  label: "Gallery",
  href: "#gallery"
}];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const currentCampus = "gbs";
  const handleCampusChange = (event) => {
    const campusId = event.target.value;
    const targetUrl = getCampusUrl(campusId);
    if (targetUrl) window.location.href = targetUrl;
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const scrollPos = window.scrollY + 100;
      for (const link of links) {
        const el = document.querySelector(link.href);
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
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-white/98 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] backdrop-blur-md border-b border-slate-200/80 py-2" : "bg-white/95 backdrop-blur-sm border-b border-slate-200/60 py-2.5")}>
      <nav className="section-shell flex h-14 md:h-15 items-center justify-between gap-3">
        {/* ================================================================= */}
        {/* 1. COMPACT LOGO GROUP (KLH + SAC)                                 */}
        {/* ================================================================= */}
        <a href="#home" className="flex items-center gap-3 select-none shrink-0 group">
          <img src="/assets/logo/sac-logo.png" alt="KLH Student Activity Center Logo" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" />
        </a>

        {/* ================================================================= */}
        {/* 2. CENTER NAVIGATION LINKS                                       */}
        {/* ================================================================= */}
        <ul className="hidden items-center gap-5 lg:gap-7 xl:flex">
          {links.map(link => {
          const isActive = activeLink === link.href;
          return <li key={link.label}>
                <a href={link.href} onClick={() => setActiveLink(link.href)} className={cn("relative py-1 text-sm font-semibold transition-colors duration-200", isActive ? "text-[#6D0826] font-bold" : "text-slate-700 hover:text-[#6D0826]")}>
                  {link.label}
                  {/* Subtle Thin Gold/Burgundy Underline on Active */}
                  {isActive && <span className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full bg-[#6D0826]" />}
                </a>
              </li>;
        })}
        </ul>

        {/* ================================================================= */}
        {/* 3. CAMPUS SELECTOR (placed immediately after Gallery)            */}
        {/* ================================================================= */}
        <div className="hidden xl:block shrink-0">
          <label htmlFor="campus-selector" className="sr-only">
            Select campus
          </label>
          <div className="relative">
            <select
              id="campus-selector"
              value={currentCampus}
              onChange={handleCampusChange}
              className="appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all hover:border-[#D9B771] focus:border-[#6D0826] focus:ring-2 focus:ring-[#6D0826]/10 cursor-pointer"
            >
              {CAMPUS_OPTIONS.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>
        </div>

        {/* ================================================================= */}
        {/* 4. RIGHT ACTIONS: BELL + LOGIN + REGISTER                       */}
        {/* ================================================================= */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Notification Bell with Red Badge 3 */}
          <button type="button" aria-label="Notifications" className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors">
            <Bell size={18} />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-sm">
              3
            </span>
          </button>

          {/* Login Button (Outlined) */}
          <button type="button" className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-sm hover:border-[#6D0826] hover:text-[#6D0826] hover:bg-slate-50 transition-all">
            Login
          </button>

          {/* Register Button (Gold Primary CTA) */}
          <button type="button" className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D9B771] to-[#C99A3D] px-5 py-1.5 text-xs font-bold text-[#1F2933] shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Register
            <ArrowRight size={13} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 xl:hidden">
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* 4. MOBILE NAVIGATION DRAWER                                      */}
      {/* ================================================================= */}
      {mobileMenuOpen && <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-xl xl:hidden">
          <ul className="flex flex-col gap-2">
            {links.map(link => <li key={link.label}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-amber-50 hover:text-[#6D0826]">
                  {link.label}
                </a>
              </li>)}

            {/* Mobile Campus Selector */}
            <li className="mt-2 border-t border-slate-100 pt-3">
              <label htmlFor="mobile-campus-selector" className="mb-1.5 block px-3 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                Campus
              </label>
              <div className="relative">
                <select
                  id="mobile-campus-selector"
                  value={currentCampus}
                  onChange={(event) => {
                    handleCampusChange(event);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm font-semibold text-slate-700 outline-none focus:border-[#6D0826]"
                >
                  {CAMPUS_OPTIONS.map((campus) => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                />
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
        </div>}
    </header>;
}