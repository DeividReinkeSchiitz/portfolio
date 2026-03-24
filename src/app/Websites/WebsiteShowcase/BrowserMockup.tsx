"use client";

import { motion } from "framer-motion";
import ImageWithSkeleton from "@/app/components/ImageWithSkeleton";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  accentColor: string;
}

export default function BrowserMockup({
  src,
  alt,
  url,
  accentColor,
}: BrowserMockupProps) {
  return (
    <div className="relative w-full">
      {/* Browser chrome */}
      <div className="rounded-t-xl bg-[var(--browser-chrome)] border border-white/[0.06] border-b-0 px-4 py-2.5 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-red)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-yellow)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-green)]" />
        </div>

        {/* URL bar */}
        {url && (
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[11px] text-white/30 truncate text-center font-mono">
              {url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="w-[52px]" />
      </div>

      {/* Browser viewport */}
      <motion.div
        className="relative rounded-b-xl overflow-hidden border border-white/[0.06] border-t-0 bg-[var(--browser-viewport)]"
        style={{ aspectRatio: "16/10" }}
      >
        <ImageWithSkeleton
          src={src}
          alt={alt}
          fill
          className="object-cover"
          quality={95}
        />

        {/* Subtle reflection */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(165deg, ${accentColor}08 0%, transparent 40%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
