import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Send,
} from "lucide-react";
import { useCampus } from "@/hooks/useCampus";

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

// Only Instagram, YouTube and Telegram
const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://telegram.org",
  },
];

// Add portfolio URLs later
const developers = [
  {
    name: "T Hasini Sivaram",
    portfolio: "",
  },
  {
    name: "N Suvidha Sree",
    portfolio: "",
  },
  {
    name: "P Rahini Sai",
    portfolio: "",
  },
];

export function Footer() {
  const { campus, campusId } = useCampus();

  const isAzizNagar =
    campusId === "aziz-nagar" || campusId === "aziznagar";

  const displayClubs = isAzizNagar ? campus.clubs || [] : [];

  const contact = isAzizNagar
    ? campus.contact || {
        phone: "+91 40 2354 4444",
        email: "sac@kluniversity.in",
        address:
          "KL Deemed to be University, Aziz Nagar, Hyderabad, Telangana - 500075",
        location: "Aziz Nagar, Hyderabad, Telangana",
      }
    : null;

  const handleDeveloperClick = (portfolio) => {
    if (portfolio) {
      window.open(portfolio, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="bg-[#12151A] text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">

        {/* Column 1: SAC Logo & Mission Statement */}
        <div className="space-y-5">
          <a
            href="#home"
            className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-amber-200/40 transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src="/assets/logo/sac-logo.png"
              alt="KLH Student Activity Center Official Logo"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </a>

          <p className="max-w-xs text-sm leading-relaxed text-slate-300">
            Empowering student leadership, creativity, and campus life beyond
            the classroom.
          </p>

          {/* Social Links - Instagram, YouTube, Telegram */}
          <div className="flex gap-3 pt-1">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-200 hover:border-[#C99A3D] hover:bg-[#6D0826] hover:text-white hover:-translate-y-0.5"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#C99A3D]">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-[#C99A3D]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Clubs */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#C99A3D]">
            Clubs
          </h3>

          <ul className="mt-5 space-y-2.5">
            {displayClubs.map((club, idx) => (
              <li key={`${club.name}-${idx}`}>
                <Link
                  to={club.id ? `/clubs/${club.id}` : "#clubs"}
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-[#C99A3D]"
                >
                  {club.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#C99A3D]">
            Contact Us
          </h3>

          {contact ? (
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              {contact.phone && (
                <li className="flex gap-3">
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0 text-[#C99A3D]"
                  />
                  <span>{contact.phone}</span>
                </li>
              )}

              {contact.email && (
                <li className="flex gap-3">
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-[#C99A3D]"
                  />
                  <span className="break-all">{contact.email}</span>
                </li>
              )}

              {(contact.address || contact.location) && (
                <li className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#C99A3D]"
                  />
                  <span>{contact.address || contact.location}</span>
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-slate-400">
              Campus information unavailable.
            </p>
          )}
        </div>
      </div>

      {/* Developed By Section */}
      <div className="border-t border-white/10">
        <div className="section-shell py-5">

          <div className="flex flex-col items-center gap-3">
            {/* Title */}
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C99A3D]/60" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
                Developed By
              </span>

              <span className="h-px w-12 bg-[#C99A3D]/60" />
            </div>

            {/* Developer Names */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {developers.map((developer, index) => (
                <React.Fragment key={developer.name}>
                  <button
                    type="button"
                    onClick={() =>
                      handleDeveloperClick(developer.portfolio)
                    }
                    className="cursor-pointer bg-transparent px-2 text-slate-300 transition-all duration-200 hover:text-[#C99A3D] hover:scale-105"
                  >
                    {developer.name}
                  </button>

                  {index < developers.length - 1 && (
                    <span className="text-slate-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">

          <p>
            © 2025 Student Activity Center, KLH. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="transition-colors hover:text-[#C99A3D]"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="transition-colors hover:text-[#C99A3D]"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}