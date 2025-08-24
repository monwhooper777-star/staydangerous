import KangenHero from "@/components/kangen-hero";
import KangenVideo from "@/components/ui/kangen-video";

export const metadata = {
  title: "Kangen Water® — Samurai & Wolf",
  description: "Information and philosophy about Kangen Water®.",
};

export default function KangenWaterPage() {
  return (
    <main className="px-4 sm:px-6 pt-[calc(env(safe-area-inset-top)+4rem)] sm:pt-[calc(env(safe-area-inset-top)+5rem)]">
      {/* ⬇️ Render the globe hero */}
      <KangenHero />

      <article className="mx-auto w-full max-w-[68ch] mt-12">
        <header className="mb-6 sm:mb-8">
          <h1 className="scroll-mt-28 md:scroll-mt-32 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Kangen Water®
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Exploring hydration, health, and lifestyle benefits.
          </p>
          <hr className="mt-4 border-t border-neutral-700/40" />
        </header>

        <section className="space-y-4 text-base sm:text-lg leading-relaxed hyphens-auto break-words">
          <p>
            Kangen Water® is more than just hydration — it’s part of a lifestyle philosophy
            that emphasizes HOLISTIC health, balance, and vitality over allopathic means of tending to wellness.
          </p>
          <p>
            This page will serve as an introduction, insights, and philosophy behind why
            water quality matters, briefly showcasing some of Monwhooper’s content that has been posted on his verified Instagram page.
          </p>
        </section>
      </article>
    </main>
  );
}
