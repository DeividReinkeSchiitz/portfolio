import { motion } from "framer-motion";
import Text from "@/app/components/Text";
import { TypeColors } from "../../../types";

interface CompanyInfoProps {
  company: string;
  location?: string;
  colors: TypeColors;
  eventId: number;
  hasDetails: boolean;
}

export default function CompanyInfo({
  company,
  location,
  colors,
  eventId,
  hasDetails,
}: CompanyInfoProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `company-${eventId}` : undefined}
      className="flex items-center gap-2 mb-3"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Text className="!text-base font-medium opacity-80">
        <span style={{ color: colors.solid }}>{company}</span>
      </Text>
      {location && (
        <>
          <span className="text-gray-500">•</span>
          <Text className="!text-sm opacity-60">{location}</Text>
        </>
      )}
    </motion.div>
  );
}
