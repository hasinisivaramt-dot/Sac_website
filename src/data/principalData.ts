export interface PrincipalInfo {
  campusId: "aziznagar" | "bachupally" | "gbs";
  name: string;
  designation: string;
  degree: string;
  image: string;
  message: string[];
  quote: string;
  highlights: string[];
}

export const principalData: Record<"aziznagar" | "bachupally" | "gbs", PrincipalInfo> = {
  aziznagar: {
    campusId: "aziznagar",
    name: "Dr. A. Ramakrishna",
    designation: "Principal, Aziznagar Campus",
    degree: "Ph.D., M.Tech, Senior IEEE Member",
    image: "/pictures/aziznagar/principal/principal.jpg",
    quote: "True education transcends textbooks — it lives within vibrant student clubs, technical arenas, and cultural expression.",
    message: [
      "Welcome to the Student Activity Center at KLH Aziznagar. As our flagship campus, we believe holistic student development is the bedrock of lifelong achievement.",
      "With over 14 dynamic clubs, maker spaces, and student-led councils, we empower every student to discover their passions, lead impactful projects, and represent the university on international platforms.",
      "I invite every student to step up, join a club, lead an initiative, and make their years at Aziznagar truly transformative.",
    ],
    highlights: [
      "25+ Years of Academic & Research Leadership",
      "Over 60+ National Student Awards Spearheaded",
      "Pioneered Interdisciplinary Student Project Hubs",
    ],
  },
  bachupally: {
    campusId: "bachupally",
    name: "Dr. B. Padmaja",
    designation: "Principal & Dean, Bachupally Campus",
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
  gbs: {
    campusId: "gbs",
    name: "Dr. S. K. Sharma",
    designation: "Dean & Director, Global Business School",
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
};
