import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCampus, type CampusId } from "@/hooks/useCampus";
import { LandingPage } from "@/pages/LandingPage";
import { campuses } from "@/data/campusData";

export const Route = createFileRoute("/$campus")({
  head: ({ params }) => {
    const normalized = params.campus === "aziz-nagar" ? "aziznagar" : params.campus;
    const cKey = (normalized in campuses ? normalized : "aziznagar") as keyof typeof campuses;
    const campusInfo = campuses[cKey];
    const title = `${campusInfo.name} — Student Activity Center | KLH`;
    const description = campusInfo.description;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CampusPageRoute,
});

function CampusPageRoute() {
  const { campus: campusParam } = Route.useParams();
  const { setCampus } = useCampus();

  useEffect(() => {
    if (campusParam) {
      setCampus(campusParam);
    }
  }, [campusParam, setCampus]);

  return <LandingPage />;
}
