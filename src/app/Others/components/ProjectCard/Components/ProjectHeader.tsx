import Image from "next/image";
import Text from "@/app/components/Text";
import { getCategoryLabel } from "../../../utils";
import { ProjectCategory, CategoryColors } from "../../../types";

interface ProjectHeaderProps {
  name: string;
  icon: string;
  category: ProjectCategory;
  colors: CategoryColors;
}

export default function ProjectHeader({
  name,
  icon,
  category,
  colors,
}: ProjectHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3 flex-1">
        <div className="flex-shrink-0">
          <Image
            src={icon}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg"
          />
        </div>

        <div className="flex-1 min-w-0">
          <Text className="text-xl md:text-2xl font-bold truncate">{name}</Text>

          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${colors.bg} ${colors.tailwind}`}
          >
            {getCategoryLabel(category)}
          </span>
        </div>
      </div>
    </div>
  );
}
