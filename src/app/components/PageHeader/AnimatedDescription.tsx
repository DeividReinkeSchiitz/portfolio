"use client";

import { motion } from "framer-motion";

interface AnimatedDescriptionProps {
  html: string;
}

/**
 * Animates the description with a smooth fade-up + blur reveal
 * that follows after the title finishes staggering in.
 */
export default function AnimatedDescription({
  html,
}: AnimatedDescriptionProps) {
  return (
    <motion.p
      className="text-center sm:text-xl text-base mt-3 mx-10 font-normal text-[var(--text-primary)] [&>span]:text-[var(--blue)] [&>span]:font-medium"
      initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.7,
        delay: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
