import clubLiterature from "@/assets/club-literature.jpg";
import clubFilm from "@/assets/club-film.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubFashion from "@/assets/club-fashion.jpg";
import type { ClubItem } from "@/types";

export const gbsClubs: ClubItem[] = [
  {
    id: "ecell",
    name: "Entrepreneurship & E-Cell",
    icon: "clapperboard",
    image: clubFilm,
    description: "Startup incubation, pitch masterclasses, and venture mentorship.",
    category: "Management",
    lead: "Aryan Singhania (II Year MBA)",
    membersCount: 190,
    featuredProject: "GBS Angel Pitch Competition",
  },
  {
    id: "fintech",
    name: "Finance & Investment Circle",
    icon: "book-open",
    image: clubLiterature,
    description: "Financial modeling, equity research, crypto trends, and portfolio simulations.",
    category: "Management",
    lead: "Divya Agarwal (II Year MBA Finance)",
    membersCount: 165,
    featuredProject: "Hyderabad Inter-B-School Stock Trading Challenge",
  },
  {
    id: "marketing",
    name: "Marketing & Brand Arena",
    icon: "camera",
    image: clubPhotography,
    description: "Brand identity, consumer analytics, viral campaigns, and media strategy.",
    category: "Management",
    lead: "Varun Malhotra (II Year MBA Marketing)",
    membersCount: 155,
    featuredProject: "GBS Brand Conclave 2025",
  },
  {
    id: "mun-debate",
    name: "Corporate Debate & Model UN",
    icon: "music",
    image: clubMusic,
    description: "Policy debate, diplomacy simulations, and public negotiation forums.",
    category: "Literary",
    lead: "Srishti Sen (I Year PGDM)",
    membersCount: 130,
    featuredProject: "National Management Case Trophy",
  },
  {
    id: "executive-styling",
    name: "Executive Styling & Culture",
    icon: "shirt",
    image: clubFashion,
    description: "Corporate etiquette, professional styling, and business networking galas.",
    category: "Creative Arts",
    lead: "Riya Kapoor (II Year Design)",
    membersCount: 125,
    featuredProject: "Vogue Heritage Runway 2025",
  },
];

export const clubsData = gbsClubs;
