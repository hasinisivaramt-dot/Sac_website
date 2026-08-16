import type { EventItem } from "./aziznagarEvents";

export interface BachupallyEventItem extends Omit<EventItem, "campusId"> {
  campusId: "campus02";
}

export const bachupallyEvents: BachupallyEventItem[] = [
  {
    id: "bp-hack",
    campusId: "campus02",
    day: "12",
    month: "JUN",
    year: "2025",
    title: "HackKLH — 36-Hour National Hackathon",
    category: "Hackathon",
    location: "Tech Innovation Hub, Bachupally",
    image: "/pictures/bachupally/events/event-1.jpg",
    time: "36 Hours Non-Stop",
    description: "Top engineering teams solve enterprise AI, Web3, and IoT problem statements with ₹5 Lakh prize pool.",
    registrationOpen: true,
  },
  {
    id: "bp-techfest",
    campusId: "campus02",
    day: "28",
    month: "JUL",
    year: "2025",
    title: "Innovista — Annual Tech Summit & Expo",
    category: "Showcase",
    location: "Main Auditorium, Bachupally",
    image: "/pictures/bachupally/events/event-2.jpg",
    time: "09:30 AM - 05:30 PM",
    description: "Robotics combats, drone racing arenas, gaming tournaments, and technical paper presentations.",
    registrationOpen: true,
  },
  {
    id: "bp-pulse",
    campusId: "campus02",
    day: "15",
    month: "AUG",
    year: "2025",
    title: "Pulse Electronic Sound & DJ Night",
    category: "Festival",
    location: "Central Courtyard, Bachupally",
    image: "/pictures/bachupally/events/event-3.jpg",
    time: "06:00 PM - 10:00 PM",
    description: "Live electronic music production, student DJs, laser projections, and audiovisual art installations.",
    registrationOpen: false,
  },
];
