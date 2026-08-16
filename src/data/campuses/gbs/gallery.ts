import eventCultural from "@/assets/event-cultural.jpg";
import clubArts from "@/assets/club-arts.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";
import clubPhotography from "@/assets/club-photography.jpg";
import galleryCelebration from "@/assets/gallery-celebration.jpg";
import clubFashion from "@/assets/club-fashion.jpg";
import clubDance from "@/assets/club-dance.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import clubMusic from "@/assets/club-music.jpg";
import eventInauguration from "@/assets/event-inauguration.jpg";
import type { GalleryItem } from "../../types";

export const galleryData: GalleryItem[] = [
  {
    src: galleryCelebration,
    alt: "GBS Business Conclave & Corporate Panel",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: clubArts,
    alt: "Entrepreneurship pitch arena and investor meet",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: galleryMusic,
    alt: "Annual management festival networking night",
    aspectClass: "aspect-[9/13]",
  },
  {
    src: eventCultural,
    alt: "GBS cultural and leadership evening",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: clubPhotography,
    alt: "Stock market trading simulation tournament",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubFashion,
    alt: "Corporate gala and executive styling showcase",
    aspectClass: "aspect-[16/11]",
  },
  {
    src: clubDance,
    alt: "Student cultural performances at GBS auditorium",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: galleryWorkshop,
    alt: "Design thinking & business analytics workshop",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubMusic,
    alt: "Acoustic music sessions and student fellowship",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: eventInauguration,
    alt: "GBS SAC Induction and Leadership investiture",
    aspectClass: "aspect-[16/11]",
  },
];
