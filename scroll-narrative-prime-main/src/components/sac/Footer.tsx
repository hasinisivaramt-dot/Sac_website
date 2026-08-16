import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { clubNames } from "@/lib/sac-data";

const quickLinks = [
  "Home",
  "About SAC",
  "Clubs",
  "Events",
  "Competitions",
  "Achievements",
  "Gallery",
  "Notices",
  "Contact Us",
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

import klhLogo from "@/assets/klh-sac-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[image:var(--gradient-navy)] text-primary-foreground">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center">
            <img
              src={klhLogo.url}
              alt="KLH University Student Activity Center"
              className="h-12 w-auto rounded-lg bg-white/95 px-3 py-2"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Empowering student leadership, creativity, and campus life beyond the classroom.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-primary-foreground/75 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#home"
                  className="text-sm text-primary-foreground/65 transition-colors hover:text-gold"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Clubs
          </h3>
          <ul className="mt-5 space-y-2.5">
            {clubNames.map((club) => (
              <li key={club}>
                <a
                  href="#clubs"
                  className="text-sm text-primary-foreground/65 transition-colors hover:text-gold"
                >
                  {club}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/65">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="min-w-0">+91 40 2354 4444</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="min-w-0 break-all">sac@kluniversity.in</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="min-w-0">
                KLH Campus, Aziznagar, Moinabad, Hyderabad, Telangana, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row">
          <p>© 2025 Student Activity Center, KLH. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
