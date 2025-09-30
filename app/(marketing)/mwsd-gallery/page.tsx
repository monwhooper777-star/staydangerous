"use client";
import dynamic from "next/dynamic";

const GalleryUI = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  { ssr: false, loading: () => <div className="text-white p-4">Loading gallery…</div> }
);

export default function MwsdGalleryPage() {
  const sampleImages = [
    { src: "/bike.png", alt: "Bike 1" }, // must exist in /public
    { src: "/bike.png", alt: "Bike 2" },
    { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1280&q=60&auto=format&fit=crop", alt: "Unsplash 1" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto my-6 w-fit rounded border border-white/20 px-3 py-1 text-xs">
        mwsd-gallery mounted
      </div>
      <div className="container mx-auto px-4 pb-16">
        <GalleryUI images={sampleImages} />
      </div>
    </main>
  );
}
