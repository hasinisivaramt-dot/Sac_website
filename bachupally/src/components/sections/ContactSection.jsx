import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useCampus } from "@/hooks/useCampus";
import { motion } from "framer-motion";

export function ContactSection() {
  const { campus } = useCampus();
  const contact = campus.contact;

  if (!contact?.email) {
    return null;
  }

  return (
    <section id="contact" className="section-shell py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-[#C99A3D]">
          GET IN TOUCH
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-[#272329]">
          Contact {campus.shortName || campus.name}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid gap-6 sm:grid-cols-3"
      >
        {contact.location && (
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[#6D0826]" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Location</p>
              <p className="mt-1 text-sm text-slate-600">{contact.location}</p>
            </div>
          </div>
        )}
        {contact.email && (
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
            <Mail size={20} className="mt-0.5 shrink-0 text-[#6D0826]" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Email</p>
              <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-slate-600 hover:text-[#6D0826]">
                {contact.email}
              </a>
            </div>
          </div>
        )}
        {contact.phone && (
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
            <Phone size={20} className="mt-0.5 shrink-0 text-[#6D0826]" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Phone</p>
              <a href={`tel:${contact.phone}`} className="mt-1 block text-sm text-slate-600 hover:text-[#6D0826]">
                {contact.phone}
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
