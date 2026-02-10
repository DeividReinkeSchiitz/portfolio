export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "project" | "achievement";
  technologies?: string[];
  location?: string;
  details?: {
    fullDescription?: string;
    responsibilities?: string[];
    achievements?: string[];
    links?: {
      label: string;
      url: string;
      linkType?: "internal" | "external";
    }[];
  };
}

export interface TimelineCardProps {
  event: TimelineEvent;
  isLeft: boolean;
  index: number;
  onOpenDetails?: (event: TimelineEvent) => void;
}

export interface TypeColors {
  solid: string;
  rgb: string;
  tailwind: string;
  border: string;
}
