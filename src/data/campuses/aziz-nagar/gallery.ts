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
    src: eventCultural,
    alt: "Cultural festival crowd celebrating at night",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: clubArts,
    alt: "Student artwork and painting showcase",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: galleryMusic,
    alt: "Live campus music concert performance",
    aspectClass: "aspect-[9/13]",
  },
  {
    src: clubPhotography,
    alt: "Student photographer capturing campus moments",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: galleryCelebration,
    alt: "Students celebrating outdoor milestone on campus",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubFashion,
    alt: "Student fashion show runway production",
    aspectClass: "aspect-[16/11]",
  },
  {
    src: clubDance,
    alt: "Student dance performance on main auditorium stage",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: galleryWorkshop,
    alt: "Students painting collaborative campus mural in art workshop",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: clubMusic,
    alt: "Student performing live music on guitar",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: eventInauguration,
    alt: "Inauguration ceremony in the university auditorium",
    aspectClass: "aspect-[16/11]",
  },
];
