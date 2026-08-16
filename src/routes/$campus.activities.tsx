import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { LandingPage } from "@/pages/LandingPage";

export const Route = createFileRoute("/$campus/activities")({
  component: ActivitiesPageRoute,
});

function ActivitiesPageRoute() {
  const { campus: campusParam } = Route.useParams();
  const { setCampus } = useCampus();

  useEffect(() => {
    if (campusParam && (campusParam === "aziznagar" || campusParam === "bachupally" || campusParam === "gbs")) {
      setCampus(campusParam as CampusId);
    }
    setTimeout(() => {
      const el = document.getElementById("activities");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [campusParam, setCampus]);

  return <LandingPage />;
}
