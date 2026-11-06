import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Header hides when scrolling down and reappears when:
 *  - the user scrolls up,
 *  - the cursor moves near the top of the window,
 *  - or the page is near the top.
 */
export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y < 120) setHidden(false);
      else if (y > lastY + 6 && !hovering.current) setHidden(true);
      else if (y < lastY - 6) setHidden(false);
      lastY = y;
    };
    const onMove = (e: MouseEvent) => {
      if (e.clientY < 90) setHidden(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isHidden = hidden && !open;

  return (
    <header
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      {/* Utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-deep text-deep-foreground transition-all duration-300 md:block",
          scrolled ? "max-h-0" : "max-h-10",
        )}
      >
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p className="opacity-80">Winter Open Day · Saturday 5 December · Book your visit</p>
          <div className="flex items-center gap-5 opacity-80">
            <a href="tel:+441234567890" className="flex items-center gap-1.5 hover:opacity-100">
              <Phone className="h-3 w-3" /> 01234 567 890
            </a>
            <Link to="/calendar" className="hover:opacity-100">
              Term dates
            </Link>
            <Link to="/contact" className="hover:opacity-100">
              Parent portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border/70 bg-background/85 shadow-card backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md",
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-3.5 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-gradient-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="brand" className="hidden sm:inline-flex">
              <Link to="/admissions">Apply now</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="!size-5" /> : <Menu className="!size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[4.5rem] bg-background/98 backdrop-blur-xl transition-all duration-300 md:top-[6.75rem] lg:hidden",
          scrolled && "md:top-[4.5rem]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="container-site flex flex-col gap-1 py-6" aria-label="Mobile">
          {mainNav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
              className={cn(
                "rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold transition-all duration-300 hover:bg-muted data-[status=active]:text-primary",
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="brand" size="xl" className="mt-6">
            <Link to="/admissions" onClick={() => setOpen(false)}>
              Apply now
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
