import type { EventItem } from "./aziznagarEvents";

export interface GbsEventItem extends Omit<EventItem, "campusId"> {
  campusId: "campus03";
}

export const gbsEvents: GbsEventItem[] = [
  {
    id: "gbs-conclave",
    campusId: "campus03",
    day: "08",
    month: "JUL",
    year: "2025",
    title: "National Leadership & CXO Conclave",
    category: "Conclave",
    location: "GBS Executive Convention Center",
    image: "/pictures/gbs/events/event-1.jpg",
    time: "10:00 AM - 05:00 PM",
    description: "Industry titans, venture capitalists, and corporate leaders deliberate on the global economic outlook.",
    registrationOpen: true,
  },
  {
    id: "gbs-pitch",
    campusId: "campus03",
    day: "22",
    month: "AUG",
    year: "2025",
    title: "VentureSphere — Angel Investor Pitch",
    category: "Competition",
    location: "Innovation Gallery, GBS Hyderabad",
    image: "/pictures/gbs/events/event-2.jpg",
    time: "11:00 AM - 04:00 PM",
    description: "Student startup founders pitch business models directly to angel syndicates for seed funding.",
    registrationOpen: true,
  },
  {
    id: "gbs-stock",
    campusId: "campus03",
    day: "14",
    month: "SEP",
    year: "2025",
    title: "Bull & Bear Inter-Collegiate Trading Arena",
    category: "Competition",
    location: "Finance Bloomberg Lab, GBS",
    image: "/pictures/gbs/events/event-3.jpg",
    time: "09:00 AM - 03:30 PM",
    description: "Real-time stock market simulation testing portfolio diversification, risk hedging, and speed trading.",
    registrationOpen: true,
  },
];
