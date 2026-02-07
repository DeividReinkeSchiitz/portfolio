"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { TimelineEvent } from "../../types";
import { getTypeColors } from "../../utils";
import CloseButton from "./Components/CloseButton";
import HeroSection from "./Components/HeroSection";
import DetailsContent from "./Components/DetailsContent";
import GradientOverlay from "./Components/GradientOverlay";

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

  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            layout
            layoutId={`card-container-${event.id}`}
            className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <CloseButton onClose={onClose} />

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] scrollbar-hide pb-20">
              <HeroSection event={event} colors={colors} />
              {hasDetails && <DetailsContent event={event} colors={colors} />}
            </div>

            <GradientOverlay />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render in portal
  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
