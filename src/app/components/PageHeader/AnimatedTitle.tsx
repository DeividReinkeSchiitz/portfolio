"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  html: string;
}

/**
 * Splits the title HTML into words and animates each one in
 * with a staggered fade-up effect. Preserves <span> wrapping
 * so accent-colored words still render correctly.
 */
export default function AnimatedTitle({ html }: AnimatedTitleProps) {
  // Split into tokens, keeping HTML tags attached to their word
  const tokens = html.match(/(<[^>]+>[^<]*<\/[^>]+>|[^\s]+)/g) || [];

  return (
    <motion.h1
      className="md:text-4xl sm:text-2xl text-xl font-bold text-[var(--text-primary)] flex flex-wrap items-center justify-center gap-x-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          className="inline-block [&>span]:text-[var(--blue)] [&>span]:font-bold"
          variants={{
            hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
              },
            },
          }}
          dangerouslySetInnerHTML={{ __html: token }}
        />
      ))}
    </motion.h1>
  );
}
