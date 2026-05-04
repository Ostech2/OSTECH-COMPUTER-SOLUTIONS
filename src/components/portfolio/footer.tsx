import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, TikTokIcon } from "./brand-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="mb-2 flex items-center gap-2">
            <img src="/logo.jpeg" alt="OSTECH" className="h-8 w-8 rounded-lg bg-white object-contain p-0.5 shadow-sm" />
            <p className="text-sm font-semibold text-foreground">
              OSTECH COMPUTER SOLUTIONS
            </p>
          </div>
          <p className="text-xs italic text-muted-foreground">
            Your Trusted Partner in IT Excellence
          </p>
          <p className="mt-1 text-[10px] text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Ostech2" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-[#181717] dark:hover:text-white">
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-[#0077B5]">
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href="mailto:kamugishaosbert7@gmail.com" aria-label="Email" className="rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://wa.me/256772956306?text=HELLO%20THANKS%20FOR%20CONTACTING%20OSTECH%20COMPUTER%20SOLUTIONS" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-[#25D366]">
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground dark:hover:text-white">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
