import { Hero } from "@/components/landingtwo/hero";
import { HeroVideoDialog } from "@/components/landingtwo/herovideodialog";
import CTAWithVerticalMarquee from "@/components/CTAWithVerticalMarquee"; // 👈 imported new component

export const metadata = {
  title: "Monwhooper – Stay Dangerous | Water That Fights Back",
  description:
    "An editorial landing experience introducing Monwhooper, Kangen Water, and Wake Water Co — built for curiosity and conversion.",
  openGraph: {
    title: "Monwhooper – Stay Dangerous | Water That Fights Back",
    description:
      "Discover how hydration quality changes everything. Meet Monwhooper, explore Kangen Water, and join Wake Water Co.",
    url: "/landing-two",
    type: "website",
  },
};

export default function LandingTwoPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden">
        <Hero />

        {/* --- VIDEO SECTION --- */}
        <div className="mt-8 flex justify-center px-4">
          <div className="w-full max-w-3xl">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/VIDEO_ID_HERE"
              thumbnailSrc="/landthumb.png"
              thumbnailAlt="Monwhooper Kangen Water Bottle"
            />
          </div>
        </div>
      </section>

      {/* --- FUTURE SECTIONS (WHY / WAKE) --- */}
      {/* <section id="why" className="border-t border-border/20 py-20">...</section> */}
      {/* <section id="switch" className="border-t border-border/20 bg-muted/10 py-20">...</section> */}

      {/* --- FOOTER CTA --- */}
      <section className="border-t border-border/20 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Drink with intent.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          If you’re here from an ad, welcome. Try the 7-day hydration reset and
          see what changes first.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="/wake/starter"
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
          >
            Start the reset
          </a>
          <a
            href="/kangen-water"
            className="rounded-2xl border border-border px-5 py-3 text-sm font-medium hover:bg-muted/10"
          >
            Learn about Kangen
          </a>
        </div>
      </section>

      {/* --- CTA WITH VERTICAL MARQUEE SECTION --- */}
      <section className="border-t border-border/20">
        <CTAWithVerticalMarquee />
      </section>
    </main>
  );
}
