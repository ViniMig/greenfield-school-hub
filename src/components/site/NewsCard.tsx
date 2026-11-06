import { ArrowUpRight, Newspaper } from "lucide-react";
import { formatDate, type NewsItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function NewsCard({ item, featured }: { item: NewsItem; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10]" : "aspect-[4/3]")}>
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-brand">
            <Newspaper className="h-12 w-12 text-primary-foreground/80" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-secondary backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
        <h3 className={cn("mt-2 font-semibold leading-snug", featured ? "text-2xl md:text-3xl" : "text-lg")}>
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
