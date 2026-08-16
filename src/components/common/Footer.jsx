import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';
import { clubs } from '../../data/clubsData';
import { siteConfig } from '../../config/siteConfig';
import { navLinks } from '../../config/navigation';

const quickLinks = [...navLinks, { label: 'Notices', href: '#' }, { label: 'Magazines', href: '#' }];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-burgundy-deep text-cream-soft/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Branding */}
        <div>
          <img
            src="/pictures/common/klsac-logo.png"
            alt="KLH University Student Activity Center"
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-5 font-body text-sm text-cream-soft/60">
            The home of student leadership, creativity, and campus culture across every KLH campus.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
              { Icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
              { Icon: YoutubeIcon, href: siteConfig.social.youtube, label: 'YouTube' },
              { Icon: LinkedinIcon, href: siteConfig.social.linkedin, label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
              >
                <Icon width={15} height={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-utility text-xs uppercase tracking-widest2 text-gold-light">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 font-body text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-gold-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Clubs */}
        <div>
          <h4 className="font-utility text-xs uppercase tracking-widest2 text-gold-light">Clubs</h4>
          <ul className="mt-5 space-y-2.5 font-body text-sm">
            {clubs.map((c) => (
              <li key={c.id}>
                <a href="#clubs" className="transition-colors hover:text-gold-light">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-utility text-xs uppercase tracking-widest2 text-gold-light">Contact</h4>
          <ul className="mt-5 space-y-3 font-body text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {siteConfig.contact.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-gold" />
              {siteConfig.contact.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-gold" />
              {siteConfig.contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-soft/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 font-body text-xs text-cream-soft/50 sm:flex-row">
          <p>© {new Date().getFullYear()} KLH University Student Activity Center. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-light">Privacy Policy</a>
            <a href="#" className="hover:text-gold-light">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
