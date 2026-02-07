import { motion } from "framer-motion";
import Image from "next/image";
import { getTimelineIcon } from "../../../utils";
import { TypeColors } from "../../../types";

interface TimelineDotProps {
  type: "work" | "education" | "project" | "achievement";
  colors: TypeColors;
  eventId: number;
  hasDetails: boolean;
}

export default function TimelineDot({
  type,
  colors,
  eventId,
  hasDetails,
}: TimelineDotProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `timeline-icon-${eventId}` : undefined}
      className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 
                w-10 h-10 rounded-full ${colors.tailwind} 
                flex items-center justify-center shadow-lg
                border-4 border-[var(--primary-bg)]`}
      style={{ boxShadow: `0 10px 15px -3px rgba(${colors.rgb}, 0.2)` }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Image
        src={getTimelineIcon(type)}
        alt={type}
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </motion.div>
  );
}
