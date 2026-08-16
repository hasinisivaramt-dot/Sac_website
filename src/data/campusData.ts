export interface CampusStats {
  label: string;
  value: string;
}

export interface CampusInfo {
  id: "aziznagar" | "bachupally" | "gbs";
  name: string;
  shortName: string;
  fullName: string;
  tagline: string;
  badge: string;
  description: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  heroImages: string[];
  stats: CampusStats[];
  themeColor: string;
  accentColor: string;
}

export type CampusKey = "aziznagar" | "bachupally" | "gbs";

export const campuses: Record<CampusKey, CampusInfo> = {
  aziznagar: {
    id: "aziznagar",
    name: "Aziz Nagar",
    shortName: "Aziz Nagar",
    fullName: "KLH Hyderabad — Aziz Nagar Main Campus",
    tagline: "The Flagship Engineering & Technology Campus",
    badge: "Main Engineering Hub",
    description:
      "Sprawling across a lush green landscape with advanced research hubs, maker spaces, and the central Student Activity Center orchestrating 14+ premier clubs.",
    location: "Aziznagar, Moinabad Road, Hyderabad",
    address: "KL Deemed to be University, Aziznagar, Hyderabad, Telangana - 500075",
    email: "sac.aziznagar@klh.edu.in",
    phone: "+91 040 2345 6789",
    heroImages: [
      "/pictures/aziznagar/hero/hero-1.jpg",
      "/pictures/aziznagar/hero/hero-2.jpg",
      "/pictures/aziznagar/hero/hero-3.jpg",
    ],
    stats: [
      { label: "Active Clubs", value: "14+" },
      { label: "Annual Events", value: "60+" },
      { label: "Student Members", value: "3,500+" },
      { label: "National Awards", value: "28" },
    ],
    themeColor: "#650B25",
    accentColor: "#C99A3D",
  },
  bachupally: {
    id: "bachupally",
    name: "Bachupally Campus",
    shortName: "Bachupally",
    fullName: "KLH Hyderabad — Bachupally Campus",
    tagline: "Center for Applied Computing & High-Tech Innovation",
    badge: "Tech & Innovation Hub",
    description:
      "A fast-paced urban tech campus empowering students through developer clubs, robotics studios, hackathons, and creative digital media production.",
    location: "Bachupally, Hyderabad",
    address: "KL Deemed to be University, Bachupally, Hyderabad, Telangana - 500090",
    email: "sac.bachupally@klh.edu.in",
    phone: "+91 040 2345 6790",
    heroImages: [
      "/pictures/bachupally/hero/hero-1.jpg",
      "/pictures/bachupally/hero/hero-2.jpg",
      "/pictures/bachupally/hero/hero-3.jpg",
    ],
    stats: [
      { label: "Active Clubs", value: "10+" },
      { label: "Tech Hackathons", value: "18+" },
      { label: "Student Members", value: "2,200+" },
      { label: "Innovation Projects", value: "45+" },
    ],
    themeColor: "#1F2933",
    accentColor: "#C99A3D",
  },
  gbs: {
    id: "gbs",
    name: "Global Business School (GBS)",
    shortName: "GBS Hyderabad",
    fullName: "KLH Global Business School",
    tagline: "School of Global Business, Leadership & Enterprise",
    badge: "Management & Enterprise",
    description:
      "Nurturing strategic managers, startup founders, and global leaders through corporate conclaves, stock simulations, marketing arenas, and consulting clubs.",
    location: "Bowrampet / Hyderabad Campus",
    address: "KLH Global Business School, Hyderabad, Telangana - 500043",
    email: "sac.gbs@klh.edu.in",
    phone: "+91 040 2345 6791",
    heroImages: [
      "/pictures/gbs/hero/hero-1.jpg",
      "/pictures/gbs/hero/hero-2.jpg",
      "/pictures/gbs/hero/hero-3.jpg",
    ],
    stats: [
      { label: "Business Clubs", value: "8+" },
      { label: "Corporate Conclaves", value: "30+" },
      { label: "Student Members", value: "1,400+" },
      { label: "Industry Mentors", value: "50+" },
    ],
    themeColor: "#8B1A2B",
    accentColor: "#D9B771",
  },
};

export const campusList = Object.values(campuses);

export const DEFAULT_CAMPUS_ID = "aziznagar" as const;
