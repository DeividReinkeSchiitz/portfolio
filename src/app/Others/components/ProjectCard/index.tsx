"use client";

import Text from "@/app/components/Text";
import { ProjectCardProps } from "../../types";
import { getCategoryColors } from "../../utils";
import ProjectImage from "./Components/ProjectImage";
import ProjectHeader from "./Components/ProjectHeader";
import ProjectLinks from "./Components/ProjectLinks";
import TechnologyTags from "./Components/TechnologyTags";
import DetailsIndicator from "./Components/DetailsIndicator";

export default function ProjectCard({
  project,
  onOpenDetails,
}: ProjectCardProps) {
  const colors = getCategoryColors(project.category);
  const hasDetails = !!(
    project.details?.fullDescription ||
    project.details?.features?.length ||
    project.details?.challenges?.length ||
    project.details?.learnings?.length ||
    project.details?.links?.length
  );

  const handleClick = () => {
    if (hasDetails && onOpenDetails) {
      onOpenDetails(project);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasDetails && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (onOpenDetails) {
        onOpenDetails(project);
      }
    }
  };

  return (
    <div
      id={String(project.id)}
      className={`group relative flex flex-col h-full p-6 rounded-2xl bg-[var(--secondary-bg)] border ${colors.border}
                border-opacity-30 hover:border-opacity-100 transition-all duration-300 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${hasDetails ? "cursor-pointer" : ""}`}
      style={{
        ["--card-glow-rgb" as string]: colors.rgb,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={hasDetails ? "button" : undefined}
      tabIndex={hasDetails ? 0 : undefined}
    >
      <ProjectImage
        image={project.image}
        name={project.name}
        color={project.color}
      />

      <div className="mt-4 flex-1 flex flex-col">
        <ProjectHeader
          name={project.name}
          icon={project.icon}
          category={project.category}
          colors={colors}
        />

        <div className="mt-3">
          <Text
            className="text-sm md:text-base text-gray-300 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        <ProjectLinks live={project.live} github={project.github} />

        <div className="flex-1" />

        {project.stacks && project.stacks.length > 0 && (
          <TechnologyTags technologies={project.stacks} />
        )}

        {hasDetails && <DetailsIndicator />}
      </div>

      {/* Glow effect on hover - pure CSS */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(${colors.rgb}, 0.12), transparent 70%)`,
        }}
      />
    </div>
  );
}
