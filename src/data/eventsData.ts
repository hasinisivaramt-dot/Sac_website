export interface EventItem {
  id: string;
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
    day: "25",
    month: "MAY",
    year: "2025",
    title: "SAC Mega Inauguration 2025",
    category: "Ceremony",
    location: "Main University Auditorium, Aziznagar",
    image: "/pictures/aziznagar/hero/hero-3.jpg",
    time: "10:00 AM - 04:30 PM",
    description: "Grand ceremonial kickoff featuring 14 club performances, national dignitary keynotes, and lamp lighting.",
    registrationOpen: false,
  },
  {
    id: "az-rang",
    day: "10",
    month: "JUN",
    year: "2025",
    title: "Cultural Extravaganza — RANG 2025",
    category: "Festival",
    location: "Main Open Grounds, Aziznagar",
    image: "/pictures/aziznagar/hero/hero-2.jpg",
    time: "05:00 PM - 10:30 PM",
    description: "3 days of high-energy music, dance battles, street food carnivals, and star celebrity concert.",
    registrationOpen: true,
  },
  {
    id: "az-talent",
    day: "18",
    month: "JUL",
    year: "2025",
    title: "Freshers' Talent Odyssey",
    category: "Showcase",
    location: "Open Air Amphitheatre",
    image: "/pictures/aziznagar/hero/hero-1.jpg",
    time: "03:00 PM - 08:00 PM",
    description: "Platform for newly admitted students to showcase unique talents in arts, music, dance, and poetry.",
    registrationOpen: true,
  },
];

export const bachupallyEvents: EventItem[] = [
  {
    id: "bp-hack",
    day: "12",
    month: "JUN",
    year: "2025",
    title: "HackKLH — 36-Hour National Hackathon",
    category: "Hackathon",
    location: "Tech Innovation Hub, Bachupally",
    image: "/pictures/bachupally/hero/hero-1.jpg",
    time: "36 Hours Non-Stop",
    description: "Top engineering teams solve enterprise AI, Web3, and IoT problem statements with ₹5 Lakh prize pool.",
    registrationOpen: true,
  },
  {
    id: "bp-techfest",
    day: "28",
    month: "JUL",
    year: "2025",
    title: "Innovista — Annual Tech Summit & Expo",
    category: "Showcase",
    location: "Main Auditorium, Bachupally",
    image: "/pictures/bachupally/hero/hero-2.jpg",
    time: "09:30 AM - 05:30 PM",
    description: "Robotics combats, drone racing arenas, gaming tournaments, and technical paper presentations.",
    registrationOpen: true,
  },
  {
    id: "bp-pulse",
    day: "15",
    month: "AUG",
    year: "2025",
    title: "Pulse Electronic Sound & DJ Night",
    category: "Festival",
    location: "Central Courtyard, Bachupally",
    image: "/pictures/bachupally/hero/hero-3.jpg",
    time: "06:00 PM - 10:00 PM",
    description: "Live electronic music production, student DJs, laser projections, and audiovisual art installations.",
    registrationOpen: false,
  },
];

export const gbsEvents: EventItem[] = [
  {
    id: "gbs-conclave",
    day: "08",
    month: "JUL",
    year: "2025",
    title: "National Leadership & CXO Conclave",
    category: "Conclave",
    location: "GBS Executive Convention Center",
    image: "/pictures/gbs/hero/hero-1.jpg",
    time: "10:00 AM - 05:00 PM",
    description: "Industry titans, venture capitalists, and corporate leaders deliberate on the global economic outlook.",
    registrationOpen: true,
  },
  {
    id: "gbs-pitch",
    day: "22",
    month: "AUG",
    year: "2025",
    title: "VentureSphere — Angel Investor Pitch",
    category: "Competition",
    location: "Innovation Gallery, GBS Hyderabad",
    image: "/pictures/gbs/hero/hero-2.jpg",
    time: "11:00 AM - 04:00 PM",
    description: "Student startup founders pitch business models directly to angel syndicates for seed funding.",
    registrationOpen: true,
  },
  {
    id: "gbs-stock",
    day: "14",
    month: "SEP",
    year: "2025",
    title: "Bull & Bear Inter-Collegiate Trading Arena",
    category: "Competition",
    location: "Finance Bloomberg Lab, GBS",
    image: "/pictures/gbs/hero/hero-3.jpg",
    time: "09:00 AM - 03:30 PM",
    description: "Real-time stock market simulation testing portfolio diversification, risk hedging, and speed trading.",
    registrationOpen: true,
  },
];

export const eventsByCampus: Record<"aziznagar" | "bachupally" | "gbs", EventItem[]> = {
  aziznagar: aziznagarEvents,
  bachupally: bachupallyEvents,
  gbs: gbsEvents,
};
