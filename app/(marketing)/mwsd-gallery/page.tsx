"use client";

import React, { ComponentType } from "react";
import dynamic from "next/dynamic";

// ---- Props the gallery component expects (minimal + flexible) ----
type GalleryProps = {
  images: { src: string; alt?: string }[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  className?: string;
  style?: React.CSSProperties;
  // tolerate extra config if the component supports it
  fadeSettings?: any;
  blurSettings?: any;
};

// ---- Local sample images ----
const sampleImages: GalleryProps["images"] = [
  { src: "/bike.png", alt: "Local 1" },
  { src: "/SDhero.png", alt: "Local 2" },
  { src: "/iphone.png", alt: "Monwhooper iPhone Mockup" }, // 👈 added image
  { src: "/holder.png", alt: "Local 4" },
  { src: "/mwsdk.png", alt: "Local 5" },
  { src: "/hw1.png", alt: "Local 6" },
  { src: "/digi.png", alt: "Local 7" },
  { src: "/hw2.png", alt: "Local 8" },
  { src: "/flask.png", alt: "Local 9" },
  { src: "/mwdk.png", alt: "Local 10" },
  { src: "/mwsdk.png", alt: "Local 11" },
];

// ---- Typed dynamic import: supports default OR named export ----
type GalleryModule = {
  default?: ComponentType<GalleryProps>;
  InfiniteGallery?: ComponentType<GalleryProps>;
};

const GalleryUI = dynamic<GalleryProps>(
  async () => {
    const mod = (await import("@/components/ui/3d-gallery-photography")) as GalleryModule;
    return (mod.default ?? mod.InfiniteGallery)!;
  },
  { ssr: false, loading: () => <div className="text-white p-4">Loading gallery…</div> }
);

// ---- Error boundary so the app never white-screens ----
class GalleryBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
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

// ---- Page component ----
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
