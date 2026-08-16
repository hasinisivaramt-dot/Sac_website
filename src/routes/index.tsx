import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/pages/LandingPage";

const title = "KLH Student Activity Center | Aziznagar, Bachupally & GBS";
const description =
  "Explore clubs, events, competitions, and leadership opportunities across KLH University campuses — Aziznagar, Bachupally, and Global Business School.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
