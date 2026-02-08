export interface DescriptionWord {
  text: string;
  highlighted: boolean;
}

export type DescriptionLine = DescriptionWord[];

export interface ParticleConfig {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}
