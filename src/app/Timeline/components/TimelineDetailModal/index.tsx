"use client";

import { useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { createPortal } from "react-dom";
import { TimelineEvent } from "../../types";
import { getTypeColors } from "../../utils";
import HeroSection from "./Components/HeroSection";
import DetailsContent from "./Components/DetailsContent";
import { overlayVariants, contentVariants, itemVariants } from "./constants";

interface TimelineDetailModalProps {
  event: TimelineEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TimelineDetailModal({
  event,
  isOpen,
  onClose,
}: TimelineDetailModalProps) {
  const colors = event ? getTypeColors(event.type) : null;
  const scrollY = useMotionValue(0);
  const headerOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!event || !colors) return null;

  const hasDetails = !!(
    event.details?.fullDescription ||
    event.details?.responsibilities?.length ||
    event.details?.achievements?.length ||
    event.details?.links?.length
  );

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[var(--detail-overlay)]/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Accent ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${colors.solid}12, transparent 70%)`,
            }}
          />

          {/* Fixed header bar — fades in as user scrolls */}
          <motion.div
            style={{ opacity: headerOpacity }}
            className="fixed top-0 left-0 right-0 z-[110] bg-[var(--surface-bg)]/80 backdrop-blur-xl border-b border-white/[0.05] h-12"
          >
            <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-white/80">
                {event.title}
              </span>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors text-sm"
              >
                ESC
              </button>
            </div>
          </motion.div>

          {/* Scrollable content */}
          <div
            onScroll={(e) =>
              scrollY.set((e.target as HTMLDivElement).scrollTop)
            }
            className="relative z-[101] flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pt-12"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-16"
            >
              {/* Back button */}
              <motion.div variants={itemVariants} className="mb-8">
                <button
                  onClick={onClose}
                  className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  <span className="text-sm">Back to timeline</span>
                </button>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants}>
                <HeroSection event={event} colors={colors} />
              </motion.div>

              {hasDetails && (
                <motion.div variants={itemVariants}>
                  <DetailsContent event={event} colors={colors} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
