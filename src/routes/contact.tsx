import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { InfoCard, PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visits — Brookvale School" },
      { name: "description", content: "Find Brookvale School, call the school office or book a visit." },
      { property: "og:title", content: "Contact & Visits — Brookvale School" },
      { property: "og:description", content: "Find Brookvale School, call the office or book a visit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you."
        intro="The school office is open Monday to Friday, 8:00–16:30."
      />
      <section className="container-site grid gap-6 py-20 md:grid-cols-3">
        <InfoCard icon={<MapPin className="h-6 w-6" />} title="Visit">
          12 Riverside Lane, Brookvale, BV1 2SC
        </InfoCard>
        <InfoCard icon={<Phone className="h-6 w-6" />} title="Call">
          01234 567 890
        </InfoCard>
        <InfoCard icon={<Mail className="h-6 w-6" />} title="Email">
          hello@brookvale.school
        </InfoCard>
      </section>
    </>
  );
}
