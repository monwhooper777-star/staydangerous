"use client";

import dynamic from "next/dynamic";
import ClientBoundary from "@/components/ClientBoundary";

const sampleImages = [
  { src: "/bike.png", alt: "Local 1" },
  { src: "/SDhero.png", alt: "Local 2" },
  { src: "/phone.png", alt: "Local 3" },
  { src: "/holder.png", alt: "Local 4" },
];

const GalleryUI = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  { ssr: false, loading: () => <div className="text-white p-4">Loading gallery…</div> }
);

export default function MwsdGalleryPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <ClientBoundary>
        <GalleryUI
          images={sampleImages}
          speed={1.2}
          zSpacing={3}
          visibleCount={12}
          falloff={{ near: 0.8, far: 14 }}
          className="h-screen w-full overflow-hidden"
        />
      </ClientBoundary>

      {/* Bottom instructions (non-interactive; won't block scroll/touch) */}
      <div className="pointer-events-none fixed bottom-10 left-0 right-0 z-50 text-center font-mono uppercase text-[11px] font-semibold">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </main>
  );
}
