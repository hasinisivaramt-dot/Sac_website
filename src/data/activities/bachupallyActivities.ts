import type { ActivityItem } from "./aziznagarActivities";

export interface BachupallyActivityItem extends Omit<ActivityItem, "campusId"> {
  campusId: "campus02";
}

export const bachupallyActivities: BachupallyActivityItem[] = [
  {
    id: "bp-devsprint",
    campusId: "campus02",
    title: "Weekly Code & Coffee Sprints",
    category: "Tech & Coding",
    frequency: "Every Wednesday",
    participants: "180+ Developers",
    description: "Rapid prototyping, algorithmic problem solving on LeetCode/Codeforces, and open-source GitHub pull request drives.",
    badge: "Coding Sprint",
  },
  {
    id: "bp-botcombat",
    campusId: "campus02",
    title: "RoboWars & Drone Obstacle Arena",
    category: "Robotics",
    frequency: "Monthly",
    participants: "120+ Builders",
    description: "Combat robotics tournaments, autonomous line followers, and FPV drone navigation obstacle courses.",
    badge: "Robotics Arena",
  },
  {
    id: "bp-gaming",
    campusId: "campus02",
    title: "Esports & Game Design Jam",
    category: "Media & Gaming",
    frequency: "Quarterly",
    participants: "250+ Gamers",
    description: "Inter-collegiate esports championships in Valorant/BGMI alongside 48-hour Unity/Unreal indie game design jams.",
    badge: "Esports & Gaming",
  },
  {
    id: "bp-tedx",
    campusId: "campus02",
    title: "Youth Tech Talk Series",
    category: "Literary & Leadership",
    frequency: "Monthly",
    participants: "200+ Attendees",
    description: "Invited alumni and Silicon Valley tech leaders discussing emerging AI frontiers, startup journeys, and career roadmaps.",
    badge: "Keynote Series",
  },
];
