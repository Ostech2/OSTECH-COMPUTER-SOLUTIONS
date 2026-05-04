import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Globe, Database, Lightbulb, Palette, Monitor, Video, Wrench, Network } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Mobile apps, web systems, CCTV installation, network setup, hardware/software installation, and maintenance." },
      { property: "og:title", content: "Services — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "End-to-end IT services from mobile and web development to UI/UX." },
    ],
  }),
});

const services = [
  { icon: Smartphone, title: "Mobile App Development", text: "Native-feel apps with React Native and Flutter — fast, beautiful, cross-platform." },
  { icon: Globe, title: "Web-Based Systems", text: "Production-ready web platforms with modern JavaScript, TypeScript, and Node.js." },
  { icon: Database, title: "Database Design & Management", text: "Well-modeled MySQL schemas optimized for performance and integrity." },
  { icon: Video, title: "CCTV Installation", text: "Professional security camera setup and surveillance system implementation for safety." },
  { icon: Network, title: "Network Installation", text: "Robust LAN setup and configuration for homes and offices with seamless connectivity." },
  { icon: Monitor, title: "Hardware & Software Installation", text: "Expert installation and configuration of computer hardware and software systems." },
  { icon: Wrench, title: "Software Maintenance", text: "Ongoing support, updates, and optimization to keep your systems running smoothly." },
  { icon: Lightbulb, title: "IT System Consultation", text: "Architecture review, technology selection, and roadmap planning for your stack." },
  { icon: Palette, title: "UI/UX Design", text: "Clean, accessible interfaces designed around your users' real workflows." },
];

function Services() {
  return (
    <PageShell>
      <Section eyebrow="Services" title="How I can help you ship" description="Engagements ranging from focused builds to long-term technical partnership.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
