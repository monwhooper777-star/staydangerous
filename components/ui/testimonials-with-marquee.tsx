import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
  /** Set true to force a dark “night” style */
  alwaysDark?: boolean;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
  alwaysDark = false,
}: TestimonialsSectionProps) {
  const sectionClasses = cn(
    "py-12 sm:py-24 md:py-32 px-0",
    alwaysDark
      ? "bg-neutral-950 text-neutral-50"
      : "bg-background text-foreground dark:bg-neutral-950 dark:text-neutral-50",
    className
  );

  const mutedText = alwaysDark
    ? "text-neutral-400"
    : "text-muted-foreground dark:text-neutral-400";

  const leftFade = alwaysDark ? "from-neutral-950" : "from-background dark:from-neutral-950";
  const rightFade = leftFade;

  return (
    <section className={sectionClasses} aria-label="Testimonials">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className={cn("text-md max-w-[600px] font-medium sm:text-xl", mutedText)}>
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((t, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...t} />
                ))
              )}
            </div>
          </div>

          {/* edge fades */}
          <div className={cn("pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r sm:block", leftFade)} />
          <div className={cn("pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l sm:block", rightFade)} />
        </div>
      </div>
    </section>
  );
}
