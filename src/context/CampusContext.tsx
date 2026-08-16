import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import {
  campuses,
  campusList,
  DEFAULT_CAMPUS,
  type CampusData,
  type CampusId,
} from "@/data/campusConfig";

export type { CampusData, CampusId };

interface CampusContextType {
  campus: CampusData;
  selectedCampus: CampusId;
  setSelectedCampus: (id: CampusId | string) => void;
  // Aliases for seamless compatibility across components
  campusId: CampusId;
  setCampus: (id: CampusId | string) => void;
  allCampuses: typeof campusList;
  clubs: CampusData["clubs"];
  events: CampusData["events"];
  gallery: CampusData["gallery"];
  visionaries: CampusData["visionaries"];
  competitions: CampusData["competitions"];
  achievements: CampusData["achievements"];
  statistics: CampusData["statistics"];
  impactStats: CampusData["impactStats"];
  contact: CampusData["contact"];
  isCampusModalOpen: boolean;
  openCampusModal: () => void;
  closeCampusModal: () => void;
  getCampusUrl: (path?: string) => string;
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

function normalizeCampusId(id?: string | null): CampusId {
  if (!id) return DEFAULT_CAMPUS;
  const clean = id.toLowerCase().trim();
  if (clean === "aziznagar" || clean === "aziz-nagar") return "aziz-nagar";
  if (clean === "bachupally") return "bachupally";
  if (clean === "gbs") return "gbs";
  return DEFAULT_CAMPUS;
}

export function CampusProvider({
  children,
  initialCampusId,
}: {
  children: ReactNode;
  initialCampusId?: string;
}) {
  const [selectedCampus, setSelectedCampusState] = useState<CampusId>(() => {
    if (initialCampusId) {
      return normalizeCampusId(initialCampusId);
    }
    if (typeof window !== "undefined") {
      // Check pathname first
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const firstPart = pathParts[0]?.toLowerCase();
      if (
        firstPart === "aziz-nagar" ||
        firstPart === "aziznagar" ||
        firstPart === "bachupally" ||
        firstPart === "gbs"
      ) {
        return normalizeCampusId(firstPart);
      }
      // Check localStorage
      try {
        const saved = localStorage.getItem("klu_sac_selected_campus");
        if (saved) {
          return normalizeCampusId(saved);
        }
      } catch {
        // ignore localStorage restricted errors
      }
    }
    return DEFAULT_CAMPUS;
  });

  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);

  // Sync with browser navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const firstPart = pathParts[0]?.toLowerCase();
      if (
        firstPart === "aziz-nagar" ||
        firstPart === "aziznagar" ||
        firstPart === "bachupally" ||
        firstPart === "gbs"
      ) {
        const normalized = normalizeCampusId(firstPart);
        if (normalized !== selectedCampus) {
          setSelectedCampusState(normalized);
        }
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [selectedCampus]);

  const setSelectedCampus = (id: CampusId | string) => {
    const validId = normalizeCampusId(id);
    setSelectedCampusState(validId);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("klu_sac_selected_campus", validId);
      } catch {
        // ignore
      }
    }
  };

  const openCampusModal = () => setIsCampusModalOpen(true);
  const closeCampusModal = () => setIsCampusModalOpen(false);

  const campus: CampusData = campuses[selectedCampus] || campuses[DEFAULT_CAMPUS];

  const getCampusUrl = (path: string = "") => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (cleanPath === "/" || cleanPath === "") {
      return `/${selectedCampus}`;
    }
    return `/${selectedCampus}${cleanPath}`;
  };

  const value = useMemo(
    () => ({
      campus,
      selectedCampus,
      setSelectedCampus,
      campusId: selectedCampus,
      setCampus: setSelectedCampus,
      allCampuses: campusList,
      clubs: campus.clubs,
      events: campus.events,
      gallery: campus.gallery,
      visionaries: campus.visionaries,
      competitions: campus.competitions,
      achievements: campus.achievements,
      statistics: campus.statistics,
      impactStats: campus.impactStats,
      contact: campus.contact,
      isCampusModalOpen,
      openCampusModal,
      closeCampusModal,
      getCampusUrl,
    }),
    [selectedCampus, campus, isCampusModalOpen]
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
