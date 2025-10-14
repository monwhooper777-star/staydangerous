"use client";

import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const galleryImages = [
  { src: "/bike.png", alt: "Photo 1" },
  { src: "/mwsdk.png", alt: "Stay Dangerous Mark 1" },
  { src: "/iphone.png", alt: "Monwhooper iPhone Mockup" },
  { src: "/holder.png", alt: "Holder" },
  { src: "/hw1.png", alt: "Handwriting 1" },
  { src: "/mwsdk.png", alt: "Stay Dangerous Mark 2" }, // show it twice, on purpose
  // add/remove to match exactly what's in /public
];

export default function MWInfiniteGallery() {
  return (
    <main className="min-h-screen h-full w-full bg-black text-white">
      <InfiniteGallery
        images={galleryImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={galleryImages.length} // show everything you passed
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
