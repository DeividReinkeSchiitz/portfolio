import { ShowcaseProject } from "../types";

export interface MobileCardProps {
  project: ShowcaseProject;
  index: number;
  onClick: () => void;
  isActive: boolean;
}
