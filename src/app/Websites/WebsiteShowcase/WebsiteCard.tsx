"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ImageWithSkeleton from "@/app/components/ImageWithSkeleton";
import { WebShowcaseProject } from "./types";

interface WebsiteCardProps {
  project: WebShowcaseProject;
  index: number;
  onClick: () => void;
  isActive: boolean;
}

export default function WebsiteCard({
  project,
  index,
  onClick,
  isActive,
}: WebsiteCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      id={project.id}
      layout
      layoutId={`web-card-${project.id}`}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      onClick={onClick}
      className={`
        group relative cursor-pointer w-full
        ${isActive ? "opacity-0 pointer-events-none" : ""}
      `}
    >
      <div
        className={`
          flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
          items-center gap-6 md:gap-10 p-4 sm:p-6
          rounded-3xl border border-white/[0.04] bg-white/[0.01]
          hover:border-white/[0.08] hover:bg-white/[0.02]
          transition-all duration-500
        `}
      >
        {/* Image side — browser preview */}
        <motion.div
          layoutId={`web-image-${project.id}`}
          className="relative w-full md:w-3/5 shrink-0"
        >
          {/* Browser chrome mini */}
          <div className="rounded-t-lg bg-[var(--dark-chrome)] border border-white/[0.06] border-b-0 px-3 py-1.5 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 max-w-[200px] mx-auto">
              <div className="bg-white/[0.04] rounded px-2 py-0.5 text-[9px] text-white/20 truncate text-center font-mono">
                {project.live.replace(/^https?:\/\//, "")}
              </div>
            </div>
          </div>

          <div
            className="relative rounded-b-lg overflow-hidden border border-white/[0.06] border-t-0"
            style={{ aspectRatio: "16/10" }}
          >
            <ImageWithSkeleton
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${project.color}10, transparent 60%)`,
              }}
            />
          </div>
        </motion.div>

        {/* Content side */}
        <div className="flex-1 min-w-0 py-2 text-left">
          <motion.h3
            layoutId={`web-title-${project.id}`}
            className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight"
          >
            {project.name}
          </motion.h3>

          <motion.p
            layoutId={`web-tagline-${project.id}`}
            className="text-sm text-white/40 mb-4 leading-relaxed"
          >
            {project.tagline}
          </motion.p>

          {/* Tech pills mini */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stacks.map((stack) => (
              <span
                key={stack.name}
                className="text-[10px] px-2 py-0.5 rounded-full border border-white/[0.06] text-white/40 bg-white/[0.02]"
              >
                {stack.name}
              </span>
            ))}
          </div>

          {/* CTA hint */}
          <div className="flex items-center gap-2 text-white/25 group-hover:text-white/50 transition-colors duration-300">
            <span className="text-xs font-medium tracking-wide uppercase">
              View project
            </span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
