"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  projectName: string;
  accentColor: string;
}

export default function ImageGallery({
  images,
  projectName,
  accentColor,
}: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeImage]}
              alt={`${projectName} screenshot ${activeImage + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient color */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}, transparent 70%)`,
          }}
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden border transition-all duration-200 ${
                i === activeImage
                  ? "border-white/20 scale-105"
                  : "border-white/[0.06] opacity-50 hover:opacity-80"
              }`}
              style={
                i === activeImage
                  ? { boxShadow: `0 0 0 2px ${accentColor}40` }
                  : undefined
              }
            >
              <Image
                src={img}
                alt={`${projectName} thumbnail ${i + 1}`}
                fill
                loading="lazy"
                sizes="80px"
                className="object-cover"
                quality={60}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
