import { useEffect, useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import klhLogo from "@/assets/klh-sac-logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About SAC", href: "#about" },
  { label: "Clubs", href: "#clubs" },
  { label: "Events", href: "#events" },
  { label: "Competitions", href: "#competitions" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-deep/90 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "bg-navy-deep/25 backdrop-blur-sm",
      )}
    >
      <nav className="section-shell flex h-20 items-center gap-6">
        <a href="#home" className="flex min-w-0 shrink-0 items-center">
          <img
            src={klhLogo.url}
            alt="KLH University Student Activity Center"
            className="h-9 w-auto rounded-md bg-white/95 px-2 py-1 sm:h-11"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold",
                  active === link.href && "text-gold",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[image:var(--gradient-gold)] transition-transform duration-300",
                    active === link.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0 xl:gap-3">
          <button
            aria-label="Notifications"
            className="relative grid h-10 w-10 place-items-center rounded-full text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-gold"
          >
            <Bell size={19} />
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-secondary text-[0.6rem] font-bold text-primary-foreground">
              3
            </span>
          </button>
          <button className="btn-base btn-outline-gold hidden px-5 py-2 text-sm sm:inline-flex">
            Login
          </button>
          <button className="btn-base btn-gold hidden px-5 py-2 text-sm sm:inline-flex">
            Register
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground transition-colors hover:bg-white/10 xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-deep/97 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="section-shell flex flex-col gap-1 py-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-primary-foreground/85 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 flex gap-3 px-1 sm:hidden">
            <button className="btn-base btn-outline-gold flex-1">Login</button>
            <button className="btn-base btn-gold flex-1">Register</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
