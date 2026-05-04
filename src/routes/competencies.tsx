import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";
import { competencies } from "@/components/portfolio/data";

const icons = [Code2, Database, Brain, Wrench];

export const Route = createFileRoute("/competencies")({
  component: Competencies,
  head: () => ({
    meta: [
      { title: "Core Competencies — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Skills across software development, backend, AI, computer vision, and modern developer tooling." },
      { property: "og:title", content: "Core Competencies — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "React Native, Flutter, Node.js, MySQL, OpenCV and modern engineering tools." },
    ],
  }),
});

function Competencies() {
  return (
    <PageShell>
      <Section eyebrow="Core Competencies" title="A versatile, modern tech stack" description="Tools and technologies I use to ship production-ready software.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {competencies.map((c, i) => {
            const Icon = icons[i];
            return (
              <div key={c.category} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{c.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <span key={item} className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:bg-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
