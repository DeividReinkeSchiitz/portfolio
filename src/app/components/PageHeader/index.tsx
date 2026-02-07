"use client";

import { motion } from "framer-motion";
import { PageHeaderProps } from "./types";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedDescription from "./AnimatedDescription";
import FloatingIcons from "./FloatingIcons";
import GlowLine from "./GlowLine";

export default function PageHeader({
  title,
  description,
  icons = [],
}: PageHeaderProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center justify-center mt-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex relative items-center text-center justify-center flex-col mb-10 max-w-xl">
        {/* Ambient glow behind header */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(var(--blue-RGB), 0.06), transparent 70%)",
          }}
        />

        {/* Floating icons with spring + continuous bob */}
        <FloatingIcons icons={icons} />

        {/* Title — word-by-word stagger reveal */}
        <div className="flex items-center justify-center w-full">
          <AnimatedTitle html={title} />
        </div>

        {/* Glow divider line */}
        <GlowLine />

        {/* Description — smooth fade-up after title */}
        <AnimatedDescription html={description} />
      </div>
    </motion.div>
  );
}
