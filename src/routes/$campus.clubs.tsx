import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { LandingPage } from "@/pages/LandingPage";

export const Route = createFileRoute("/$campus/clubs")({
  component: ClubsPageRoute,
});

function ClubsPageRoute() {
  const { campus: campusParam } = Route.useParams();
  const { setCampus } = useCampus();

  useEffect(() => {
    if (campusParam && (campusParam === "aziznagar" || campusParam === "bachupally" || campusParam === "gbs")) {
      setCampus(campusParam as CampusId);
    }
    setTimeout(() => {
      const el = document.getElementById("clubs");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [campusParam, setCampus]);

  return <LandingPage />;
}
