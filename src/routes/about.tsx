import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles } from "lucide-react";
import { InfoCard, PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Brookvale School" },
      { name: "description", content: "The story, values and leadership behind Brookvale School since 1962." },
      { property: "og:title", content: "About Us — Brookvale School" },
      { property: "og:description", content: "The story, values and leadership behind Brookvale School." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Sixty years of learning by the river."
        intro="Founded in 1962, Brookvale has grown from a small village school into a thriving community of 1,240 students — without losing its warmth."
      />
      <section className="container-site grid gap-6 py-20 md:grid-cols-3">
        <InfoCard icon={<Sparkles className="h-6 w-6" />} title="Curiosity">
          We encourage questions, experiments and big ideas in every classroom.
        </InfoCard>
        <InfoCard icon={<Heart className="h-6 w-6" />} title="Kindness">
          Respect and care for others are at the heart of everything we do.
        </InfoCard>
        <InfoCard icon={<Leaf className="h-6 w-6" />} title="Responsibility">
          Students lead on sustainability, community service and student voice.
        </InfoCard>
      </section>
    </>
  );
}
