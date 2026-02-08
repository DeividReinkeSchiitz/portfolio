"use client";

import { motion, type Variants } from "framer-motion";
import { descriptionLines, homeContent, ANIMATION_DELAYS } from "../constants";
import StatusBadge from "./StatusBadge";
import TextScramble from "./TextScramble";

const lineVariants: Variants = {
  hidden: {},
  visible: (lineIndex: number) => ({
    transition: {
      staggerChildren: ANIMATION_DELAYS.wordStagger,
      delayChildren:
        ANIMATION_DELAYS.descriptionStart +
        lineIndex * ANIMATION_DELAYS.descriptionLineGap,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(10px)",
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HomeTitle() {
  return (
    <div className="flex flex-col pt-28 items-center justify-center flex-[3] font-light relative z-10">
      <StatusBadge />

      {/* Greeting — scramble/decode reveal */}
      <TextScramble
        text={homeContent.greeting}
        className="font-light bg-gradient-to-r from-pink-50 via-white/90 to-[var(--blue)] inline-block text-transparent bg-clip-text text-lg sm:text-xl tracking-wide"
        delay={ANIMATION_DELAYS.greeting}
        speed={30}
      />

      {/* Description — staggered word-by-word reveal */}
      <div className="mt-6 flex flex-col items-center gap-2">
        {descriptionLines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-3"
            initial="hidden"
            animate="visible"
            custom={lineIndex}
            variants={lineVariants}
          >
            {line.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className={`md:text-6xl text-4xl font-bold inline-block ${
                  word.highlighted
                    ? "shimmer-text text-glow"
                    : "text-[var(--text-primary)]"
                }`}
                variants={wordVariants}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
