export const metadata = {
  title: "Philosophy — Samurai & Wolf",
  description: "The personal code behind the brand.",
};

export default function PhilosophyPage() {
  return (
    <main className="px-4 sm:px-6 pt-[calc(env(safe-area-inset-top)+4rem)] sm:pt-[calc(env(safe-area-inset-top)+5rem)]">
      <article className="mx-auto w-full max-w-[68ch]">
        <header className="mb-6 sm:mb-8">
          <h1 className="scroll-mt-28 md:scroll-mt-32 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Samurai & Wolf Philosophy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Honor. Loyalty. Instinct. Courage. Freedom.
          </p>
          {/* Divider */}
          <hr className="mt-4 border-t border-neutral-700/40" />
        </header>

        {/* New Section: Origins of Personal Brand */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Origins of Personal Brand Monwhooper &amp; a brief introduction to the Owner.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-muted-foreground">
            Stay Dangerous - Health, Wealth &amp; Self.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            When I was changing my Instagram username a few years back, I put my first and last name in a WU-TANG name generator and boom 💥 birth Monwhooper. Amazing, I added 1776 for my patriotism.
          </p>
          {/* Divider */}
          <hr className="mt-6 border-t border-neutral-700/40" />
        </section>

        <section className="space-y-4 text-base sm:text-lg leading-relaxed hyphens-auto break-words">
          <p>
            I'll tell you a bit of my obsession with Japanese culture, the samurai code, and honor.
            I love how those warriors had incredible respect for the art of war and their core tenets of
            Bushidō. Dishonor or failure could lead to seppuku (ritual suicide), a way to preserve or
            restore one's honor.
          </p>
          <p>
            So you'll see a few designs with Japanese samurai in them. I'm sure you know my animal spirit
            being a wolf. Loyalty—fiercely devoted to the pack, similar to samurai loyalty to clan or lord.
          </p>
          <p>
            Instinct &amp; Intuition—wolves rely on their sharp instincts, much like a samurai trusting their
            training and bushidō to guide their actions.
          </p>
          <p>
            Courage—wolves face danger head-on to protect the pack. A true warrior trait.
          </p>
          <p>
            Freedom &amp; Independence—wolves value their freedom but still thrive in structured packs like the
            disciplined but personally honorable samurai.
          </p>
          <p>
            Strength in Solitude and in a Pack—the lone wolf and the pack dynamic reflect a samurai’s dual
            ability to act alone or with an army.
          </p>
        </section>
      </article>
    </main>
  );
}
