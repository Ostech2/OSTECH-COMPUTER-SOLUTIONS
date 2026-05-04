import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";

export const Route = createFileRoute("/experience")({
  component: Experience,
  head: () => ({
    meta: [
      { title: "Experience — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Software developer experience across independent and academic projects — mobile apps, backend APIs, and database systems." },
      { property: "og:title", content: "Experience — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "Independent and academic software development experience." },
    ],
  }),
});

const items = [
  {
    role: "IT Specialist & Systems Developer",
    org: "Independent & Academic Projects",
    period: "2023 — Present",
    points: [
      "Designed and developed a Digital Attendance System with QR & facial recognition.",
      "Developed a web-based Personal Finance Management system with data visualization.",
      "Managed MySQL databases for optimized data storage and retrieval.",
      "Provided end-to-end IT support, including system diagnostics and software installation.",
    ],
  },
  {
    role: "IT Support & Technical Maintenance",
    org: "Systems Application",
    period: "2022 — Present",
    points: [
      "Installed and configured various software applications and development tools.",
      "Diagnosed and resolved complex system and network-related issues.",
      "Maintained system performance through continuous debugging and optimization.",
      "Implemented security protocols and CCTV surveillance systems.",
    ],
  },
];

function Experience() {
  return (
    <PageShell>
      <Section eyebrow="Experience" title="A track record of shipping" description="Hands-on engineering experience across independent and academic work.">
        <div className="mx-auto max-w-3xl">
          {items.map((it) => (
            <div key={it.role} className="relative rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{it.role}</h3>
                    <p className="text-sm text-muted-foreground">{it.org}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2 pl-2">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
