"use client";

import { useState } from "react";
import Text from "@/app/components/Text";
import { TimelineCardProps } from "./types";
import { technologyColors } from "./constants";
import { getTypeColors, hexToRgb } from "./utils";
import TimelineIcon from "./components/TimelineIcon";

export default function TimelineCard({
  event,
  isLeft,
  index,
}: TimelineCardProps) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const colors = getTypeColors(event.type);

  return (
    <div
      className={`relative flex items-center w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 
                w-10 h-10 rounded-full ${colors.tailwind} 
                flex items-center justify-center shadow-lg
                border-4 border-[#0a0a0a]`}
        style={{ boxShadow: `0 10px 15px -3px rgba(${colors.rgb}, 0.2)` }}
      >
        <div className="text-white">
          <TimelineIcon type={event.type} />
        </div>
      </div>

      {/* Card */}
      <div
        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div
          className={`relative p-6 rounded-2xl bg-[#111111] border ${colors.border} 
                    border-opacity-30 hover:border-opacity-100 transition-all duration-300
                    hover:transform hover:scale-[1.02]
                    group`}
          style={{
            boxShadow: isCardHovered
              ? `0 10px 15px -3px rgba(${colors.rgb}, 0.15)`
              : undefined,
          }}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          {/* Year Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-sm mb-3"
            style={{ backgroundColor: `rgba(${colors.rgb}, 0.12)` }}
          >
            <Text className="!text-sm font-semibold text-[var(--white)]">
              {event.year}
            </Text>
          </div>

          {/* Title */}
          <Text className="!text-xl md:!text-2xl font-bold mb-1">
            {event.title}
          </Text>

          {/* Company */}
          <div className="flex items-center gap-2 mb-3">
            <Text className="!text-base font-medium opacity-80">
              <span style={{ color: colors.solid }}>{event.company}</span>
            </Text>
            {event.location && (
              <>
                <span className="text-gray-500">•</span>
                <Text className="!text-sm opacity-60">{event.location}</Text>
              </>
            )}
          </div>

          {/* Description */}
          <Text className="!text-sm md:!text-base font-normal opacity-70 mb-4 leading-relaxed">
            {event.description}
          </Text>

          {/* Technologies */}
          {event.technologies && event.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {event.technologies.map((tech, idx) => {
                const techColor = technologyColors[tech] || "#fafafa";
                const techRgb = hexToRgb(techColor);
                const animationDelay = `${idx * 80}ms`;

                return (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-5 
                      border border-white border-opacity-10 text-[#fafafa]
                      transition-all duration-300 cursor-default
                      hover:scale-110"
                    style={{
                      borderColor: isCardHovered ? techColor : undefined,
                      backgroundColor: isCardHovered
                        ? `rgba(${techRgb}, 0.2)`
                        : undefined,
                      color: isCardHovered ? techColor : undefined,
                      opacity: isCardHovered ? 1 : 0.8,
                      transitionDelay: isCardHovered ? animationDelay : "0ms",
                      transform: isCardHovered
                        ? "translateY(-2px)"
                        : "translateY(0)",
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          )}

          {/* Connector Line (Desktop) */}
          <div
            className={`hidden md:block absolute top-1/2 ${
              isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
            } w-8 h-[2px] bg-gradient-to-r ${
              isLeft
                ? "from-[var(--blue)] to-transparent"
                : "from-transparent to-[var(--blue)]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
