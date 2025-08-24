// app/(marketing)/kangen-water/page.tsx

import KangenHero from "@/components/kangen-hero";
import HeroVideoDialog from "@/components/magiciui/hero-video-dialog"; // uses your existing dialog

export const metadata = {
  title: "Kangen Water® — Samurai & Wolf",
  description: "Information and philosophy about Kangen Water®.",
};

export default function KangenWaterPage() {
  return (
    <main className="px-4 sm:px-6 pt-[calc(env(safe-area-inset-top)+4rem)] sm:pt-[calc(env(safe-area-inset-top)+5rem)]">
      {/* Globe hero */}
      <KangenHero />

      {/* Video */}
      <section className="mx-auto w-full max-w-5xl mt-10">
        <HeroVideoDialog
          videoSrc="/kangen-water.mp4"   // <-- /public/kangen-water.mp4
          thumbnailSrc="/enagic.png"     // <-- in /public (from your tree)
          thumbnailAlt="Kangen Water teaser"
        />
      </section>

      {/* Copy */}
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

      {/*
      Debug fallback (remove once confirmed):
      <section className="mx-auto w-full max-w-5xl mt-10">
        <video src="/kangen-water.mp4" controls playsInline preload="metadata" className="w-full rounded-xl" />
      </section>
      */}
    </main>
  );
}
