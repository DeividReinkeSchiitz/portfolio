"use client";

import { useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ProjectDetailProps } from "./types";
import { overlayVariants, contentVariants, itemVariants } from "./constants";
import SectionTitle from "./SectionTitle";
import TechStackGrid from "../TechStackGrid";
import ImageGallery from "../ImageGallery";

export default function ProjectDetail({
  project,
  onClose,
  onNavigate,
  currentIndex,
  totalProjects,
}: ProjectDetailProps) {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate("next");
      if (e.key === "ArrowLeft") onNavigate("prev");
    },
    [onClose, onNavigate],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
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
          background: `radial-gradient(ellipse at center, ${project.color}12, transparent 70%)`,
        }}
      />

      {/* Fixed header bar */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-[110] bg-[var(--surface-bg)]/80 backdrop-blur-xl border-b border-white/[0.05] h-12"
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={project.icon}
              alt={project.name}
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-medium text-white/80">
              {project.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            ESC
          </button>
        </div>
      </motion.div>

      {/* Scrollable content */}
      <div className="relative z-[101] flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pt-12">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-32"
        >
          {/* Close & Navigation bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-8"
          >
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
              <span className="text-sm">Back to projects</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate("prev")}
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-xs text-white/30 tabular-nums min-w-[3rem] text-center">
                {currentIndex + 1} / {totalProjects}
              </span>
              <button
                onClick={() => onNavigate("next")}
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Hero section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-start gap-5 mb-6">
              <motion.div
                layoutId={`card-icon-${project.id}`}
                className="w-16 h-16 rounded-2xl overflow-hidden bg-white/[0.06] backdrop-blur-md p-2.5 flex items-center justify-center border border-white/[0.08] shrink-0"
              >
                <Image
                  src={project.icon}
                  alt={project.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.h1
                  layoutId={`card-title-${project.id}`}
                  className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight"
                >
                  {project.name}
                </motion.h1>
                <motion.p
                  layoutId={`card-tagline-${project.id}`}
                  className="text-base sm:text-lg text-white/50 max-w-2xl"
                >
                  {project.tagline}
                </motion.p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/80 text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
                >
                  <Image src="github.svg" alt="GitHub" width={16} height={16} />
                  Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: `${project.color}20`,
                    borderColor: `${project.color}30`,
                    color: project.color,
                    borderWidth: 1,
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Image gallery */}
          {project.images.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <ImageGallery
                images={project.images}
                projectName={project.name}
                accentColor={project.color}
              />
            </motion.div>
          )}

          {/* Two-column info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
            {/* Left: Description + Role */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <SectionTitle>About the Project</SectionTitle>
              <div
                className="text-base leading-relaxed text-white/60 [&>span]:text-[var(--blue)] [&>span]:font-medium"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              {/* Role badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-sm text-white/50">Role:</span>
                <span className="text-sm text-white/80 font-medium">
                  {project.role}
                </span>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <SectionTitle>Highlights</SectionTitle>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-sm text-white/55 leading-relaxed">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div variants={itemVariants}>
            <SectionTitle>Tech Stack</SectionTitle>
            <TechStackGrid
              stacks={project.stacks}
              accentColor={project.color}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom navigation bar */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[110] bg-[var(--surface-bg)]/80 backdrop-blur-xl border-t border-white/[0.05]"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate("prev")}
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm hidden sm:inline">Previous</span>
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalProjects }).map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 h-1.5" : "w-1.5 h-1.5 bg-white/20"
                }`}
                style={
                  i === currentIndex
                    ? { backgroundColor: project.color }
                    : undefined
                }
              />
            ))}
          </div>

          <button
            onClick={() => onNavigate("next")}
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <span className="text-sm hidden sm:inline">Next</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
