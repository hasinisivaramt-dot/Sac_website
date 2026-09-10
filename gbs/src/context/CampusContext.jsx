import React, { createContext, useContext, useMemo } from "react";
import { campusData as campus } from "@/campus/data";
import { config } from "@/campus/config";

const CampusContext = createContext(undefined);

export function CampusProvider({ children }) {
  const value = useMemo(
    () => ({
      campus,
      campusId: config.id,
      clubs: campus.clubs,
      events: campus.events,
      gallery: campus.gallery,
      visionaries: campus.visionaries,
      competitions: campus.competitions,
      achievements: campus.achievements,
      statistics: campus.statistics,
      impactStats: campus.impactStats,
      contact: campus.contact,
    }),
    [],
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
