export interface GalleryItem {
  id: string;
  title: string;
  category: "Events" | "Clubs" | "Workshops" | "Celebrations" | "Campus Life";
  image: string;
  date: string;
  description: string;
}

export const aziznagarGallery: GalleryItem[] = [
  {
    id: "az-g-1",
    title: "Annual Cultural Fest — RANG",
    category: "Events",
    image: "/pictures/aziznagar/hero/hero-2.jpg",
    date: "June 2025",
    description: "Thousands of students cheering at the main arena during celebrity musical night.",
  },
  {
    id: "az-g-2",
    title: "SAC Mega Inauguration Ceremony",
    category: "Celebrations",
    image: "/pictures/aziznagar/hero/hero-3.jpg",
    date: "May 2025",
    description: "Dignitaries and student council leaders inaugurating the central student activity center.",
  },
  {
    id: "az-g-3",
    title: "Campus Photography Photowalk",
    category: "Clubs",
    image: "/pictures/gbs/hero/hero-3.jpg",
    date: "July 2025",
    description: "Student photographers framing architecture and sunset silhouettes across Aziznagar.",
  },
  {
    id: "az-g-4",
    title: "Classical & Fusion Dance Showcase",
    category: "Events",
    image: "/pictures/bachupally/hero/hero-3.jpg",
    date: "August 2025",
    description: "Electrifying dance club performance on the main auditorium stage.",
  },
  {
    id: "az-g-5",
    title: "Fine Arts Canvas Workshop",
    category: "Workshops",
    image: "/pictures/gbs/hero/hero-1.jpg",
    date: "September 2025",
    description: "Collaborative painting session producing large-scale environmental murals.",
  },
  {
    id: "az-g-6",
    title: "Open Air Unplugged Jamming Session",
    category: "Campus Life",
    image: "/pictures/gbs/hero/hero-2.jpg",
    date: "October 2025",
    description: "Student music bands performing acoustic covers under the campus amphitheatre lights.",
  },
];

export const bachupallyGallery: GalleryItem[] = [
  {
    id: "bp-g-1",
    title: "HackKLH 36-Hour Hackathon Floor",
    category: "Events",
    image: "/pictures/bachupally/hero/hero-1.jpg",
    date: "June 2025",
    description: "Developer teams collaborating into the late night on next-gen AI applications.",
  },
  {
    id: "bp-g-2",
    title: "Innovista Tech Summit & Bot Combat",
    category: "Workshops",
    image: "/pictures/bachupally/hero/hero-2.jpg",
    date: "July 2025",
    description: "Custom-engineered combat robots clashing in the arena before a packed audience.",
  },
  {
    id: "bp-g-3",
    title: "Pulse Electronic Night Live",
    category: "Celebrations",
    image: "/pictures/bachupally/hero/hero-3.jpg",
    date: "August 2025",
    description: "Laser show and electronic music production by campus DJ society.",
  },
  {
    id: "bp-g-4",
    title: "Robotics Drone Racing League",
    category: "Clubs",
    image: "/pictures/aziznagar/hero/hero-1.jpg",
    date: "September 2025",
    description: "High-speed FPV drones zooming through custom neon obstacles.",
  },
];

export const gbsGallery: GalleryItem[] = [
  {
    id: "gbs-g-1",
    title: "CXO Executive Leadership Conclave",
    category: "Events",
    image: "/pictures/gbs/hero/hero-1.jpg",
    date: "July 2025",
    description: "Panel discussion with top corporate executives on AI in enterprise management.",
  },
  {
    id: "gbs-g-2",
    title: "Angel Investor Pitch Day",
    category: "Clubs",
    image: "/pictures/gbs/hero/hero-2.jpg",
    date: "August 2025",
    description: "Student founders pitching fintech & e-commerce startups to venture partners.",
  },
  {
    id: "gbs-g-3",
    title: "Inter-Collegiate Stock Trading Floor",
    category: "Workshops",
    image: "/pictures/gbs/hero/hero-3.jpg",
    date: "September 2025",
    description: "Live market analytics and real-time trading battles in the Bloomberg finance terminal lab.",
  },
];

export const galleryByCampus: Record<"aziznagar" | "bachupally" | "gbs", GalleryItem[]> = {
  aziznagar: aziznagarGallery,
  bachupally: bachupallyGallery,
  gbs: gbsGallery,
};
