import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { campuses, campusList, DEFAULT_CAMPUS_ID, type CampusInfo } from "@/data/campusData";
import { clubsByCampus, type ClubItem } from "@/data/clubsData";
import { eventsByCampus, type EventItem } from "@/data/eventsData";
import { activitiesByCampus, type ActivityItem } from "@/data/activitiesData";
import { galleryByCampus, type GalleryItem } from "@/data/galleryData";
import { principalData, type PrincipalInfo } from "@/data/principalData";

export type CampusId = "aziznagar" | "bachupally" | "gbs";

interface CampusContextType {
  campusId: CampusId;
  campus: CampusInfo;
  setCampus: (id: CampusId) => void;
  clubs: ClubItem[];
  events: EventItem[];
  activities: ActivityItem[];
  gallery: GalleryItem[];
  principal: PrincipalInfo;
  allCampuses: CampusInfo[];
  getCampusUrl: (path?: string) => string;
  isCampusModalOpen: boolean;
  openCampusModal: () => void;
  closeCampusModal: () => void;
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

export function CampusProvider({
  children,
  initialCampusId,
}: {
  children: ReactNode;
  initialCampusId?: CampusId;
}) {
  const [campusId, setCampusIdState] = useState<CampusId>(() => {
    if (initialCampusId && campuses[initialCampusId]) {
      return initialCampusId;
    }
    if (typeof window !== "undefined") {
      // Check pathname first
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const firstPart = pathParts[0]?.toLowerCase();
      if (firstPart && (firstPart === "aziznagar" || firstPart === "bachupally" || firstPart === "gbs")) {
        return firstPart as CampusId;
      }
      // Check localStorage
      const saved = localStorage.getItem("klu_sac_selected_campus");
      if (saved && (saved === "aziznagar" || saved === "bachupally" || saved === "gbs")) {
        return saved as CampusId;
      }
    }
    return DEFAULT_CAMPUS_ID;
  });

  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);

  // Sync with URL pathname changes
  useEffect(() => {
    const handleLocationChange = () => {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const firstPart = pathParts[0]?.toLowerCase();
      if (firstPart && (firstPart === "aziznagar" || firstPart === "bachupally" || firstPart === "gbs")) {
        if (firstPart !== campusId) {
          setCampusIdState(firstPart as CampusId);
        }
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [campusId]);

  const setCampus = (id: CampusId) => {
    if (!campuses[id]) return;
    setCampusIdState(id);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("klu_sac_selected_campus", id);
      } catch {
        // ignore
      }
    }
  };

  const openCampusModal = () => setIsCampusModalOpen(true);
  const closeCampusModal = () => setIsCampusModalOpen(false);

  const validCampusId: CampusId =
    campusId === "aziznagar" || campusId === "bachupally" || campusId === "gbs"
      ? campusId
      : DEFAULT_CAMPUS_ID;

  const campus = campuses[validCampusId];
  const clubs = clubsByCampus[validCampusId] || clubsByCampus[DEFAULT_CAMPUS_ID] || [];
  const events = eventsByCampus[validCampusId] || eventsByCampus[DEFAULT_CAMPUS_ID] || [];
  const activities = activitiesByCampus[validCampusId] || activitiesByCampus[DEFAULT_CAMPUS_ID] || [];
  const gallery = galleryByCampus[validCampusId] || galleryByCampus[DEFAULT_CAMPUS_ID] || [];
  const principal = principalData[validCampusId] || principalData[DEFAULT_CAMPUS_ID];

  const getCampusUrl = (path: string = "") => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (cleanPath === "/" || cleanPath === "") {
      return `/${campusId}`;
    }
    return `/${campusId}${cleanPath}`;
  };

  const value = useMemo(
    () => ({
      campusId,
      campus,
      setCampus,
      clubs,
      events,
      activities,
      gallery,
      principal,
      allCampuses: campusList,
      getCampusUrl,
      isCampusModalOpen,
      openCampusModal,
      closeCampusModal,
    }),
    [campusId, campus, clubs, events, activities, gallery, principal, isCampusModalOpen]
  );

  return <CampusContext.Provider value={value}>{children}</CampusContext.Provider>;
}

export function useCampus() {
  const context = useContext(CampusContext);
  if (!context) {
    throw new Error("useCampus must be used within a CampusProvider");
  }
  return context;
}
