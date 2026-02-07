import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/app/components/Text";
import { TimelineEvent, TypeColors } from "../../../types";
import { getTechColor, getTimelineIcon } from "../../../utils";

interface HeroSectionProps {
  event: TimelineEvent;
  colors: TypeColors;
}

export default function HeroSection({ event, colors }: HeroSectionProps) {
  return (
    <div
      className="relative p-8 md:p-12 border-b border-white border-opacity-10"
      style={{
        background: `linear-gradient(135deg, rgba(${colors.rgb}, 0.1) 0%, transparent 100%)`,
      }}
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full"
        style={{ backgroundColor: colors.solid }}
      />

      <div className="relative">
        {/* Type Icon */}
        <motion.div
          layout
          layoutId={`timeline-icon-${event.id}`}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.tailwind} mb-6`}
          style={{
            boxShadow: `0 10px 30px -5px rgba(${colors.rgb}, 0.4)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src={getTimelineIcon(event.type)}
            alt={event.type}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </motion.div>

        {/* Year Badge */}
        <motion.div
          layout
          layoutId={`year-badge-${event.id}`}
          className="inline-flex items-center ml-6 px-4 py-2 rounded-full text-sm mb-4"
          style={{ backgroundColor: `rgba(${colors.rgb}, 0.15)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Text className="!text-sm font-bold text-white">{event.year}</Text>
        </motion.div>

        {/* Title */}
        <motion.div
          layout
          layoutId={`title-${event.id}`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Text className="!text-3xl md:!text-4xl font-bold mb-3 leading-tight">
            {event.title}
          </Text>
        </motion.div>

        {/* Company & Location */}
        <motion.div
          layout
          layoutId={`company-${event.id}`}
          className="flex flex-wrap items-center gap-3 mb-4"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Text
            className="!text-lg font-semibold"
            style={{ color: colors.solid }}
          >
            {event.company}
          </Text>
          {event.location && (
            <>
              <span className="text-gray-500">•</span>
              <Text className="!text-base text-gray-400">{event.location}</Text>
            </>
          )}
        </motion.div>

        {/* Short Description */}
        <motion.div
          layout
          layoutId={`description-${event.id}`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Text className="!text-base md:!text-lg opacity-90 leading-relaxed max-w-2xl">
            {event.description}
          </Text>
        </motion.div>

        {/* Technologies */}
        {event.technologies && event.technologies.length > 0 && (
          <motion.div
            layout
            layoutId={`technologies-${event.id}`}
            className="flex flex-wrap gap-2 mt-6"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {event.technologies.map((tech) => {
              const techColorVar = getTechColor(tech);
              return (
                <motion.span
                  layout
                  key={tech}
                  layoutId={`tech-${event.id}-${tech}`}
                  className="px-4 py-2 text-sm font-medium rounded-lg 
                    bg-white bg-opacity-5 border border-white border-opacity-10
                    hover:bg-opacity-10 transition-all duration-200"
                  style={{
                    borderColor: techColorVar,
                    color: techColorVar,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {tech}
                </motion.span>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
