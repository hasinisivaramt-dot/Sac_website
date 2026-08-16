import clubPhotography from "@/assets/club-photography.jpg";
import clubFilm from "@/assets/club-film.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubJournalism from "@/assets/club-journalism.jpg";
import clubLiterature from "@/assets/club-literature.jpg";
import clubArts from "@/assets/club-arts.jpg";
import clubFashion from "@/assets/club-fashion.jpg";
import type { ClubItem } from "@/types";

export const azizNagarClubs: ClubItem[] = [
  {
    id: "photography",
    name: "Photography & Editing",
    icon: "camera",
    image: clubPhotography,
    description: "Frame stories, master light and craft visuals that speak.",
    category: "Media & Tech",
    lead: "Rahul Varma (IV Year CSE)",
    membersCount: 180,
    featuredProject: "Campus 360 Visual Archive 2025",
  },
  {
    id: "film-making",
    name: "Film Making",
    icon: "clapperboard",
    image: clubFilm,
    description: "Script, shoot and edit short films with campus crews.",
    category: "Creative Arts",
    lead: "Sneha Reddy (III Year ECE)",
    membersCount: 140,
    featuredProject: "National Student Short Film Fest Winner",
  },
  {
    id: "dance",
    name: "Dance",
    icon: "sparkles",
    image: clubDance,
    description: "Classical, contemporary and fusion choreography on stage.",
    category: "Performing Arts",
    lead: "Ananya Rao (IV Year AI)",
    membersCount: 220,
    featuredProject: "Tarangini Dance Fest Champions",
  },
  {
    id: "music",
    name: "Music",
    icon: "music",
    image: clubMusic,
    description: "Bands, vocals and jam sessions across every genre.",
    category: "Performing Arts",
    lead: "Karthik Sharma (III Year Mech)",
    membersCount: 195,
    featuredProject: "KL Acoustic Unplugged Album Vol. 4",
  },
  {
    id: "journalism",
    name: "Journalism",
    icon: "mic",
    image: clubJournalism,
    description: "Report campus life through the student newsroom.",
    category: "Media & Tech",
    lead: "Priya Nair (III Year English)",
    membersCount: 110,
    featuredProject: "The KLH Chronicle Monthly Issue",
  },
  {
    id: "literature",
    name: "Literature",
    icon: "book-open",
    image: clubLiterature,
    description: "Poetry nights, debates, open mics and writing circles.",
    category: "Literary",
    lead: "Meghana Talluri (IV Year IT)",
    membersCount: 130,
    featuredProject: "KLH Youth Parliament 2025",
  },
  {
    id: "arts",
    name: "Arts",
    icon: "palette",
    image: clubArts,
    description: "Painting, sketching, murals and installation art.",
    category: "Creative Arts",
    lead: "Deepak Choudhury (III Year Civil)",
    membersCount: 160,
    featuredProject: "Aziznagar Eco-Art Walkway Project",
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: "shirt",
    image: clubFashion,
    description: "Styling, runway production and design showcases.",
    category: "Creative Arts",
    lead: "Riya Kapoor (II Year Design)",
    membersCount: 125,
    featuredProject: "Vogue Heritage Runway 2025",
  },
];

export const clubsData = azizNagarClubs;
