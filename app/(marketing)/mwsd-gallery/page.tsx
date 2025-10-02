"use client";

import React from "react";
import dynamic from "next/dynamic";

const sampleImages = [
  { src: "/bike.png", alt: "Local 1" },
  { src: "/SDhero.png", alt: "Local 2" },
  { src: "/phone.png", alt: "Local 3" },
  { src: "/holder.png", alt: "Local 4" },
];

// Support both default and named export (e.g., InfiniteGallery)
const GalleryUI = dynamic(async () => {
  const mod = await import("@/components/ui/3d-gallery-photography");
  return (mod as any).default ?? (mod as any).InfiniteGallery;
}, {
  ssr: false,
  loading: () => <div className="text-white p-4">Loading gallery…</div>,
});

// Minimal client-side error boundary (prevents total white screen)
class GalleryBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg">Gallery failed to load.</p>
            <p className="text-sm opacity-70 mt-2">Check client export & WebGL support.</p>
          </div>
        </div>
      );
    }
    return this.props.children as any;
  }
}

export default function MwsdGalleryPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <GalleryBoundary>
        <GalleryUI
          images={sampleImages}
          speed={1.2}
          zSpacing={3}
          visibleCount={12}
          falloff={{ near: 0.8, far: 14 }}
          className="h-[100svh] w-full overflow-hidden"
        />
      </GalleryBoundary>

      {/* Non-blocking footer instructions */}
      <div className="pointer-events-none fixed bottom-10 left-0 right-0 z-50 text-center font-mono uppercase text-[11px] font-semibold">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </main>
  );
}
