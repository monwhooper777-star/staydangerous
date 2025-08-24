"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type HeroVideoDialogProps = {
  className?: string;
  animationStyle?: "from-center" | "top-in-bottom-out" | string;
  videoSrc: string;                // accepts /public path or full YouTube URL
  thumbnailSrc: string;            // preview image
  thumbnailAlt?: string;
};

/**
 * Minimal, dependency-free video dialog.
 * - Click thumbnail to open modal
 * - Renders <video> for local MP4s, <iframe> for YouTube links
 * - Esc closes, backdrop click closes
 */
export default function HeroVideoDialog({
  className,
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Hero Video",
}: HeroVideoDialogProps) {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isYouTube =
    /youtube\.com|youtu\.be/i.test(videoSrc) || videoSrc.includes("embed");

  return (
    <div className={cn("relative", className)}>
      {/* Thumbnail trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full max-w-4xl overflow-hidden rounded-2xl"
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="block w-full object-cover"
        />
        {/* Play button */}
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center size-16 rounded-full bg-black/70 backdrop-blur transition group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-8 fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>

      {/* Dialog */}
      {open && (
        <div
          className={cn(
            "fixed inset-0 z-50 grid place-items-center bg-black/80 p-4",
            animationStyle === "from-center" && "animate-in fade-in zoom-in-95"
          )}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube ? (
              <iframe
                src={videoSrc}
                title="Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={videoSrc}
                controls
                className="h-full w-full"
                playsInline
                preload="metadata"
              />
            )}

            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-black hover:bg-white"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="size-5">
                <path
                  fill="currentColor"
                  d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.29-6.3z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
