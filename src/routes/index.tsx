import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/NewsCard";
import { news } from "@/lib/site";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brookvale School — Learn, Grow, Belong" },
      {
        name: "description",
        content:
          "Welcome to Brookvale School: latest news, admissions, academics and everything families need in one place.",
      },
      { property: "og:title", content: "Brookvale School — Learn, Grow, Belong" },
      {
        property: "og:description",
        content: "Latest news, admissions, academics and quick links for Brookvale School families.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "1,240", label: "Students" },
  { value: "96%", label: "Graduate to university" },
  { value: "40+", label: "Clubs & teams" },
  { value: "14:1", label: "Student–teacher ratio" },
];

const quickLinks = [
  {
    to: "/admissions",
    title: "Admissions",
    text: "How to apply, fees and key dates for 2027.",
    icon: ClipboardCheck,
    tone: "green",
  },
  {
    to: "/calendar",
    title: "Term calendar",
    text: "Holidays, exams and upcoming events.",
    icon: CalendarDays,
    tone: "blue",
  },
  {
    to: "/academics",
    title: "Academics",
    text: "Curriculum, subjects and learning support.",
    icon: BookOpen,
    tone: "blue",
  },
  {
    to: "/student-life",
    title: "Clubs & sports",
    text: "Teams, arts, music and after-school clubs.",
    icon: Trophy,
    tone: "green",
  },
  {
    to: "/about",
    title: "Our school",
    text: "Our story, values and leadership team.",
    icon: GraduationCap,
    tone: "green",
  },
  {
    to: "/contact",
    title: "Contact & visits",
    text: "Find us, call the office or book a tour.",
    icon: MessageCircle,
    tone: "blue",
  },
] as const;

function Index() {
  const featured = news[0]!;
  const rest = news.slice(1);
  return (
    <>
      {/* Welcome */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden pb-16 pt-40 md:pb-24">
        <img
          src={hero}
          alt="Students walking across the Brookvale School campus"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site">
          <div className="max-w-3xl animate-rise text-hero-foreground">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-foreground/25 bg-hero-foreground/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Welcome to Brookvale School
            </p>
            <h1 className="text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">
              Where curious minds <span className="text-primary">grow</span> together.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-hero-foreground/85 md:text-xl">
              A warm, ambitious community for ages 11–18, with outstanding teaching, a green riverside campus and room
              for every talent.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <Link to="/admissions">
                  Start your application <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Book a visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative z-10 -mt-10">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border shadow-card md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-7 text-center">
                <p className="font-display text-3xl font-bold text-gradient-brand md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome message */}
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">From the Headteacher</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              A school that feels like <span className="text-gradient-brand">home</span>, and opens doors to the world.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              At Brookvale, we believe great learning happens when students feel known. Our teachers combine high
              expectations with genuine care, so every young person leaves us confident, kind and ready for what comes
              next.
            </p>
            <p className="font-medium text-foreground">— Dr. Helen Marsh, Headteacher</p>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3">
              Discover our story <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="bg-muted/60 py-20 md:py-28">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Latest news</p>
              <h2 className="text-3xl font-bold md:text-5xl">What's happening at Brookvale</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/news">
                All news <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <NewsCard item={featured} featured />
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.slice(0, 2).map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
              <div className="sm:col-span-2 rounded-3xl border bg-card p-6 shadow-card">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Also this week
                </p>
                <ul className="divide-y">
                  {rest.slice(2).map((n) => (
                    <li key={n.slug} className="flex items-center justify-between gap-4 py-3">
                      <span className="font-medium">{n.title}</span>
                      <span className="shrink-0 rounded-full bg-secondary-soft px-2.5 py-0.5 text-xs font-semibold text-secondary">
                        {n.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Quick navigation</p>
            <h2 className="text-3xl font-bold md:text-5xl">Find what you need, fast.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map(({ to, title, text, icon: Icon, tone }) => (
              <Link
                key={to}
                to={to}
                className="group relative flex items-start gap-5 overflow-hidden rounded-3xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <span className="absolute inset-0 -z-0 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span
                  className={
                    "relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl transition-colors group-hover:bg-hero-foreground/15 group-hover:text-hero-foreground " +
                    (tone === "green" ? "bg-primary-soft text-primary" : "bg-secondary-soft text-secondary")
                  }
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="relative flex-1">
                  <span className="flex items-center justify-between font-display text-xl font-semibold transition-colors group-hover:text-hero-foreground">
                    {title}
                    <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground transition-colors group-hover:text-hero-foreground/85">
                    {text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand px-8 py-14 text-primary-foreground md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-hero-foreground/10 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Come and see Brookvale for yourself.</h2>
                <p className="mt-2 text-primary-foreground/85">Winter Open Day · Saturday 5 December, 10:00–14:00</p>
              </div>
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">
                  Reserve a place <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
