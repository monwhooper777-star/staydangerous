"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function KangenVideo() {
  return (
    <div className="relative mt-16">
      {/* Light mode video */}
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="/kangen-water.mp4"  // 👈 points to /public/kangen-water.mp4
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Kangen Water Video"
      />

      {/* Dark mode video */}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/kangen-water.mp4"  // 👈 same file
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Kangen Water Video"
      />
    </div>
  );
}
