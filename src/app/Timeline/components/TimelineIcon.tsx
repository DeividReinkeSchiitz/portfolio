import React from "react";
import Image from "next/image";

interface TimelineIconProps {
  type: "work" | "education" | "project" | "achievement";
}

export default function TimelineIcon({ type }: TimelineIconProps) {
  const iconMap = {
    work: "work.svg",
    education: "education.svg",
    project: "project.svg",
    achievement: "achievement.svg",
  };

  return (
    <Image
      src={iconMap[type]}
      alt={type}
      width={20}
      height={20}
      className="w-5 h-5"
    />
  );
}
