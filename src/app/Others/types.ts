export type ProjectCategory =
  | "backend"
  | "template"
  | "tool"
  | "library"
  | "other";

export interface ProjectDetails {
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  category: ProjectCategory;
  image: string;
  icon: string;
  color: string;
  stacks: string[];
  github?: string;
  live?: string;
  details?: ProjectDetails;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails?: (project: Project) => void;
}

export interface CategoryColors {
  solid: string;
  rgb: string;
  tailwind: string;
  border: string;
  bg: string;
}
