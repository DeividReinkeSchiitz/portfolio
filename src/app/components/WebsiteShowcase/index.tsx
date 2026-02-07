"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import WebsiteCard from "./WebsiteCard";
import WebsiteDetail from "./WebsiteDetail";
import { WebShowcaseProject } from "./types";

interface WebsiteShowcaseProps {
  projects: WebShowcaseProject[];
}

export default function WebsiteShowcase({ projects }: WebsiteShowcaseProps) {
  const [activeProject, setActiveProject] = useState<WebShowcaseProject | null>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleOpen = useCallback(
    (project: WebShowcaseProject, index: number) => {
      setActiveProject(project);
      setActiveIndex(index);
    },
    [],
  );

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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
      {/* Stacked horizontal cards */}
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <WebsiteCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleOpen(project, index)}
            isActive={activeProject?.id === project.id}
          />
        ))}
      </div>

      {/* Slide-in detail panel */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <WebsiteDetail
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
