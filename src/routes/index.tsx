import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Sparkles, Code2, Database, Brain, Wrench, Camera, Network, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-portrait.jpg";
import { buildSeo, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    buildSeo({
      title: "OSTECH COMPUTER SOLUTIONS — IT Specialist & Software Developer",
      description:
        "Portfolio of OSTECH COMPUTER SOLUTIONS. I design and develop scalable IT systems, mobile applications, and data-driven solutions.",
      path: "/",
      image: `${SITE_URL}${heroImg}`,
      type: "profile",
    }),
});

const stats = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Years Coding", value: "4+" },
];

const highlights = [
  { icon: Code2, title: "Software Development", text: "Mobile and web apps with React Native, Flutter & TypeScript." },
  { icon: Database, title: "Backend & Data", text: "Node.js APIs and MySQL databases that scale." },
  { icon: Brain, title: "AI & Vision", text: "OpenCV-powered computer vision and AI features." },
  { icon: Network, title: "Infrastructure & Support", text: "CCTV installation, network setup, and expert hardware/software maintenance." },
];

function Home() {
  const ref = useReveal<HTMLDivElement>();
  const [profileImage, setProfileImage] = useState(heroImg);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("profile-image");
    if (saved) {
      setProfileImage(saved);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setProfileImage(base64);
          localStorage.setItem("profile-image", base64);
          toast.success("Profile picture updated and saved!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  return (
    <PageShell>
      <Toaster />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-hero absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div ref={ref} className="reveal">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Available for new projects
            </span>
            <div className="mb-8">
              <img 
                src="/logo.jpeg" 
                alt="OSTECH Logo" 
                className="h-24 w-24 rounded-2xl bg-white object-contain p-2 shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-3 sm:h-32 sm:w-32" 
              />
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              OSTECH COMPUTER <br />
              <span className="text-gradient">SOLUTIONS</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/90 italic sm:text-xl">
              "Your Trusted Partner in IT Excellence"
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Software · Systems · Security · Infrastructure
            </p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              I am a BSIT student and IT Specialist focused on building practical digital solutions
              through software development, database systems, and mobile applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <FileText className="h-4 w-4" />
                View Full CV
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="group relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={profileImage}
                alt="OSTECH COMPUTER SOLUTIONS"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              {/* Overlay for updating image */}
              <button
                onClick={triggerFileInput}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-label="Update profile picture"
              >
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="rounded-full bg-primary p-3 shadow-glow">
                    <Camera className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold">Change Picture</span>
                </div>
              </button>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="glass absolute -bottom-4 -left-4 rounded-2xl border border-border p-4 shadow-card sm:-left-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section eyebrow="What I do" title="Building end-to-end systems" description="From concept to deployment, I deliver software that's fast, secure, and a pleasure to use.">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-elegant sm:p-16">
          <div className="bg-gradient-mesh absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Let's build something exceptional together — from idea to launch.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
