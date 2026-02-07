import { ProjectCategory, CategoryColors } from "./types";

export function getCategoryColors(category: ProjectCategory): CategoryColors {
  switch (category) {
    case "backend":
      return {
        solid: "var(--category-green)",
        rgb: "var(--category-green-RGB)",
        tailwind: "text-green-500",
        border: "border-green-500",
        bg: "bg-green-500/10",
      };
    case "template":
      return {
        solid: "var(--category-blue)",
        rgb: "var(--category-blue-RGB)",
        tailwind: "text-blue-500",
        border: "border-blue-500",
        bg: "bg-blue-500/10",
      };
    case "tool":
      return {
        solid: "var(--category-amber)",
        rgb: "var(--category-amber-RGB)",
        tailwind: "text-amber-500",
        border: "border-amber-500",
        bg: "bg-amber-500/10",
      };
    case "library":
      return {
        solid: "var(--category-violet)",
        rgb: "var(--category-violet-RGB)",
        tailwind: "text-violet-500",
        border: "border-violet-500",
        bg: "bg-violet-500/10",
      };
    default:
      return {
        solid: "var(--category-indigo)",
        rgb: "var(--category-indigo-RGB)",
        tailwind: "text-indigo-500",
        border: "border-indigo-500",
        bg: "bg-indigo-500/10",
      };
  }
}

export function getCategoryLabel(category: ProjectCategory): string {
  const labels: Record<ProjectCategory, string> = {
    backend: "Backend",
    template: "Template",
    tool: "Tool",
    library: "Library",
    other: "Other",
  };
  return labels[category];
}
