import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { name: "description", content: "How to apply to Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira for September 2027: steps and key dates." },
      { property: "og:title", content: "Admissions — Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira" },
      { property: "og:description", content: "How to apply to Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira: steps and key dates." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", title: "Visit us", text: "Join an Open Day or book a personal tour with a member of staff." },
  { n: "02", title: "Apply online", text: "Complete the short application form before 15 January 2027." },
  { n: "03", title: "Meet the team", text: "An informal conversation with your child and a Head of Year." },
  { n: "04", title: "Welcome", text: "Offers are sent in March, followed by a summer transition day." },
];

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Joining Escola Vini Oliveira in four simple steps."
        intro="Applications for September 2027 are now open for Year 7 and Sixth Form."
      />
      <section className="container-site py-20">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl border bg-card p-7 shadow-card">
              <span className="font-display text-4xl font-bold text-gradient-brand">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">
              Book a tour <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
