import { Hero } from "@/components/landingtwo/hero";
import { HeroVideoDialog } from "@/components/landingtwo/herovideodialog";
import CTAWithVerticalMarquee from "@/components/CTAWithVerticalMarquee";

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

      {/* --- CTA WITH VERTICAL MARQUEE SECTION --- */}
      <section>
        <CTAWithVerticalMarquee />
      </section>
    </main>
  );
}
