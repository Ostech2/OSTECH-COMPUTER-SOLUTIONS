import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className={cn("mx-auto max-w-7xl px-6 py-20 sm:py-28", className)}>
      <div ref={ref} className="reveal">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
