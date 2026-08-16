import type { AnnouncementItem } from "./aziznagarAnnouncements";

export interface GbsAnnouncementItem extends Omit<AnnouncementItem, "campusId"> {
  campusId: "campus03";
}

export const gbsAnnouncements: GbsAnnouncementItem[] = [
  {
    id: "gbs-ann-1",
    campusId: "campus03",
    title: "Executive Conclave 2025 Delegate Passes",
    date: "June 25, 2025",
    category: "General",
    content: "Special delegate passes available for MBA and BBA students for the National CXO Leadership Conclave.",
    isImportant: true,
  },
  {
    id: "gbs-ann-2",
    campusId: "campus03",
    title: "Call for Startup Pitch Decks — Angel Cohort 4",
    date: "July 05, 2025",
    category: "Club Registration",
    content: "E-Cell is accepting 5-minute pitch decks from student founders for seed capital evaluation.",
    isImportant: false,
  },
];
