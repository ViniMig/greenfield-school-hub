import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-deep-foreground/70">
            A community school where curiosity grows, kindness leads and every learner finds their path.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-deep-foreground/60">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/academics" className="hover:text-primary">Academics</Link></li>
            <li><Link to="/student-life" className="hover:text-primary">Student life</Link></li>
            <li><Link to="/news" className="hover:text-primary">News</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-deep-foreground/60">
            Families
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/admissions" className="hover:text-primary">Admissions</Link></li>
            <li><Link to="/calendar" className="hover:text-primary">Term calendar</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact & visits</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-deep-foreground/60">
            Get in touch
          </h3>
          <ul className="space-y-3 text-sm text-deep-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 12 Riverside Lane, Brookvale, BV1 2SC</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 01234 567 890</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> hello@brookvale.school</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-deep-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-deep-foreground/50 sm:flex-row sm:justify-between">
          <p>© 2026 Brookvale School. Website mockup.</p>
          <p>Learn · Grow · Belong</p>
        </div>
      </div>
    </footer>
  );
}
