import type { GalleryItem } from "./aziznagarGallery";

export interface GbsGalleryItem extends Omit<GalleryItem, "campusId"> {
  campusId: "campus03";
}

export const gbsGallery: GbsGalleryItem[] = [
  {
    id: "gbs-g-1",
    campusId: "campus03",
    title: "CXO Executive Leadership Conclave",
    category: "Events",
    image: "/pictures/gbs/gallery/gallery-1.jpg",
    date: "July 2025",
    description: "Panel discussion with top corporate executives on AI in enterprise management.",
  },
  {
    id: "gbs-g-2",
    campusId: "campus03",
    title: "Angel Investor Pitch Day",
    category: "Clubs",
    image: "/pictures/gbs/gallery/gallery-2.jpg",
    date: "August 2025",
    description: "Student founders pitching fintech & e-commerce startups to venture partners.",
  },
  {
    id: "gbs-g-3",
    campusId: "campus03",
    title: "Inter-Collegiate Stock Trading Floor",
    category: "Workshops",
    image: "/pictures/gbs/gallery/gallery-3.jpg",
    date: "September 2025",
    description: "Live market analytics and real-time trading battles in the Bloomberg finance terminal lab.",
  },
];
