import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { NewsCard } from "@/components/site/NewsCard";
import { news } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Brookvale School" },
      { name: "description", content: "The latest stories, achievements and announcements from Brookvale School." },
      { property: "og:title", content: "News — Brookvale School" },
      { property: "og:description", content: "The latest stories and announcements from Brookvale School." },
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
