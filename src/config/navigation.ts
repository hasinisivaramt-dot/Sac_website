export interface NavItem {
  name: string;
  href: string; // relative or section id
  badge?: string;
}

export function getCampusNavItems(campusId: string): NavItem[] {
  return [
    { name: "Home", href: `/${campusId}` },
    { name: "About", href: `/${campusId}/about` },
    { name: "Leadership", href: `/${campusId}/principal` },
    { name: "Clubs", href: `/${campusId}/clubs` },
    { name: "Events", href: `/${campusId}/events` },
    { name: "Gallery", href: `/${campusId}/gallery` },
    { name: "Announcements", href: `/${campusId}/announcements` },
  ];
}

export function getSectionScrollLinks(campusId: string): NavItem[] {
  return [
    { name: "About", href: "#about" },
    { name: "Principal", href: "#principal" },
    { name: "Clubs", href: "#clubs" },
    { name: "Events", href: "#events" },
    { name: "Visionaries", href: "#visionaries" },
    { name: "Gallery", href: "#gallery" },
    { name: "Announcements", href: "#announcements" },
  ];
}
