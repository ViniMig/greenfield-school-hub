import { createFileRoute } from "@tanstack/react-router";
import { Music, Trophy, Users } from "lucide-react";
import { InfoCard, PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Brookvale School" },
      { name: "description", content: "Clubs, sports teams, music and arts at Brookvale School." },
      { property: "og:title", content: "Student Life — Brookvale School" },
      { property: "og:description", content: "Clubs, sports teams, music and arts at Brookvale School." },
    ],
  }),
  component: StudentLifePage,
});

function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Student life"
        title="More than 40 ways to find your thing."
        intro="Every day ends with clubs, rehearsals and training sessions — open to all, whatever your level."
      />
      <section className="container-site grid gap-6 py-20 md:grid-cols-3">
        <InfoCard icon={<Trophy className="h-6 w-6" />} title="Sports">
          Football, netball, rowing, athletics and more, with county-level teams.
        </InfoCard>
        <InfoCard icon={<Music className="h-6 w-6" />} title="Music & Drama">
          Orchestra, jazz band, choirs and two major productions each year.
        </InfoCard>
        <InfoCard icon={<Users className="h-6 w-6" />} title="Clubs">
          Robotics, debate, eco council, chess, coding and student newspaper.
        </InfoCard>
      </section>
    </>
  );
}
