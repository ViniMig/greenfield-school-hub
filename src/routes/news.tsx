import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { NewsCard } from "@/components/site/NewsCard";
import { news } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { name: "description", content: "The latest stories, achievements and announcements from Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
      { property: "og:title", content: "News — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { property: "og:description", content: "The latest stories and announcements from Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Stories from around the school."
        intro="Achievements, events and announcements from our students and staff."
      />
      <section className="container-site grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </section>
    </>
  );
}
