"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface InfiniteGalleryProps {
  images: GalleryImage[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  className?: string;
}

export default function InfiniteGallery({
  images,
  speed = 1,
  zSpacing = 3,
  visibleCount = 12,
  falloff = { near: 0.8, far: 14 },
  className,
}: InfiniteGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000 / speed);

    return () => clearInterval(interval);
  }, [images.length, speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((img, i) => {
        const z = ((i - index + images.length) % images.length) * zSpacing;
        const opacity = Math.max(0, 1 - z / falloff.far);

        return (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: images.length - i,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={img.src}
              alt={img.alt || `Image ${i}`}
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
