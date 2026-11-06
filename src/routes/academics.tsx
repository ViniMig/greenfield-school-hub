import { createFileRoute } from "@tanstack/react-router";
import { Atom, Globe2, Palette, Calculator, Languages, Laptop } from "lucide-react";
import { InfoCard, PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { name: "description", content: "Curriculum, subjects and learning support at Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
      { property: "og:title", content: "Academics — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { property: "og:description", content: "Curriculum, subjects and learning support at Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
    ],
  }),
  component: AcademicsPage,
});

const subjects = [
  { icon: Atom, title: "Sciences", text: "Biology, chemistry and physics taught in six modern labs." },
  { icon: Calculator, title: "Mathematics", text: "From foundations to Further Maths and competition squads." },
  { icon: Languages, title: "Languages", text: "French, Spanish, German and Mandarin with exchange trips." },
  { icon: Globe2, title: "Humanities", text: "History, geography and politics with real-world fieldwork." },
  { icon: Palette, title: "Creative Arts", text: "Art, drama, music and design in dedicated studios." },
  { icon: Laptop, title: "Computing", text: "Coding, robotics and digital media from Year 7 onwards." },
];

function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A broad curriculum with room to go deep."
        intro="Our curriculum balances strong foundations with the freedom to specialise, supported by small classes and dedicated tutors."
      />
      <section className="container-site grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map(({ icon: Icon, title, text }) => (
          <InfoCard key={title} icon={<Icon className="h-6 w-6" />} title={title}>
            {text}
          </InfoCard>
        ))}
      </section>
    </>
  );
}
