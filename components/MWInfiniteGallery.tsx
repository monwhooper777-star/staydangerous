"use client";

import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const galleryImages = [
  { src: "/public/bike.jpg", alt: "Photo 1" },
  { src: "/mwsd/mockup1.jpg", alt: "Mockup 1" },
  { src: "/mwsd/mockup2.jpg", alt: "Mockup 2" },
  { src: "/mwsd/photo2.jpg", alt: "Photo 2" },
  { src: "/mwsd/mockup3.jpg", alt: "Mockup 3" },
  { src: "/mwsd/photo3.jpg", alt: "Photo 3" },
];

export default function MWInfiniteGallery() {
  return (
    <main className="min-h-screen h-full w-full bg-black text-white">
      <InfiniteGallery
        images={galleryImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />

      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
          <span className="italic">MWSD – Gallery</span>
        </h1>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </main>
  );
}
