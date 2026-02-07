import { ProjectCategory, CategoryColors } from "./types";

export function getCategoryColors(category: ProjectCategory): CategoryColors {
  switch (category) {
    case "backend":
      return {
        solid: "#10b981", // green
        rgb: "16, 185, 129",
        tailwind: "text-green-500",
        border: "border-green-500",
        bg: "bg-green-500/10",
      };
    case "template":
      return {
        solid: "#3b82f6", // blue
        rgb: "59, 130, 246",
        tailwind: "text-blue-500",
        border: "border-blue-500",
        bg: "bg-blue-500/10",
      };
    case "tool":
      return {
        solid: "#f59e0b", // amber
        rgb: "245, 158, 11",
        tailwind: "text-amber-500",
        border: "border-amber-500",
        bg: "bg-amber-500/10",
      };
    case "library":
      return {
        solid: "#8b5cf6", // violet
        rgb: "139, 92, 246",
        tailwind: "text-violet-500",
        border: "border-violet-500",
        bg: "bg-violet-500/10",
      };
    default:
      return {
        solid: "#6366f1", // indigo
        rgb: "99, 102, 241",
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
