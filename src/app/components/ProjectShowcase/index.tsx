"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { ShowcaseProject } from "./types";

interface ProjectShowcaseProps {
  projects: ShowcaseProject[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeProject, setActiveProject] = useState<ShowcaseProject | null>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleOpen = useCallback((project: ShowcaseProject, index: number) => {
    setActiveProject(project);
    setActiveIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setActiveProject(null);
    setActiveIndex(-1);
  }, []);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      const newIndex =
        direction === "next"
          ? (activeIndex + 1) % projects.length
          : (activeIndex - 1 + projects.length) % projects.length;
      setActiveProject(projects[newIndex]);
      setActiveIndex(newIndex);
    },
    [activeIndex, projects],
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
      {/* Grid of project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleOpen(project, index)}
            isActive={activeProject?.id === project.id}
          />
        ))}
      </div>

      {/* Full-page detail overlay with transitions */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <ProjectDetail
            key={activeProject.id}
            project={activeProject}
            onClose={handleClose}
            onNavigate={handleNavigate}
            currentIndex={activeIndex}
            totalProjects={projects.length}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
