"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { motion, useAnimation, useInView } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

/** Reusable wolf icon for all tiles */
const WolfIcon = (
  <img
    src="/monwhooperlogo.png"
    alt="Monwhooper wolf"
    className="size-full object-contain drop-shadow"
  />
);

const halos = Array(6).fill(
  "from-[var(--color-one)] via-[#b91c1c] to-[var(--color-two)]"
);

type Tile = { icon: JSX.Element; bg: JSX.Element };

const tiles: Tile[] = halos.map((colors) => ({
  icon: WolfIcon,
  bg: (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full",
        "bg-gradient-to-r opacity-70 blur-[20px] filter",
        colors
      )}
    />
  ),
}));

/** Fisher–Yates shuffle */
const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Card = (card: Tile) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

export default function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<Tile[]>([]);
  const [randomTiles2, setRandomTiles2] = useState<Tile[]>([]);
  const [randomTiles3, setRandomTiles3] = useState<Tile[]>([]);
  const [randomTiles4, setRandomTiles4] = useState<Tile[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
              {randomTiles1.map((tile, idx) => (
                <Card key={idx} {...tile} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((tile, idx) => (
                <Card key={idx} {...tile} />
              ))}
            </Marquee>
            <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
              {randomTiles3.map((tile, idx) => (
                <Card key={idx} {...tile} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((tile, idx) => (
                <Card key={idx} {...tile} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((tile, idx) => (
                <Card key={idx} {...tile} />
              ))}
            </Marquee>

            {/* Center badge uses the wolf too */}
            <div className="absolute z-10">
              <div className="mx-auto size-24 rounded-[2rem] border bg-background/10 p-3 shadow-2xl backdrop-blur-md dark:bg-background/10 lg:size-32">
                <img
                  src="/monwhooperlogo.png"
                  alt="Monwhooper wolf"
                  className="mx-auto size-16 lg:size-24 object-contain drop-shadow"
                />
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                <h1 className="text-3xl font-bold lg:text-4xl">
                  Stop wasting time on design.
                </h1>
                <p className="mt-2">
                  Start your 7-day free trial. No credit card required.
                </p>
                <a
                  href="/"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "group mt-4 rounded-[2rem] px-6"
                  )}
                >
                  Get Started
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl dark:bg-background" />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  );
}
