import { TypeColors } from "./types";
const { colors } = require("@/app/colors");

export const getTypeColors = (
  type: "work" | "education" | "project" | "achievement",
): TypeColors => {
  switch (type) {
    case "work":
      return {
        solid: "var(--blue)",
        rgb: "var(--blue-RGB)",
        tailwind: "bg-[var(--blue)]",
        border: "border-[var(--blue)]",
      };
    case "education":
      return {
        solid: "var(--category-purple)",
        rgb: "var(--category-purple-RGB)",
        tailwind: "bg-purple-500",
        border: "border-purple-500",
      };
    case "project":
      return {
        solid: "var(--category-lime)",
        rgb: "var(--category-lime-RGB)",
        tailwind: "bg-green-500",
        border: "border-green-500",
      };
    case "achievement":
      return {
        solid: "var(--category-yellow)",
        rgb: "var(--category-yellow-RGB)",
        tailwind: "bg-yellow-500",
        border: "border-yellow-500",
      };
  }
};

export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}`
    : "255, 255, 255";
};

export const getTechColor = (techName: string): string => {
  const varName = `--color-${techName.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "-")}`;
  return `var(${varName}, ${colors[techName as keyof typeof colors] || "var(--text-primary)"})`;
};

export const getTechColorValue = (techName: string): string => {
  return colors[techName as keyof typeof colors] || "var(--text-primary)";
};

export const getTimelineIcon = (
  type: "work" | "education" | "project" | "achievement",
): string => {
  const iconMap = {
    work: "work.svg",
    education: "education.svg",
    project: "project.svg",
    achievement: "achievement.svg",
  };
  return iconMap[type];
};
