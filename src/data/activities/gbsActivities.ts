import type { ActivityItem } from "./aziznagarActivities";

export interface GbsActivityItem extends Omit<ActivityItem, "campusId"> {
  campusId: "campus03";
}

export const gbsActivities: GbsActivityItem[] = [
  {
    id: "gbs-boardroom",
    campusId: "campus03",
    title: "Boardroom Simulation Battles",
    category: "Management",
    frequency: "Bi-Weekly",
    participants: "100+ MBAs",
    description: "Crisis management simulations, hostile takeover scenarios, and press conference defenses judged by faculty and alumni.",
    badge: "Executive Prep",
  },
  {
    id: "gbs-stocksim",
    campusId: "campus03",
    title: "Virtual Trading Floor Sprints",
    category: "Finance",
    frequency: "Daily / Weekly",
    participants: "150+ Traders",
    description: "Algorithmic trading battles using real-time market data to craft winning long/short strategies.",
    badge: "Market Analytics",
  },
  {
    id: "gbs-adbrand",
    campusId: "campus03",
    title: "Ad Mad & Viral Campaign Blitz",
    category: "Marketing",
    frequency: "Monthly",
    participants: "120+ Marketers",
    description: "Creating full 360-degree digital ad campaigns, jingles, and guerrilla marketing stunts in under 3 hours.",
    badge: "Creative Strategy",
  },
  {
    id: "gbs-industry",
    campusId: "campus03",
    title: "Corporate Immersion & CXO Roundtables",
    category: "Networking",
    frequency: "Monthly",
    participants: "80+ Delegates",
    description: "Exclusive roundtables with Fortune 500 executives, HR leaders, and venture partners at HITEC City.",
    badge: "Corporate Connect",
  },
];
