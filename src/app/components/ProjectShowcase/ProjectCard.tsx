"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShowcaseProject } from "./types";

interface ProjectCardProps {
  project: ShowcaseProject;
  index: number;
  onClick: () => void;
  isActive: boolean;
}

export default function ProjectCard({
  project,
  index,
  onClick,
  isActive,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      layoutId={`card-container-${project.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      className={`
        group relative cursor-pointer rounded-2xl overflow-hidden
        border border-white/[0.06] bg-white/[0.02]
        hover:border-white/[0.12] hover:bg-white/[0.04]
        transition-colors duration-300
        ${isActive ? "opacity-0 pointer-events-none" : ""}
      `}
    >
      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)`,
        }}
      />

      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <div className="h-full w-full">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-bg)] via-transparent to-transparent" />

        {/* Icon badge */}
        <motion.div
          layoutId={`card-icon-${project.id}`}
          className="absolute bottom-3 left-4 w-10 h-10 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md p-1.5 flex items-center justify-center border border-white/10"
        >
          <Image
            src={project.icon}
            alt={project.name}
            width={28}
            height={28}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 pb-6">
        <motion.h3
          layoutId={`card-title-${project.id}`}
          className="text-lg font-semibold text-white mb-1"
        >
          {project.name}
        </motion.h3>

        <motion.p
          layoutId={`card-tagline-${project.id}`}
          className="text-sm text-white/50 line-clamp-1 mb-4"
        >
          {project.tagline}
        </motion.p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stacks.slice(0, 4).map((stack) => (
            <span
              key={stack.name}
              className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/60 bg-white/[0.03]"
            >
              {stack.name}
            </span>
          ))}
          {project.stacks.length > 4 && (
            <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40 bg-white/[0.02]">
              +{project.stacks.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Explore indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <svg
            className="w-4 h-4 text-white/70"
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
    </motion.div>
  );
}
