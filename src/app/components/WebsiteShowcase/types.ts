export interface WebShowcaseStack {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface WebShowcaseProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stacks: WebShowcaseStack[];
  role: string;
  highlights: string[];
  color: string;
}
