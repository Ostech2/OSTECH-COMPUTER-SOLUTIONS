import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";

export const Route = createFileRoute("/education")({
  component: Education,
  head: () => ({
    meta: [
      { title: "Education — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "B.Sc. IT at UCU-Bishop Barham University College Kabale, UACE at Kihanga Secondary, UCE at Kyogo Senior Secondary." },
      { property: "og:title", content: "Education — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "Academic background in Information Technology." },
    ],
  }),
});

const items = [
  { title: "Bachelor of Science in Information Technology", org: "Uganda Christian University — Bishop Barham University College Kabale", period: "2023 - 2026" },
  { title: "Uganda Advanced Certificate of Education (UACE)", org: "KIHANGA SECONDARY SCHOOL", period: "2020 - 2022" },
  { title: "Uganda Certificate of Education (UCE)", org: "KYOGO SENIOR SECONDARY SCHOOL", period: "2016 - 2019" },
  { title: "Primary Leaving Examination (PLE)", org: "KYOGO PRIMARY SCHOOL", period: "2009 - 2015" },
];

function Education() {
  return (
    <PageShell>
      <Section eyebrow="Education" title="Academic foundation" description="A solid grounding in IT and computing fundamentals.">
        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elegant">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.org}</p>
              </div>
              <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                {it.period}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
