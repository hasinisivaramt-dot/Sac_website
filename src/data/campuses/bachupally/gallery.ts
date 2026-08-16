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
    alt: "Bachupally Tech Hackathon & coding sprint",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: clubPhotography,
    alt: "Digital media production showcase at Bachupally",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: galleryMusic,
    alt: "Campus acoustic session & talent night",
    aspectClass: "aspect-[9/13]",
  },
  {
    src: eventCultural,
    alt: "Annual cultural gathering and fest at Bachupally",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: clubArts,
    alt: "Design thinking and creative UI exhibition",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubFashion,
    alt: "Bachupally youth fest showcase",
    aspectClass: "aspect-[16/11]",
  },
  {
    src: clubDance,
    alt: "Inter-college cultural showcase performance",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: galleryWorkshop,
    alt: "Robotics and IoT developer workshop",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubMusic,
    alt: "Live band performance at campus amphitheatre",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: eventInauguration,
    alt: "Bachupally SAC orientation and club induction",
    aspectClass: "aspect-[16/11]",
  },
];
