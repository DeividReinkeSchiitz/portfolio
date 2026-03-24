import { colors } from "@/app/colors";
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

export const frameworks = [
  {
    name: "Postgres",
    icon: "postgres.svg",
    color: colors.Postgres,
  },
  {
    name: "Docker",
    icon: "docker.svg",
    color: colors.Docker,
  },
  {
    name: "Node.js",
    icon: "node.svg",
    color: colors["Node.js"],
  },
  {
    name: "React",
    icon: "react.svg",
    color: colors.React,
  },
  {
    name: "TypeScript",
    icon: "typescript.svg",
    color: colors.TypeScript,
  },
  {
    name: "Golang",
    icon: "golang.svg",
    color: colors.Golang,
  },
  {
    name: "C",
    icon: "c.svg",
    color: colors.C,
  },
  {
    name: "Git",
    icon: "git.svg",
    color: colors.Git,
  },
];

export const ANIMATION_DELAYS = {
  statusBadge: 0.1,
  greeting: 0.3,
  descriptionStart: 0.7,
  descriptionLineGap: 0.12,
  wordStagger: 0.04,
  downResume: 1,
  frameworks: 1.3,
};

export const PARTICLES: ParticleConfig[] = Array.from(
  { length: 36 },
  (_, i) => ({
    id: i,
    x: (i * 37 + 13) % 100,
    y: (i * 53 + 7) % 100,
    size: 2 + ((i * 17) % 4),
    duration: 45 + ((i * 23) % 30),
    delay: (i * 0.2) % 1,
    opacity: 0.08 + ((i * 11) % 15) / 100,
  }),
);
