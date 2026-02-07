import { motion } from "framer-motion";
import Text from "@/app/components/Text";
import { TypeColors } from "../../../types";

interface YearBadgeProps {
  year: string;
  colors: TypeColors;
  eventId: number;
  hasDetails: boolean;
}

export default function YearBadge({
  year,
  colors,
  eventId,
  hasDetails,
}: YearBadgeProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `year-badge-${eventId}` : undefined}
      className="inline-flex items-center px-3 py-1 rounded-full text-sm mb-3"
      style={{ backgroundColor: `rgba(${colors.rgb}, 0.12)` }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Text className="!text-sm font-semibold text-[var(--white)]">{year}</Text>
    </motion.div>
  );
}
