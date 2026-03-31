"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/app/components/PageHeader";
import { othersPageConfig, projectsData } from "./constants";
import { Project, ProjectCategory } from "./types";
import CategoryFilter from "./components/CategoryFilter";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectDetailModal from "@/app/Others/components/DetailModal";

export default function Others() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all",
  );

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      projectsData.map((project) => project.category),
    );
    return Array.from(uniqueCategories);
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen text-white relative">
      <PageHeader
        title={othersPageConfig.title}
        description={othersPageConfig.description}
        icons={othersPageConfig.icons}
      />

      <div className="mt-16 pb-16">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ProjectsGrid
          projects={filteredProjects}
          onOpenDetails={setSelectedProject}
        />
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
