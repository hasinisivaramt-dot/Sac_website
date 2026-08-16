import clubFilm from "@/assets/club-film.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import clubMusic from "@/assets/club-music.jpg";
import clubDance from "@/assets/club-dance.jpg";
import clubArts from "@/assets/club-arts.jpg";
import type { ClubItem } from "@/types";

export const bachupallyClubs: ClubItem[] = [
  {
    id: "dev-hack",
    name: "Developer & AI Club",
    icon: "clapperboard",
    image: clubFilm,
    description: "Building open-source software, full-stack tools, and AI applications.",
    category: "Innovation",
    lead: "Aditya Mohan (IV Year AI&DS)",
    membersCount: 260,
    featuredProject: "Smart Campus Automation Suite",
  },
  {
    id: "digital-media",
    name: "Digital Media & Photography",
    icon: "camera",
    image: clubPhotography,
    description: "Capturing tech events, digital design, and video journalism.",
    category: "Media & Tech",
    lead: "Sameer Joshi (III Year CSE)",
    membersCount: 140,
    featuredProject: "Bachupally Virtual Metaverse Tour",
  },
  {
    id: "music-society",
    name: "Music Society",
    icon: "music",
    image: clubMusic,
    description: "Campus bands, acoustic jams, and audio engineering.",
    category: "Performing Arts",
    lead: "Neil Fernandes (II Year ECE)",
    membersCount: 120,
    featuredProject: "Pulse Electronic Live Showcase",
  },
  {
    id: "dance-society",
    name: "Choreography & Dance",
    icon: "sparkles",
    image: clubDance,
    description: "Dance showcases and high-energy stage performances.",
    category: "Performing Arts",
    lead: "Kavya Patel (IV Year CSE)",
    membersCount: 115,
    featuredProject: "Awaaz Street Theatre Fest",
  },
  {
    id: "design-lab",
    name: "Design & UX Lab",
    icon: "palette",
    image: clubArts,
    description: "Graphic design, wireframing, UI prototyping and digital art.",
    category: "Creative Arts",
    lead: "Rohan Kulkarni (III Year IT)",
    membersCount: 95,
    featuredProject: "National Tech-Policy Summit 2025",
  },
];

export const clubsData = bachupallyClubs;
