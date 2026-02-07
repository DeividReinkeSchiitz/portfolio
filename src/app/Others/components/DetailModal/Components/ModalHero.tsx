import Image from "next/image";
import Text from "@/app/components/Text";
import { Project, CategoryColors } from "../../../types";
import { getCategoryLabel } from "../../../utils";

interface ModalHeroProps {
  project: Project;
  colors: CategoryColors;
}

export default function ModalHero({ project, colors }: ModalHeroProps) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div>
            <Image
              src={project.icon}
              alt={project.name}
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-white/20"
            />
          </div>

          <div className="flex-1">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 ${colors.bg} ${colors.tailwind}`}
            >
              {getCategoryLabel(project.category)}
            </span>

            <Text className="text-3xl md:text-4xl font-bold mb-2">
              {project.name}
            </Text>

            <Text
              className="text-base md:text-lg text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
