"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Project } from "../../types";
import { getCategoryColors } from "../../utils";
import CloseButton from "./Components/CloseButton";
import ModalHero from "./Components/ModalHero";
import ModalContent from "./Components/ModalContent";
import GradientOverlay from "./Components/GradientOverlay";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const colors = project ? getCategoryColors(project.category) : null;

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

  if (!project || !colors) return null;

  const hasDetails = !!(
    project.details?.fullDescription ||
    project.details?.features?.length ||
    project.details?.challenges?.length ||
    project.details?.learnings?.length ||
    project.details?.links?.length
  );

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, var(--modal-gradient-start) 0%, var(--modal-gradient-end) 100%)",
            }}
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          >
            <CloseButton onClose={onClose} />

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <ModalHero project={project} colors={colors} />
              {hasDetails && <ModalContent project={project} colors={colors} />}
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
