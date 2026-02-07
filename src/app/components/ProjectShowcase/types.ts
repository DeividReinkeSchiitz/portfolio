export interface ShowcaseStack {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ShowcaseProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  images: string[];
  github: string;
  live?: string;
  stacks: ShowcaseStack[];
  role: string;
  highlights: string[];
  color: string;
}
