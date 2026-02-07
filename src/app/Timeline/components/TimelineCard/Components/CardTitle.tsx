import { motion } from "framer-motion";
import Text from "@/app/components/Text";

interface CardTitleProps {
  title: string;
  eventId: number;
  hasDetails: boolean;
}

export default function CardTitle({
  title,
  eventId,
  hasDetails,
}: CardTitleProps) {
  return (
    <motion.div
      layout
      layoutId={hasDetails ? `title-${eventId}` : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Text className="!text-xl md:!text-2xl font-bold mb-1">{title}</Text>
    </motion.div>
  );
}
