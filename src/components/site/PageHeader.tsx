import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-soft pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container-site relative animate-rise">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
