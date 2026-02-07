import { motion } from "framer-motion";
import Text from "@/app/components/Text";

interface DescriptionProps {
  description: string;
  eventId: number;
  hasDetails: boolean;
}

export default function Description({
  description,
  eventId,
  hasDetails,
}: DescriptionProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `description-${eventId}` : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Text className="!text-sm md:!text-base font-normal opacity-70 mb-4 leading-relaxed">
        {description}
      </Text>
    </motion.div>
  );
}
