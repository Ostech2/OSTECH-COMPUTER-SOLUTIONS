import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ThemeProvider } from "./theme-provider";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-mesh" />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
