import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, TikTokIcon } from "@/components/portfolio/brand-icons";
import { toast } from "sonner";
import { PageShell } from "@/components/portfolio/page-shell";
import { Section } from "@/components/portfolio/section";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — OSTECH COMPUTER SOLUTIONS" },
      { name: "description", content: "Get in touch with OSTECH COMPUTER SOLUTIONS by email, phone, GitHub, LinkedIn, or the contact form." },
      { property: "og:title", content: "Contact — OSTECH COMPUTER SOLUTIONS" },
      { property: "og:description", content: "Let's talk about your next project." },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more (min 10 chars)").max(2000),
});

const channels = [
  { icon: Mail, label: "Email", value: "kamugishaosbert7@gmail.com", href: "mailto:kamugishaosbert7@gmail.com", desc: "Formal inquiries", color: "bg-blue-500" },
  { icon: Phone, label: "Phone", value: "+256 772 956 306 / +256 767 092 741", href: "tel:+256772956306", desc: "Direct voice call", color: "bg-slate-500" },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/256772956306?text=HELLO%20THANKS%20FOR%20CONTACTING%20OSTECH%20COMPUTER%20SOLUTIONS", desc: "Best for quick chat", color: "bg-[#25D366]" },
  { icon: TikTokIcon, label: "TikTok", value: "@ostech_solutions", href: "https://tiktok.com", desc: "Watch tech content", color: "bg-[#000000]" },
  { icon: GitHubIcon, label: "GitHub", value: "Ostech2", href: "https://github.com/Ostech2", desc: "Collaborate on code", color: "bg-[#181717]" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "Kamugisha Osbert", href: "https://linkedin.com", desc: "Professional networking", color: "bg-[#0077B5]" },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }

    setSubmitting(true);

    try {
      // Using Web3Forms for automatic email delivery to kamugishaosbert7@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f1fb62e1-fb9f-4ffc-920a-733227893545", // Verified Web3Forms key for kamugishaosbert7@gmail.com
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          subject: `New Contact from OSTECH Portfolio: ${fd.get("name")}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll receive it at kamugishaosbert7@gmail.com shortly.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again or use direct email.");
      }
    } catch (err) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <Toaster />
      <Section eyebrow="Contact" title="Let's build something great" description="Drop a message — I usually reply within 24 hours.">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">Choose your channel</h3>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-glow transition-transform group-hover:scale-110", c.color)}>
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="rounded-full bg-primary/5 px-2 py-0.5 text-[9px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">{c.desc}</div>
                  </div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-elegant">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </PageShell>
  );
}
