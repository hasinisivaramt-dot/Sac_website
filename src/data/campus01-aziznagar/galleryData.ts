export interface CampusGalleryItem {
  id: string;
  campusId: "campus01";
  title: string;
  category: "Events" | "Clubs" | "Celebrations" | "Campus Life";
  image: string;
  date: string;
  description: string;
}

export const galleryData: CampusGalleryItem[] = [
  {
    id: "az-g-1",
    campusId: "campus01",
    title: "Annual Cultural Fest — RANG",
    category: "Events",
    image: "/pictures/campus01-aziznagar/gallery/gallery-1.jpg",
    date: "June 2025",
    description: "Thousands of students cheering at the main arena during celebrity musical night.",
  },
  {
    id: "az-g-2",
    campusId: "campus01",
    title: "SAC Mega Inauguration Ceremony",
    category: "Celebrations",
    image: "/pictures/campus01-aziznagar/gallery/gallery-2.jpg",
    date: "May 2025",
    description: "Dignitaries and student council leaders inaugurating the central student activity center.",
  },
  {
    id: "az-g-3",
    campusId: "campus01",
    title: "Campus Photography Photowalk",
    category: "Clubs",
    image: "/pictures/campus01-aziznagar/gallery/gallery-3.jpg",
    date: "July 2025",
    description: "Student photographers framing architecture and sunset silhouettes across Aziz Nagar.",
  },
  {
    id: "az-g-4",
    campusId: "campus01",
    title: "Classical & Fusion Dance Showcase",
    category: "Events",
    image: "/pictures/campus01-aziznagar/gallery/gallery-4.jpg",
    date: "August 2025",
    description: "Electrifying dance club performance on the main auditorium stage.",
  },
];
