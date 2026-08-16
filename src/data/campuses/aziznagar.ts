export interface CampusStats {
  label: string;
  value: string;
}

export interface CampusConfig {
  id: "campus01";
  slug: "aziznagar";
  name: "Aziz Nagar";
  shortName: "Aziz Nagar";
  fullName: "KLH Hyderabad — Aziz Nagar Main Campus";
  tagline: "The Flagship Engineering & Technology Campus";
  badge: "Engineering & Innovation Hub";
  order: 1;

  hero: {
    title: "Explore. Engage. Excel at SAC.";
    subtitle: "Sprawling across a lush green landscape with advanced research hubs, maker spaces, and the central Student Activity Center orchestrating premier student clubs.";
    images: string[];
  };

  principal: {
    name: "Dr. A. Ramakrishna";
    role: "Principal, Aziz Nagar Campus";
    degree: "Ph.D., M.Tech, Senior IEEE Member";
    image: string;
    quote: "True education transcends textbooks — it lives within vibrant student clubs, technical arenas, and cultural expression.";
    message: string[];
    highlights: string[];
  };

  about: {
    title: "Where Ambition Meets Action";
    description: "The Student Activity Center at Aziz Nagar is the heartbeat of non-academic student life. We provide the mentorship, funding, infrastructure, and platform for students to lead.";
    image: string;
  };

  location: "Aziz Nagar, Moinabad Road, Hyderabad";
  address: "KL Deemed to be University, Aziz Nagar, Hyderabad, Telangana - 500075";
  email: "sac.aziznagar@klh.edu.in";
  phone: "+91 040 2345 6789";
  themeColor: "#650B25";
  accentColor: "#C99A3D";

  stats: CampusStats[];
}

export const aziznagarCampus: CampusConfig = {
  id: "campus01",
  slug: "aziznagar",
  name: "Aziz Nagar",
  shortName: "Aziz Nagar",
  fullName: "KLH Hyderabad — Aziz Nagar Main Campus",
  tagline: "The Flagship Engineering & Technology Campus",
  badge: "Engineering & Innovation Hub",
  order: 1,

  hero: {
    title: "Explore. Engage. Excel at SAC.",
    subtitle: "Sprawling across a lush green landscape with advanced research hubs, maker spaces, and the central Student Activity Center orchestrating premier student clubs.",
    images: [
      "/pictures/aziznagar/hero/hero-1.jpg",
      "/pictures/aziznagar/hero/hero-2.jpg",
      "/pictures/aziznagar/hero/hero-3.jpg",
    ],
  },

  principal: {
    name: "Dr. A. Ramakrishna",
    role: "Principal, Aziz Nagar Campus",
    degree: "Ph.D., M.Tech, Senior IEEE Member",
    image: "/pictures/aziznagar/principal/principal.jpg",
    quote: "True education transcends textbooks — it lives within vibrant student clubs, technical arenas, and cultural expression.",
    message: [
      "Welcome to the Student Activity Center at KLH Aziz Nagar. As our flagship campus, we believe holistic student development is the bedrock of lifelong achievement.",
      "With over 14 dynamic clubs, maker spaces, and student-led councils, we empower every student to discover their passions, lead impactful projects, and represent the university on international platforms.",
      "I invite every student to step up, join a club, lead an initiative, and make their years at Aziz Nagar truly transformative.",
    ],
    highlights: [
      "25+ Years of Academic & Research Leadership",
      "Over 60+ National Student Awards Spearheaded",
      "Pioneered Interdisciplinary Student Project Hubs",
    ],
  },

  about: {
    title: "Where Ambition Meets Action",
    description: "The Student Activity Center at Aziz Nagar is the heartbeat of non-academic student life. We provide the mentorship, funding, infrastructure, and platform for students to lead.",
    image: "/pictures/aziznagar/about/about.jpg",
  },

  location: "Aziz Nagar, Moinabad Road, Hyderabad",
  address: "KL Deemed to be University, Aziz Nagar, Hyderabad, Telangana - 500075",
  email: "sac.aziznagar@klh.edu.in",
  phone: "+91 040 2345 6789",
  themeColor: "#650B25",
  accentColor: "#C99A3D",

  stats: [
    { label: "Active Clubs", value: "14+" },
    { label: "Annual Events", value: "60+" },
    { label: "Student Members", value: "3,500+" },
    { label: "National Awards", value: "28" },
  ],
};
