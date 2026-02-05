export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "project" | "achievement";
  technologies?: string[];
  location?: string;
}

export interface TimelineCardProps {
  event: TimelineEvent;
  isLeft: boolean;
  index: number;
}

export interface TypeColors {
  solid: string;
  rgb: string;
  tailwind: string;
  border: string;
}
