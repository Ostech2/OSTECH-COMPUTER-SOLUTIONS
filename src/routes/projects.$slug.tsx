import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Github, Calendar, User, Clock, Briefcase } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { useReveal } from "@/hooks/use-reveal";
import { getProject, projects } from "@/components/portfolio/data";
import { buildSeo, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return buildSeo({
        title: "Project — OSTECH COMPUTER SOLUTIONS",
        description: "Project case study.",
        path: "/projects",
      });
    }
    const { project } = loaderData;
    return buildSeo({
      title: `${project.title} — Case Study`,
      description: project.tagline,
      path: `/projects/${project.slug}`,
      image: `${SITE_URL}${project.image}`,
      type: "article",
    });
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-5xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">Project not found.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    </PageShell>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const heroRef = useReveal<HTMLDivElement>();
  const overviewRef = useReveal<HTMLDivElement>();
  const featuresRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();
  const outcomesRef = useReveal<HTMLDivElement>();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Briefcase, label: "Role", value: project.role },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: User, label: "Client", value: project.client },
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-hero absolute inset-0 -z-10" />
        <div ref={heroRef} className="reveal mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" /> Source Code
            </a>
          </div>

          {/* Cover image */}
          <div className="relative mt-12">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <m.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  <div className="truncate text-sm font-semibold">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview / Problem / Solution */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div ref={overviewRef} className="reveal grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <aside>
            <h2 className="sticky top-28 font-display text-2xl font-bold">The case study</h2>
            <p className="sticky top-40 mt-3 text-sm text-muted-foreground">A look at the problem, the design choices, and what was shipped.</p>
          </aside>
          <div className="space-y-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">01 · Overview</span>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">02 · The Problem</span>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">03 · The Solution</span>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">04 · Tech Stack</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div ref={featuresRef} className="reveal">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">05 · Feature breakdown</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What was built</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div ref={galleryRef} className="reveal">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">06 · Screens</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Selected screens</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-border p-4 text-sm text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div ref={outcomesRef} className="reveal rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">07 · Outcomes</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Impact & results</h2>
          <ul className="mt-6 space-y-3">
            {project.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant sm:p-10"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Next project</span>
            <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{next.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{next.tagline}</p>
          </div>
          <ArrowRight className="h-7 w-7 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </PageShell>
  );
}