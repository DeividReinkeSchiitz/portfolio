"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WebShowcaseProject } from "./types";
import BrowserMockup from "./BrowserMockup";
import WebsiteTechPills from "./WebsiteTechPills";

interface WebsiteDetailProps {
  project: WebShowcaseProject;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  currentIndex: number;
  totalProjects: number;
}

/* ── Slide-in from right (horizontal personality) ───────────────────── */
const panelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.55, ease: [0.32, 0.72, 0, 1] as const },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      x: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
      opacity: { duration: 0.25 },
    },
  },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export default function WebsiteDetail({
  project,
  onClose,
  onNavigate,
  currentIndex,
  totalProjects,
}: WebsiteDetailProps) {
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
    <>
      {/* Backdrop — click to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.05 } }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slides in from the right */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-y-0 right-0 z-[101] w-full lg:w-[85vw] xl:w-[80vw] bg-[var(--card-bg)] border-l border-white/[0.05] shadow-2xl overflow-hidden"
      >
        {/* Accent gradient */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, ${project.color}10, transparent 70%)`,
          }}
        />

        {/* Close + nav header */}
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/[0.04]">
          <button
            onClick={onClose}
            className="group flex items-center gap-2.5 text-white/35 hover:text-white transition-colors"
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
            <span className="text-sm hidden sm:inline">Close</span>
          </button>

          {/* Project counter + arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("prev")}
              className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:border-white/15 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
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

            {/* Progress bar */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalProjects }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-400"
                  style={{
                    width: i === currentIndex ? 24 : 8,
                    backgroundColor:
                      i === currentIndex
                        ? project.color
                        : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => onNavigate("next")}
              className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:border-white/15 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
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

          <span className="text-[10px] text-white/20 tracking-widest uppercase hidden sm:block">
            ESC to close
          </span>
        </div>

        {/* Scrollable body */}
        <div className="relative z-10 h-[calc(100%-64px)] overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="px-6 sm:px-10 py-8 sm:py-12">
            {/* Split-screen: Browser + Info */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-16">
              {/* Left — Browser mockup (large) */}
              <motion.div
                layoutId={`web-image-${project.id}`}
                className="w-full lg:w-[58%] shrink-0"
                {...fadeUp(0.1)}
              >
                <BrowserMockup
                  src={project.image}
                  alt={project.name}
                  url={project.live}
                  accentColor={project.color}
                />
              </motion.div>

              {/* Right — Editorial content */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                {/* Title + tagline */}
                <motion.h1
                  layoutId={`web-title-${project.id}`}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 leading-[1.1]"
                >
                  {project.name}
                </motion.h1>

                <motion.p
                  layoutId={`web-tagline-${project.id}`}
                  className="text-base sm:text-lg text-white/40 mb-6 leading-relaxed"
                >
                  {project.tagline}
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  {...fadeUp(0.25)}
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.03]"
                      style={{
                        backgroundColor: `${project.color}18`,
                        borderWidth: 1,
                        borderColor: `${project.color}25`,
                        color: project.color,
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
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      Visit Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-200 hover:scale-[1.03]"
                    >
                      <Image
                        src="github.svg"
                        alt="GitHub"
                        width={15}
                        height={15}
                      />
                      Source Code
                    </a>
                  )}
                </motion.div>

                {/* Role badge */}
                <motion.div {...fadeUp(0.3)} className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-xs text-white/40">Role</span>
                    <span className="text-xs text-white/70 font-medium">
                      {project.role}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Description section — full width editorial */}
            <motion.div {...fadeUp(0.35)} className="mb-14">
              <SectionLabel color={project.color}>About</SectionLabel>
              <div
                className="text-base leading-[1.8] text-white/55 max-w-3xl [&>span]:text-[var(--blue)] [&>span]:font-medium"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </motion.div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <motion.div {...fadeUp(0.4)} className="mb-14">
                <SectionLabel color={project.color}>Highlights</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 shrink-0">
                        <div
                          className="w-5 h-[1.5px] rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                      <span className="text-sm text-white/50 leading-relaxed">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech stack */}
            <motion.div {...fadeUp(0.5)}>
              <SectionLabel color={project.color}>Built With</SectionLabel>
              <WebsiteTechPills
                stacks={project.stacks}
                accentColor={project.color}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ── Section label helper ───────────────────────────────────────────── */
function SectionLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-4 h-[2px] rounded-full"
        style={{ backgroundColor: color }}
      />
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-semibold">
        {children}
      </h2>
    </div>
  );
}
