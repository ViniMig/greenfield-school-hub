import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Term Calendar — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { name: "description", content: "Term dates, holidays, exams and upcoming events at Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
      { property: "og:title", content: "Term Calendar — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { property: "og:description", content: "Term dates, holidays and upcoming events at Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira." },
    ],
  }),
  component: CalendarPage,
});

const events = [
  { date: "17 Nov", title: "Reading Week begins", tag: "Event" },
  { date: "21 Nov", title: "County Cup Final vs. Hartfield", tag: "Sports" },
  { date: "5 Dec", title: "Winter Open Day", tag: "Admissions" },
  { date: "11 Dec", title: "Winter Concert", tag: "Music" },
  { date: "18 Dec", title: "Autumn term ends (13:30 finish)", tag: "Term" },
  { date: "5 Jan", title: "Spring term begins", tag: "Term" },
];

function CalendarPage() {
  return (
    <>
      <PageHeader eyebrow="Calendar" title="Term dates & upcoming events." intro="Autumn and Spring term 2026–27." />
      <section className="container-site py-20">
        <ul className="divide-y overflow-hidden rounded-3xl border bg-card shadow-card">
          {events.map((e) => (
            <li key={e.title} className="flex items-center gap-6 p-5 md:p-6">
              <span className="w-20 shrink-0 font-display text-xl font-bold text-primary">{e.date}</span>
              <span className="flex-1 font-medium">{e.title}</span>
              <span className="rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-secondary">
                {e.tag}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
