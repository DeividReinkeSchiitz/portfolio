"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconConfig } from "./types";

interface FloatingIconsProps {
  icons: IconConfig[];
}

/**
 * Renders each icon with a staggered pop-in animation
 * followed by a continuous gentle floating (bob) effect.
 * Each icon has a slightly different timing to feel organic.
 */
export default function FloatingIcons({ icons }: FloatingIconsProps) {
  if (icons.length === 0) return null;

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={icon.className}
          initial={{ opacity: 0, scale: 0, rotate: -15 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: 0.7 + index * 0.15,
          }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, index % 2 === 0 ? 3 : -3, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={64}
              height={64}
              className="w-full h-auto"
              style={{ height: "auto" }}
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
