import { Hero } from "@/components/landingtwo/hero";
import { HeroVideoDialog } from "@/components/landingtwo/herovideodialog";
import CTAWithVerticalMarquee from "@/components/CTAWithVerticalMarquee";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

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

      {/* --- TESTIMONIALS (replaces “Drink with intent.” block) --- */}
      <section className="py-24">
        <TestimonialsSection
          title="Trusted by hydration enthusiasts worldwide"
          description="Join people who’ve felt the difference with Kangen® water."
          testimonials={[
            {
              author: {
                name: "Sofia Rodriguez",
                handle: "@sofiahydrated",
                image: "/avatars/sofia.jpg",
              },
              text:
                "Energy up, recovery smoother—hydration actually feels different.",
            },
            {
              author: {
                name: "Marcus Lee",
                handle: "@marcuswellness",
                image: "/avatars/marcus.jpg",
              },
              text:
                "Didn’t expect it, but you can *taste* the difference.",
            },
            {
              author: {
                name: "Emma Thompson",
                handle: "@drinksmarter",
                image: "/avatars/emma.jpg",
              },
              text:
                "Clean, crisp, consistent. I’m not going back.",
            },
          ]}
          className="bg-transparent text-inherit"
        />
      </section>

      {/* --- CTA WITH VERTICAL MARQUEE SECTION --- */}
      <section>
        <CTAWithVerticalMarquee />
      </section>
    </main>
  );
}
