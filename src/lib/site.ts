import robotics from "@/assets/news-robotics.jpg";
import sports from "@/assets/news-sports.jpg";
import library from "@/assets/news-library.jpg";

export const SCHOOL_NAME = "Escola EB 1,2,3,4,5 Senhor Doutor Engenheiro Arquiteto Vini Oliveira";

export const mainNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/student-life", label: "Student Life" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
};

export const news: NewsItem[] = [
  {
    slug: "robotics-regional-win",
    title: "Robotics team takes first place at the regional championship",
    excerpt:
      "Our Year 10 robotics squad out-engineered 24 schools with an autonomous rover built entirely in the STEM lab.",
    date: "2026-11-03",
    category: "STEM",
    image: robotics,
  },
  {
    slug: "football-cup-final",
    title: "Vini Oliveira Blues reach the county cup final",
    excerpt:
      "A last-minute header sealed a 2–1 semi-final victory. The final is on 21 November — come and cheer!",
    date: "2026-10-29",
    category: "Sports",
    image: sports,
  },
  {
    slug: "library-reading-week",
    title: "Reading Week returns with author visits and a book swap",
    excerpt:
      "From 17 November the library hosts daily talks, a quiet reading marathon and a whole-school book exchange.",
    date: "2026-10-24",
    category: "Community",
    image: library,
  },
  {
    slug: "open-day-december",
    title: "Winter Open Day: registrations now open",
    excerpt:
      "Families considering Escola Vini Oliveira for September 2027 can book a guided tour with our students and teachers.",
    date: "2026-10-20",
    category: "Admissions",
  },
  {
    slug: "eco-council-solar",
    title: "Eco Council's solar panel project gets the green light",
    excerpt:
      "Student-led fundraising means 40 new panels will be installed on the sports hall roof this winter.",
    date: "2026-10-14",
    category: "Sustainability",
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
