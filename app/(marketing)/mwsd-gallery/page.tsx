"use client";
import dynamic from "next/dynamic";

const GalleryUI = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  { ssr: false, loading: () => <div className="text-white p-4">Loading gallery…</div> }
);

export default function MwsdGalleryPage() {
  // Use only images you have inside /public
  const sampleImages = [
    { src: "/bike.png", alt: "Bike" },
    { src: "/monwhooper-logo.png", alt: "Logo" },
    { src: "/wakewater.png", alt: "WakeWater" }, // add more of your local files here
  ];

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Gallery */}
      <div className="container mx-auto px-4 pb-16 relative">
        <GalleryUI images={sampleImages} />

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/10 uppercase tracking-widest">
            MWSD GALLERY
          </h1>
        </div>
      </div>
    </main>
  );
}
