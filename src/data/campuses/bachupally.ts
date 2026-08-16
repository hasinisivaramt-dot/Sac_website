import type { CampusStats } from "./aziznagar";

export interface BachupallyCampusConfig {
  id: "campus02";
  slug: "bachupally";
  name: "Bachupally";
  shortName: "Bachupally";
  fullName: "KLH Hyderabad — Bachupally Campus";
  tagline: "Center for Applied Computing & High-Tech Innovation";
  badge: "Tech & Innovation Hub";
  order: 2;

  hero: {
    title: "Innovate. Code. Create.";
    subtitle: "A fast-paced urban tech campus empowering students through developer clubs, robotics studios, hackathons, and creative digital media production.";
    images: string[];
  };

  principal: {
    name: "Dr. B. Padmaja";
    role: "Principal & Dean, Bachupally Campus";
    degree: "Ph.D., M.Tech, FIETE";
    image: string;
    quote: "Innovation flourishes when tech brilliance meets collaborative student passion and creative freedom.";
    message: string[];
    highlights: string[];
  };

  about: {
    title: "Empowering the Next Generation of Builders";
    description: "The Student Activity Center at Bachupally fuels hands-on technological excellence, competitive robotics, and vibrant arts.";
    image: string;
  };

  location: "Bachupally, Hyderabad";
  address: "KL Deemed to be University, Bachupally, Hyderabad, Telangana - 500090";
  email: "sac.bachupally@klh.edu.in";
  phone: "+91 040 2345 6790";
  themeColor: "#1F2933";
  accentColor: "#C99A3D";

  stats: CampusStats[];
}

export const bachupallyCampus: BachupallyCampusConfig = {
  id: "campus02",
  slug: "bachupally",
  name: "Bachupally",
  shortName: "Bachupally",
  fullName: "KLH Hyderabad — Bachupally Campus",
  tagline: "Center for Applied Computing & High-Tech Innovation",
  badge: "Tech & Innovation Hub",
  order: 2,

  hero: {
    title: "Innovate. Code. Create.",
    subtitle: "A fast-paced urban tech campus empowering students through developer clubs, robotics studios, hackathons, and creative digital media production.",
    images: [
      "/pictures/bachupally/hero/hero-1.jpg",
      "/pictures/bachupally/hero/hero-2.jpg",
      "/pictures/bachupally/hero/hero-3.jpg",
    ],
  },

  principal: {
    name: "Dr. B. Padmaja",
    role: "Principal & Dean, Bachupally Campus",
    degree: "Ph.D., M.Tech, FIETE",
    image: "/pictures/bachupally/principal/principal.jpg",
    quote: "Innovation flourishes when tech brilliance meets collaborative student passion and creative freedom.",
    message: [
      "At KLH Bachupally, we take immense pride in fostering an agile, innovation-first campus environment.",
      "The Student Activity Center here drives our developer community, robotics labs, hackathon triumphs, and digital media arts.",
      "Our students don't just learn technology — they build solutions that touch lives and compete at the highest tier of collegiate innovation.",
    ],
    highlights: [
      "Distinguished Leader in Computing & AI Education",
      "Spearheaded 18+ National Level Hackathons",
      "Mentored Top Student Deep-Tech Startups",
    ],
  },

  about: {
    title: "Empowering the Next Generation of Builders",
    description: "The Student Activity Center at Bachupally fuels hands-on technological excellence, competitive robotics, and vibrant arts.",
    image: "/pictures/bachupally/about/about.jpg",
  },

  location: "Bachupally, Hyderabad",
  address: "KL Deemed to be University, Bachupally, Hyderabad, Telangana - 500090",
  email: "sac.bachupally@klh.edu.in",
  phone: "+91 040 2345 6790",
  themeColor: "#1F2933",
  accentColor: "#C99A3D",

  stats: [
    { label: "Active Clubs", value: "10+" },
    { label: "Tech Hackathons", value: "18+" },
    { label: "Student Members", value: "2,200+" },
    { label: "Innovation Projects", value: "45+" },
  ],
};
