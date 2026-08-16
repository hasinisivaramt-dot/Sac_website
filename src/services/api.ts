import { campuses, allCampusesList, DEFAULT_CAMPUS } from "@/data/campuses";
import type { CampusData, CampusId, EventItem, ClubItem, ActivityItem, GalleryItem } from "@/types";

const API_BASE_URL = typeof window !== "undefined" ? "" : "http://localhost:5000";

/**
 * Service for accessing campus data synchronously from frontend registry
 * or asynchronously via backend API.
 */
export const campusService = {
  // Synchronous local getters
  getCampus(id: CampusId | string = DEFAULT_CAMPUS): CampusData {
    const normalized = (id.toLowerCase() === "aziznagar" ? "aziz-nagar" : id) as CampusId;
    return campuses[normalized] || campuses[DEFAULT_CAMPUS];
  },

  getAllCampuses(): CampusData[] {
    return allCampusesList;
  },

  getClubs(id: CampusId | string = DEFAULT_CAMPUS): ClubItem[] {
    return this.getCampus(id).clubs || [];
  },

  getEvents(id: CampusId | string = DEFAULT_CAMPUS): EventItem[] {
    return this.getCampus(id).events || [];
  },

  getActivities(id: CampusId | string = DEFAULT_CAMPUS): ActivityItem[] {
    return this.getCampus(id).activities || [];
  },

  getGallery(id: CampusId | string = DEFAULT_CAMPUS): GalleryItem[] {
    return this.getCampus(id).gallery || [];
  },

  // Asynchronous API fetchers (for Express backend / SSR queries)
  async fetchCampuses(): Promise<any[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/campuses`);
      if (!res.ok) throw new Error("Failed to fetch campuses");
      const json = await res.json();
      return json.data || json;
    } catch {
      return allCampusesList;
    }
  },

  async fetchEvents(campusId?: string): Promise<EventItem[]> {
    try {
      const url = campusId ? `${API_BASE_URL}/api/events?campus=${campusId}` : `${API_BASE_URL}/api/events`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch events");
      const json = await res.json();
      return json.data || json;
    } catch {
      return this.getEvents(campusId || DEFAULT_CAMPUS);
    }
  },

  async fetchClubs(campusId?: string): Promise<ClubItem[]> {
    try {
      const url = campusId ? `${API_BASE_URL}/api/clubs?campus=${campusId}` : `${API_BASE_URL}/api/clubs`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch clubs");
      const json = await res.json();
      return json.data || json;
    } catch {
      return this.getClubs(campusId || DEFAULT_CAMPUS);
    }
  },
};

export default campusService;
