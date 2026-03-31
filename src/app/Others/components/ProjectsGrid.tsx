"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
}

export default function ProjectsGrid({
  projects,
  onOpenDetails,
}: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 grid-auto-rows-fr">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            className="h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.25,
              delay: index * 0.03,
              ease: "easeOut",
            }}
          >
            <ProjectCard
              project={project}
              index={index}
              onOpenDetails={onOpenDetails}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4 animate-bounce">🔍</div>
          <h3 className="text-2xl font-bold text-gray-400 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
}
