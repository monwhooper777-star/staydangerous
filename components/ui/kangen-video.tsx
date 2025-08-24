"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function KangenVideo() {
  return (
    <div className="relative mt-16">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="/monwhooper-kangen-water.mp4"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Kangen Water Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/monwhooper-kangen-water.mp4"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Kangen Water Video"
      />
    </div>
  );
}
