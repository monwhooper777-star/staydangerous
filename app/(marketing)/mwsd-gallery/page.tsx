"use client";
import dynamic from "next/dynamic";
import ClientBoundary from "@/components/ClientBoundary";

// IMPORTANT: use images that exist in /public to avoid CORS while we test.
// If you have /public/bike.png in your repo (you showed it in VS Code), use it.
// Swap these src values for any files you actually have in /public.
const sampleImages = [
  { src: "/bike.png", alt: "Local 1" },
  { src: "/monwhooper-logo.png", alt: "Local 2" },   // replace with real file
  { src: "/hero.jpg", alt: "Local 3" },              // replace with real file
];

const GalleryUI = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  { ssr: false, loading: () => <div className="text-white p-4">Loading gallery…</div> }
);

export default function MwsdGalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto my-6 w-fit rounded border border-white/20 px-3 py-1 text-xs">
        mwsd-gallery mounted
      </div>
      <div className="container mx-auto px-4 pb-16">
        <ClientBoundary>
          <GalleryUI images={sampleImages} />
        </ClientBoundary>
      </div>
    </main>
  );
}
