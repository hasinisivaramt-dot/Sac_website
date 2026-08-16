import type { CampusStats } from "./aziznagar";

export interface GbsCampusConfig {
  id: "campus03";
  slug: "gbs";
  name: "GBS";
  shortName: "GBS";
  fullName: "KLH Global Business School (GBS)";
  tagline: "School of Global Business, Leadership & Enterprise";
  badge: "Management & Enterprise";
  order: 3;

  hero: {
    title: "Lead. Strategize. Excel.";
    subtitle: "Nurturing strategic managers, startup founders, and global leaders through corporate conclaves, stock simulations, marketing arenas, and consulting clubs.";
    images: string[];
  };

  principal: {
    name: "Dr. S. K. Sharma";
    role: "Dean & Director, Global Business School";
    degree: "Ph.D. in Management, MBA, FDP (IIM-A)";
    image: string;
    quote: "Leadership is the art of transforming strategic vision into collective student action and measurable impact.";
    message: string[];
    highlights: string[];
  };

  about: {
    title: "Where Business Acumen Meets Leadership";
    description: "The Student Activity Center at GBS prepares future corporate executives through case study guilds, angel investment arenas, and CXO roundtables.";
    image: string;
  };

  location: "Bowrampet / Hyderabad Campus";
  address: "KLH Global Business School, Hyderabad, Telangana - 500043";
  email: "sac.gbs@klh.edu.in";
  phone: "+91 040 2345 6791";
  themeColor: "#8B1A2B";
  accentColor: "#D9B771";

  stats: CampusStats[];
}

export const gbsCampus: GbsCampusConfig = {
  id: "campus03",
  slug: "gbs",
  name: "GBS",
  shortName: "GBS",
  fullName: "KLH Global Business School (GBS)",
  tagline: "School of Global Business, Leadership & Enterprise",
  badge: "Management & Enterprise",
  order: 3,

  hero: {
    title: "Lead. Strategize. Excel.",
    subtitle: "Nurturing strategic managers, startup founders, and global leaders through corporate conclaves, stock simulations, marketing arenas, and consulting clubs.",
    images: [
      "/pictures/gbs/hero/hero-1.jpg",
      "/pictures/gbs/hero/hero-2.jpg",
      "/pictures/gbs/hero/hero-3.jpg",
    ],
  },

  principal: {
    name: "Dr. S. K. Sharma",
    role: "Dean & Director, Global Business School",
    degree: "Ph.D. in Management, MBA, FDP (IIM-A)",
    image: "/pictures/gbs/principal/principal.jpg",
    quote: "Leadership is the art of transforming strategic vision into collective student action and measurable impact.",
    message: [
      "Welcome to the KLH Global Business School Student Activity Center.",
      "Our clubs are designed as corporate simulators — from stock trading rooms to startup incubators and marketing agencies.",
      "We prepare our graduates to step confidently into boardroom roles by equipping them with strategic foresight, leadership poise, and ethical business stewardship.",
    ],
    highlights: [
      "Former Corporate Strategy Advisor & Academic Dean",
      "Strong Tie-ups with 50+ Fortune 500 Industry Partners",
      "Champion of Experiential Business Pedagogy",
    ],
  },

  about: {
    title: "Where Business Acumen Meets Leadership",
    description: "The Student Activity Center at GBS prepares future corporate executives through case study guilds, angel investment arenas, and CXO roundtables.",
    image: "/pictures/gbs/about/about.jpg",
  },

  location: "Bowrampet / Hyderabad Campus",
  address: "KLH Global Business School, Hyderabad, Telangana - 500043",
  email: "sac.gbs@klh.edu.in",
  phone: "+91 040 2345 6791",
  themeColor: "#8B1A2B",
  accentColor: "#D9B771",

  stats: [
    { label: "Business Clubs", value: "8+" },
    { label: "Corporate Conclaves", value: "30+" },
    { label: "Student Members", value: "1,400+" },
    { label: "Industry Mentors", value: "50+" },
  ],
};
