export interface EventItem {
  id: string;
  campusId: "campus01";
  day: string;
  month: string;
  year: string;
  title: string;
  category: "Ceremony" | "Festival" | "Showcase" | "Hackathon" | "Conclave" | "Competition";
  location: string;
  image: string;
  time: string;
  description: string;
  registrationOpen: boolean;
}

export const aziznagarEvents: EventItem[] = [
  {
    id: "az-inauguration",
    campusId: "campus01",
    day: "25",
    month: "MAY",
    year: "2025",
    title: "SAC Mega Inauguration 2025",
    category: "Ceremony",
    location: "Main University Auditorium, Aziz Nagar",
    image: "/pictures/aziznagar/events/event-1.jpg",
    time: "10:00 AM - 04:30 PM",
    description: "Grand ceremonial kickoff featuring club performances, national dignitary keynotes, and lamp lighting.",
    registrationOpen: false,
  },
  {
    id: "az-rang",
    campusId: "campus01",
    day: "10",
    month: "JUN",
    year: "2025",
    title: "Cultural Extravaganza — RANG 2025",
    category: "Festival",
    location: "Main Open Grounds, Aziz Nagar",
    image: "/pictures/aziznagar/events/event-2.jpg",
    time: "05:00 PM - 10:30 PM",
    description: "3 days of high-energy music, dance battles, street food carnivals, and star celebrity concert.",
    registrationOpen: true,
  },
  {
    id: "az-talent",
    campusId: "campus01",
    day: "18",
    month: "JUL",
    year: "2025",
    title: "Freshers' Talent Odyssey",
    category: "Showcase",
    location: "Open Air Amphitheatre",
    image: "/pictures/aziznagar/events/event-3.jpg",
    time: "03:00 PM - 08:00 PM",
    description: "Platform for newly admitted students to showcase unique talents in arts, music, dance, and poetry.",
    registrationOpen: true,
  },
];
