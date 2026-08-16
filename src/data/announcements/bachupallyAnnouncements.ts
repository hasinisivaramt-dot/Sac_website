import type { AnnouncementItem } from "./aziznagarAnnouncements";

export interface BachupallyAnnouncementItem extends Omit<AnnouncementItem, "campusId"> {
  campusId: "campus02";
}

export const bachupallyAnnouncements: BachupallyAnnouncementItem[] = [
  {
    id: "bp-ann-1",
    campusId: "campus02",
    title: "HackKLH 2025 Problem Statements Released",
    date: "June 01, 2025",
    category: "General",
    content: "Team registrations have closed. Shortlisted teams can now view the problem statements under AI, Web3, and Robotics tracks.",
    isImportant: true,
  },
  {
    id: "bp-ann-2",
    campusId: "campus02",
    title: "RoboWars Arena Trials & Safety Inspection",
    date: "June 10, 2025",
    category: "General",
    content: "All battle bot chassis must pass pneumatic and weight checks at the Bachupally Robotics Lab before June 15.",
    isImportant: false,
  },
];
