"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TimelineCardProps } from "../../types";
import { getTypeColors } from "../../utils";
import TimelineDot from "./Components/TimelineDot";
import YearBadge from "./Components/YearBadge";
import CardTitle from "./Components/CardTitle";
import CompanyInfo from "./Components/CompanyInfo";
import Description from "./Components/Description";
import TechnologyTags from "./Components/TechnologyTags";
import DetailsIndicator from "./Components/DetailsIndicator";
import ConnectorLine from "./Components/ConnectorLine";

export default function TimelineCard({
  event,
  isLeft,
  index,
  onOpenDetails,
}: TimelineCardProps) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const colors = getTypeColors(event.type);
  const hasDetails = !!(
    event.details?.fullDescription ||
    event.details?.responsibilities?.length ||
    event.details?.achievements?.length ||
    event.details?.links?.length
  );

  const handleClick = () => {
    if (hasDetails && onOpenDetails) {
      onOpenDetails(event);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasDetails && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (onOpenDetails) {
        onOpenDetails(event);
      }
    }
  };

  return (
    <div
      className={`relative flex items-center w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <TimelineDot
        type={event.type}
        colors={colors}
        eventId={event.id}
        hasDetails={hasDetails}
      />

      {/* Card */}
      <div
        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          layout
          layoutId={hasDetails ? `card-container-${event.id}` : undefined}
          className={`relative p-6 rounded-2xl bg-[#111111] border ${colors.border} 
                    border-opacity-30 hover:border-opacity-100 transition-colors duration-300
                    ${hasDetails ? "cursor-pointer" : ""}
                    group`}
          style={{
            boxShadow: isCardHovered
              ? `0 10px 15px -3px rgba(${colors.rgb}, 0.15)`
              : undefined,
          }}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role={hasDetails ? "button" : undefined}
          tabIndex={hasDetails ? 0 : undefined}
          whileHover={hasDetails ? { scale: 1.02 } : undefined}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <YearBadge
            year={event.year}
            colors={colors}
            eventId={event.id}
            hasDetails={hasDetails}
          />

          <CardTitle
            title={event.title}
            eventId={event.id}
            hasDetails={hasDetails}
          />

          <CompanyInfo
            company={event.company}
            location={event.location}
            colors={colors}
            eventId={event.id}
            hasDetails={hasDetails}
          />

          <Description
            description={event.description}
            eventId={event.id}
            hasDetails={hasDetails}
          />

          {event.technologies && event.technologies.length > 0 && (
            <TechnologyTags
              technologies={event.technologies}
              eventId={event.id}
              hasDetails={hasDetails}
              isCardHovered={isCardHovered}
            />
          )}

          {hasDetails && <DetailsIndicator />}

          <ConnectorLine isLeft={isLeft} />
        </motion.div>
      </div>
    </div>
  );
}
