"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  children: React.ReactNode;
}

/**
 * Hamburger toggle + animated dropdown for mobile viewports.
 * Renders children (NavItems) inside a sliding panel.
 */
export default function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-20"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1.5px] bg-white/70 rounded-full origin-center"
          transition={{ duration: 0.25 }}
        />
        <motion.span
          animate={
            isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
          }
          className="block w-5 h-[1.5px] bg-white/70 rounded-full"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1.5px] bg-white/70 rounded-full origin-center"
          transition={{ duration: 0.25 }}
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute top-full left-0 right-0 mt-2 mx-3 overflow-hidden"
          >
            <div
              className="flex flex-col items-center gap-1 py-3 px-2 rounded-2xl border border-white/[0.08] bg-[var(--surface-bg)]/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
