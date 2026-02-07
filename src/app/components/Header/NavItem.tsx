"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  index: number;
}

/**
 * A single navigation link with:
 * - Staggered fade-in entrance
 * - Active state sliding pill (via layoutId)
 * - Hover micro-interaction (glow + lift)
 */
export default function NavItem({
  href,
  label,
  isActive,
  index,
}: NavItemProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3 + index * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      <Link
        href={href}
        className={`
          relative z-10 block px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl
          text-xs sm:text-sm font-medium tracking-wide
          transition-colors duration-250
          ${isActive ? "text-[var(--blue)]" : "text-white/60 hover:text-white/90"}
        `}
      >
        {label}
      </Link>

      {/* Hover glow dot */}
      {!isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/40 transition-colors duration-300" />
      )}
    </motion.div>
  );
}
