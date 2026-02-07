import { motion } from "framer-motion";
import { getTechColor } from "../../../utils";

interface TechnologyTagsProps {
  technologies: string[];
  eventId: number;
  hasDetails: boolean;
  isCardHovered: boolean;
}

export default function TechnologyTags({
  technologies,
  eventId,
  hasDetails,
  isCardHovered,
}: TechnologyTagsProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `technologies-${eventId}` : undefined}
      className="flex flex-wrap gap-2"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {technologies.map((tech) => {
        const techColorVar = getTechColor(tech);

        return (
          <motion.span
            layout
            key={tech}
            layoutId={hasDetails ? `tech-${eventId}-${tech}` : undefined}
            className="px-3 py-1 text-xs rounded-full bg-white bg-opacity-5
                      border border-white border-opacity-10 text-[var(--text-primary)]
                      transition-colors duration-300 cursor-default"
            style={{
              borderColor: isCardHovered ? techColorVar : undefined,
              backgroundColor: isCardHovered
                ? `color-mix(in srgb, ${techColorVar} 20%, transparent)`
                : undefined,
              color: isCardHovered ? techColorVar : undefined,
              opacity: isCardHovered ? 1 : 0.8,
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {tech}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
