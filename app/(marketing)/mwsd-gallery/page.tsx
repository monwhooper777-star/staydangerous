// app/(marketing)/mwsd-gallery/page.tsx
"use client";

import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";

// ⚠️ Pick ONE of these two component paths based on what actually exists.
// 1) If your gallery is at components/ui/3d-gallery-photography.tsx (DEFAULT export), use this:
const GalleryUI = dynamic(
  () => import("@/components/ui/3d-gallery-photography").then(m => m.default ?? m),
  { ssr: false, loading: () => <div className="text-white">Loading gallery…</div> }
);

// 2) If your gallery is actually components/MWInfiniteGallery.tsx (DEFAULT export), then:
// const GalleryUI = dynamic(
//   () => import("@/components/MWInfiniteGallery").then(m => m.default ?? m),
//   { ssr: false, loading: () => <div className="text-white">Loading gallery…</div> }
// );

export default function MwsdGalleryPage() {
  const sampleImages = [
    { src: "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60", alt: "Image 1" },
    { src: "https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1110", alt: "Image 2" },
    { src: "https://images.unsplash.com/photo-1754769440490-2eb64d715999?q=80&w=1110", alt: "Image 3" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* VISUAL PROBE: if you don't see this box, the page isn't rendering at all */}
      <div className="mx-auto my-6 w-fit rounded-md border border-white/20 px-3 py-1 text-xs">
        mwsd-gallery mounted
      </div>

      <div className="container mx-auto px-4 py-8">
        <ErrorBoundary>
          <GalleryUI images={sampleImages} />
        </ErrorBoundary>
      </div>
    </main>
  );
}
