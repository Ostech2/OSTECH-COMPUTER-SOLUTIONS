import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    buildSeo({
      title: "About — OSTECH COMPUTER SOLUTIONS",
      description:
        "Learn about OSTECH COMPUTER SOLUTIONS — IT Specialist building modern software systems including mobile apps, web platforms, and AI-powered solutions.",
      path: "/about",
    }),
});

const values = [
  "User-centered design and accessibility",
  "Clean, maintainable, well-documented code",
  "Security and data privacy by default",
  "Continuous learning and improvement",
];

function About() {
  return (
    <PageShell>
      <Section eyebrow="About me" title="A builder, problem-solver and lifelong learner" description="I bridge technical depth with practical delivery — turning complex ideas into intuitive software.">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I am a <span className="font-semibold text-foreground">BSIT student and IT Specialist</span> focused on building practical digital solutions through software development, database systems, and mobile applications.
            </p>
            <p>
              My experience includes developing web and mobile applications such as a <span className="font-semibold text-foreground">Personal Finance Management System</span>, a <span className="font-semibold text-foreground">Digital Attendance System</span> using QR code and facial recognition, and an AI-powered crop disease detection system.
            </p>
            <p>
              I also have skills in database design using MySQL, backend API development, and modern UI/UX design for responsive systems. In addition, I have basic knowledge of networking, IT support, and cybersecurity fundamentals.
            </p>
            <p>
              Through academic and personal projects, I have gained experience in system analysis, software design, and full-stack development. I am passionate about using technology to solve real-world problems and continuously improving my technical expertise.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold">What I value</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
