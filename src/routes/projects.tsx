import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";
import { projects } from "@/components/portfolio/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Selected projects: Digital Attendance, AI Crop Disease Detection, and Personal Finance Management." },
      { property: "og:title", content: "Projects — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "Real-world systems built with React Native, Node.js, MySQL, OpenCV and AI." },
    ],
  }),
});

const filters = ["All", "Mobile", "Web", "AI"] as const;

function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => (p.tags as readonly string[]).includes(active))),
    [active]
  );

  return (
    <PageShell>
      <Section eyebrow="Selected work" title="Projects that solve real problems" description="A curated selection of systems I've designed, built, and shipped.">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm font-medium transition-all",
                active === f
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow"
                  >
                    View Project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
