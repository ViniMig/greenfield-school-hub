import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Brookvale School home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-brand shadow-brand transition-transform group-hover:rotate-[-6deg]">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-primary-foreground" fill="none" aria-hidden>
          <path d="M16 4c5 4 7 8 7 12a7 7 0 1 1-14 0c0-4 2-8 7-12Z" fill="currentColor" opacity=".9" />
          <path d="M6 24c3-2 6-2 10 0s7 2 10 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-bold tracking-tight",
            inverted ? "text-deep-foreground" : "text-foreground",
          )}
        >
          Brookvale
        </span>
        <span
          className={cn(
            "block text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
            inverted ? "text-deep-foreground/60" : "text-muted-foreground",
          )}
        >
          School · Est. 1962
        </span>
      </span>
    </Link>
  );
}
