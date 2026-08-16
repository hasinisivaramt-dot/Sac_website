export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  frequency: string;
  participants: string;
  description: string;
  badge: string;
}

export const aziznagarActivities: ActivityItem[] = [
  {
    id: "az-workshops",
    title: "Weekend Masterclasses & Skill Labs",
    category: "Technical & Creative",
    frequency: "Every Saturday",
    participants: "150+ Students",
    description: "Hands-on masterclasses in drone videography, digital art, classical vocals, and creative writing led by industry pros.",
    badge: "Skill Development",
  },
  {
    id: "az-openmic",
    title: "SAC Amphitheatre Acoustic Nights",
    category: "Cultural",
    frequency: "Bi-Weekly",
    participants: "300+ Students",
    description: "Under-the-stars open mic sessions featuring poetry, unplugged acoustic bands, standup comedy, and theatre monologues.",
    badge: "Student Life",
  },
  {
    id: "az-sports",
    title: "Inter-Department Athletic League",
    category: "Sports & Fitness",
    frequency: "Annual Tournament",
    participants: "800+ Athletes",
    description: "Multi-sport championships spanning football, basketball, badminton, cricket, and chess with collegiate trophies.",
    badge: "Sports League",
  },
  {
    id: "az-community",
    title: "NSS & Social Outreach Drives",
    category: "Social Impact",
    frequency: "Monthly",
    participants: "200+ Volunteers",
    description: "Tree plantation campaigns, rural digital literacy workshops, and blood donation camps in neighboring communities.",
    badge: "Community",
  },
];

export const bachupallyActivities: ActivityItem[] = [
  {
    id: "bp-devsprint",
    title: "Weekly Code & Coffee Sprints",
    category: "Tech & Coding",
    frequency: "Every Wednesday",
    participants: "180+ Developers",
    description: "Rapid prototyping, algorithmic problem solving on LeetCode/Codeforces, and open-source GitHub pull request drives.",
    badge: "Coding Sprint",
  },
  {
    id: "bp-botcombat",
    title: "RoboWars & Drone Obstacle Arena",
    category: "Robotics",
    frequency: "Monthly",
    participants: "120+ Builders",
    description: "Combat robotics tournaments, autonomous line followers, and FPV drone navigation obstacle courses.",
    badge: "Robotics Arena",
  },
  {
    id: "bp-gaming",
    title: "Esports & Game Design Jam",
    category: "Media & Gaming",
    frequency: "Quarterly",
    participants: "250+ Gamers",
    description: "Inter-collegiate esports championships in Valorant/BGMI alongside 48-hour Unity/Unreal indie game design jams.",
    badge: "Esports & Gaming",
  },
  {
    id: "bp-tedx",
    title: "Youth Tech Talk Series",
    category: "Literary & Leadership",
    frequency: "Monthly",
    participants: "200+ Attendees",
    description: "Invited alumni and Silicon Valley tech leaders discussing emerging AI frontiers, startup journeys, and career roadmaps.",
    badge: "Keynote Series",
  },
];

export const gbsActivities: ActivityItem[] = [
  {
    id: "gbs-boardroom",
    title: "Boardroom Simulation Battles",
    category: "Management",
    frequency: "Bi-Weekly",
    participants: "100+ MBAs",
    description: "Crisis management simulations, hostile takeover scenarios, and press conference defenses judged by faculty and alumni.",
    badge: "Executive Prep",
  },
  {
    id: "gbs-stocksim",
    title: "Virtual Trading Floor Sprints",
    category: "Finance",
    frequency: "Daily / Weekly",
    participants: "150+ Traders",
    description: "Algorithmic trading battles using real-time market data to craft winning long/short strategies.",
    badge: "Market Analytics",
  },
  {
    id: "gbs-adbrand",
    title: "Ad Mad & Viral Campaign Blitz",
    category: "Marketing",
    frequency: "Monthly",
    participants: "120+ Marketers",
    description: "Creating full 360-degree digital ad campaigns, jingles, and guerrilla marketing stunts in under 3 hours.",
    badge: "Creative Strategy",
  },
  {
    id: "gbs-industry",
    title: "Corporate Immersion & CXO Roundtables",
    category: "Networking",
    frequency: "Monthly",
    participants: "80+ Delegates",
    description: "Exclusive roundtables with Fortune 500 executives, HR leaders, and venture partners at HITEC City.",
    badge: "Corporate Connect",
  },
];

export const activitiesByCampus: Record<"aziznagar" | "bachupally" | "gbs", ActivityItem[]> = {
  aziznagar: aziznagarActivities,
  bachupally: bachupallyActivities,
  gbs: gbsActivities,
};
