"use client";

import dynamic from "next/dynamic";

function Boundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (e: any) {
    console.error(e);
    return (
      <div className="rounded-md border border-white/20 bg-black/70 p-4 text-sm text-white">
        Something went wrong rendering this section.
      </div>
    );
  }
}

const GalleryUI = dynamic(
  () =>
    import("@/components/ui/3d-gallery-photography").then(
      (m) => m.default ?? m
    ),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading gallery…</div>,
  }
);

export default function MwsdGalleryPage() {
  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1110",
      alt: "Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1754769440490-2eb64d715999?q=80&w=1110",
      alt: "Image 3",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto my-6 w-fit rounded-md border border-white/20 px-3 py-1 text-xs">
        mwsd-gallery mounted
      </div>
      <div className="container mx-auto px-4 py-8">
        <Boundary>
          <GalleryUI images={sampleImages} />
        </Boundary>
      </div>
    </main>
  );
}
