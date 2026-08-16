import type { GalleryItem } from "./aziznagarGallery";

export interface BachupallyGalleryItem extends Omit<GalleryItem, "campusId"> {
  campusId: "campus02";
}

export const bachupallyGallery: BachupallyGalleryItem[] = [
  {
    id: "bp-g-1",
    campusId: "campus02",
    title: "HackKLH 36-Hour Hackathon Floor",
    category: "Events",
    image: "/pictures/bachupally/gallery/gallery-1.jpg",
    date: "June 2025",
    description: "Developer teams collaborating into the late night on next-gen AI applications.",
  },
  {
    id: "bp-g-2",
    campusId: "campus02",
    title: "Innovista Tech Summit & Bot Combat",
    category: "Workshops",
    image: "/pictures/bachupally/gallery/gallery-2.jpg",
    date: "July 2025",
    description: "Custom-engineered combat robots clashing in the arena before a packed audience.",
  },
  {
    id: "bp-g-3",
    campusId: "campus02",
    title: "Pulse Electronic Night Live",
    category: "Celebrations",
    image: "/pictures/bachupally/gallery/gallery-3.jpg",
    date: "August 2025",
    description: "Laser show and electronic music production by campus DJ society.",
  },
  {
    id: "bp-g-4",
    campusId: "campus02",
    title: "Robotics Drone Racing League",
    category: "Clubs",
    image: "/pictures/bachupally/gallery/gallery-4.jpg",
    date: "September 2025",
    description: "High-speed FPV drones zooming through custom neon obstacles.",
  },
];
