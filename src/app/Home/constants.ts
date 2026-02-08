import type { DescriptionLine, ParticleConfig } from "./types";

export const homeContent = {
  greeting: "Hi, I am Deivid Reinke Schiitz",
  description:
    "From <span> Powerful </span> Backends <br /> to intuitive <span>solutions</span> <br /> <span>&</span> Mobile Apps <span>&</span> <br /> Websites",
  statusText: "Working on a new project",
};

export const descriptionLines: DescriptionLine[] = [
  [
    { text: "From", highlighted: false },
    { text: "Powerful", highlighted: true },
    { text: "Backends", highlighted: false },
  ],
  [
    { text: "to", highlighted: false },
    { text: "intuitive", highlighted: false },
    { text: "solutions", highlighted: true },
  ],
  [
    { text: "&", highlighted: true },
    { text: "Mobile", highlighted: false },
    { text: "Apps", highlighted: false },
    { text: "&", highlighted: true },
  ],
  [{ text: "Websites", highlighted: false }],
];

export const ANIMATION_DELAYS = {
  statusBadge: 0.1,
  greeting: 0.3,
  descriptionStart: 0.7,
  descriptionLineGap: 0.12,
  wordStagger: 0.04,
  downResume: 1,
  frameworks: 1.3,
} as const;

export const PARTICLES: ParticleConfig[] = Array.from(
  { length: 12 },
  (_, i) => ({
    id: i,
    x: (i * 37 + 13) % 100,
    y: (i * 53 + 7) % 100,
    size: 2 + ((i * 17) % 4),
    duration: 15 + ((i * 23) % 15),
    delay: (i * 1.3) % 8,
    opacity: 0.08 + ((i * 11) % 15) / 100,
  }),
);
