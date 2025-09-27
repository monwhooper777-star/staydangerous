// app/(marketing)/mwsd-gallery/page.tsx
import InfiniteGallery from "@/components/ui/3d-gallery-photography";

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
    <main className="min-h-screen flex items-center justify-center bg-black">
      <InfiniteGallery images={sampleImages} />
    </main>
  );
}
