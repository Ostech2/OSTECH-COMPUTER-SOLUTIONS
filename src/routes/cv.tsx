import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";

export const Route = createFileRoute("/cv")({
  component: CV,
  head: () => ({
    meta: [
      { title: "CV — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Professional CV of Kamugisha Osbert — Results-driven IT Specialist and Software Developer." },
      { property: "og:title", content: "CV — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "IT Specialist expertise in systems maintenance, networking, and software development." },
    ],
  }),
});

function CV() {
  return (
    <PageShell>
      <Section eyebrow="Curriculum Vitae" title="Professional Resume" description="A comprehensive overview of my technical expertise, academic background, and professional projects.">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <FileText className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold">KAMUGISHA OSBERT</h3>
                  <p className="text-lg font-medium text-primary">IT Specialist · Software & Systems Developer</p>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <p>0772956306 / 0767092741</p>
                    <p>kamugishaosbert7@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/cv-kamugisha-osbert.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href="/cv-kamugisha-osbert.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Eye className="h-4 w-4" /> View PDF
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h4 className="mb-4 font-display text-xl font-bold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Personal Profile Statement
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven IT Specialist with a strong foundation in hardware and software maintenance, network administration, system support, software development, and database management. Experienced in troubleshooting technical issues, supporting end-users, and developing efficient digital solutions, including mobile and web-based applications. Proficient in modern technologies such as React Native and MySQL. Demonstrates strong problem-solving skills and the ability to work independently or within a team. Seeking to contribute technical expertise and deliver reliable IT solutions in a professional environment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Competencies */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h4 className="mb-6 font-display text-xl font-bold flex items-center gap-2 text-gradient">
                <Award className="h-5 w-5 text-primary" />
                Core Competencies
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> IT Support & Troubleshooting
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> System Installation & Maintenance
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Network Configuration & Internet Setup
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> CCTV camera installation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Database Management (MySQL)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Software Development (Mobile & Web)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Technical Problem Solving
                </li>
              </ul>
            </div>

            {/* Experience/Projects */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h4 className="mb-6 font-display text-xl font-bold flex items-center gap-2 text-gradient">
                <Briefcase className="h-5 w-5 text-primary" />
                Professional Projects
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-foreground">Digital Attendance System</h5>
                  <p className="text-xs text-muted-foreground italic mb-2">QR code & Facial Recognition</p>
                  <p className="text-sm text-muted-foreground">Improved accuracy and eliminated manual errors in institutional tracking.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Personal Finance System</h5>
                  <p className="text-xs text-muted-foreground italic mb-2">Web-based Management</p>
                  <p className="text-sm text-muted-foreground">Developed with robust reporting and data visualization capabilities.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Database Management</h5>
                  <p className="text-xs text-muted-foreground italic mb-2">MySQL Configuration</p>
                  <p className="text-sm text-muted-foreground">Optimized data storage and retrieval systems for multiple client projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h4 className="mb-8 font-display text-xl font-bold flex items-center gap-2 text-gradient">
              <GraduationCap className="h-5 w-5 text-primary" />
              Academic Background
            </h4>
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-l-2 border-primary/30 pl-6 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                <div>
                  <h5 className="font-bold text-lg">Bachelor of Science in Information Technology</h5>
                  <p className="text-muted-foreground">Uganda Christian University - Bishop Barham University College, Kabale</p>
                </div>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">2023 - 2026</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-l-2 border-primary/30 pl-6 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary/50" />
                <div>
                  <h5 className="font-bold text-lg">Uganda Advanced Certificate of Education (UACE)</h5>
                  <p className="text-muted-foreground">Kihanga Secondary School</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full shrink-0">2020 - 2022</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-l-2 border-primary/30 pl-6 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary/50" />
                <div>
                  <h5 className="font-bold text-lg">Uganda Certificate of Education (UCE)</h5>
                  <p className="text-muted-foreground">Kyogo Senior Secondary School</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full shrink-0">2016 - 2019</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-l-2 border-primary/30 pl-6 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary/50" />
                <div>
                  <h5 className="font-bold text-lg">Primary Leaving Examination (PLE)</h5>
                  <p className="text-muted-foreground">Kyogo Primary School</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full shrink-0">2009 - 2015</span>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h4 className="mb-4 font-display text-lg font-bold">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Communication", "Teamwork", "Time Management", "Adaptability", "Quick Learning"].map(s => (
                  <span key={s} className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h4 className="mb-4 font-display text-lg font-bold">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["IT Support", "Mobile Development", "Artificial Intelligence", "Innovation"].map(s => (
                  <span key={s} className="px-3 py-1 bg-primary/5 rounded-full text-xs text-primary border border-primary/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
