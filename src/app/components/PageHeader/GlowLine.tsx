"use client";

import { motion } from "framer-motion";

/**
 * An animated decorative line that expands horizontally
 * beneath the title, adding a polished accent.
 * Uses the --blue CSS variable as the glow color.
 */
export default function GlowLine() {
  return (
    <motion.div
      className="relative h-[1px] mt-5 mb-1"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        width: { duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const },
        opacity: { duration: 0.4, delay: 0.45 },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-20 blur-sm" />
    </motion.div>
  );
}
