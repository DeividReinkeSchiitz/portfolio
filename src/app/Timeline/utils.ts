import { TypeColors } from "./types";

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
        solid: "#a855f7",
        rgb: "168, 85, 247",
        tailwind: "bg-purple-500",
        border: "border-purple-500",
      };
    case "project":
      return {
        solid: "#22c55e",
        rgb: "34, 197, 94",
        tailwind: "bg-green-500",
        border: "border-green-500",
      };
    case "achievement":
      return {
        solid: "#eab308",
        rgb: "234, 179, 8",
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
