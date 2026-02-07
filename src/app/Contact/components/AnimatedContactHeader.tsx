"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedContactHeaderProps {
  locationText: string;
  title: string;
  description: string;
  locationIcon: string;
  globeIcon: string;
}

export default function AnimatedContactHeader({
  locationText,
  title,
  description,
  locationIcon,
  globeIcon,
}: AnimatedContactHeaderProps) {
  return (
    <div className="mt-20 flex w-full items-center text-center justify-center flex-col max-w-2xl px-4">
      {/* Location badge with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex items-center justify-center mb-8 relative"
      >
        {/* Glow background */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--blue) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Badge content */}
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src={locationIcon}
              alt="location"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </motion.div>

          <span
            className="text-xs sm:text-sm font-medium text-white/70 [&>span]:text-[var(--blue)] [&>span]:font-semibold"
            dangerouslySetInnerHTML={{ __html: locationText }}
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src={globeIcon}
              alt="globe"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Title with letter-by-letter reveal */}
      <div className="relative mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-bold text-white relative z-10"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.3,
                delay: 0.3 + i * 0.03,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent origin-center"
          style={{ width: "80%" }}
        />
      </div>

      {/* Description with fade-in and highlight pulse */}
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.6,
          delay: 1,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl [&>span]:text-[var(--blue)] [&>span]:font-semibold"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--blue)]"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
