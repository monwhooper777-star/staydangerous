"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvatarBadge from "@/components/ui/AvatarBadge";
import { WaitlistDialog } from "@/components/WaitlistForm";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["hydrating", "mind-opening", "innovative", "different", "holistic"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          {/* Top button */}
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              ATTENTION California. <MoveRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Main headline */}
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center text-5xl font-normal tracking-tighter md:text-7xl">
              {/* White gradient clipped to text (Safari-safe) */}
              <span
                className="
                  bg-gradient-to-b from-white via-white/85 to-white/45
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_6px_rgba(255,255,255,0.12)]
                "
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                This is something
              </span>

              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              More and more people are becoming aware of the importance of
              having access to high-quality water—from entire communities such
              as WakeWaterCo, to medical professionals, notable figures,
              celebrities, and everyday people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3">
            <Button size="lg" variant="outline" className="gap-4">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>

            {/* FREE Trials opens the popup */}
            <WaitlistDialog>
              <Button size="lg" className="gap-4">
                FREE Trials <MoveRight className="h-4 w-4" />
              </Button>
            </WaitlistDialog>
          </div>

          {/* Subtle credibility section */}
          <div className="mt-6">
            <AvatarBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
