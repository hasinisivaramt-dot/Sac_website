import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCampus } from "@/hooks/useCampus";
import { LandingPage } from "@/pages/LandingPage";

export const Route = createFileRoute("/aziz-nagar")({
  head: () => ({
    meta: [
      { title: "Aziz Nagar Main Campus | Student Activity Center (SAC) — KLH" },
      {
        name: "description",
        content:
          "Official Student Activity Center portal for KLH Aziz Nagar flagship campus. Discover active clubs, festivals, visionaries, and announcements.",
      },
    ],
  }),
  component: AzizNagarPage,
});

function AzizNagarPage() {
  const { setCampus } = useCampus();

  useEffect(() => {
    setCampus("aziznagar");
  }, [setCampus]);

  return <LandingPage />;
}
