export interface PrincipalData {
  name: string;
  role: string;
  degree: string;
  image: string;
  quote: string;
  message: string[];
  highlights: string[];
}

export const principalData: PrincipalData = {
  name: "Dr. A. Ramakrishna",
  role: "Principal, Aziz Nagar Campus",
  degree: "Ph.D., M.Tech, Senior IEEE Member",
  image: "/pictures/campus01-aziznagar/principal/principal.jpg",
  quote:
    "True education transcends textbooks — it lives within vibrant student clubs, technical arenas, and cultural expression.",
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
};
