import { ShowcaseProject } from "../types";

export interface MobileCardDetailProps {
  project: ShowcaseProject;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  currentIndex: number;
  totalProjects: number;
}
