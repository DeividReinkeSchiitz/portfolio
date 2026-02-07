import Image from "next/image";
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";

interface ProjectLinksProps {
  live?: string;
  github?: string;
}

export default function ProjectLinks({ live, github }: ProjectLinksProps) {
  if (!live && !github) return null;

  return (
    <div className="flex items-center gap-4 mt-4">
      {live && (
        <ClientDiv open={live}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--blue)]/10 hover:bg-[var(--blue)]/20 border border-[var(--blue)]/30 hover:border-[var(--blue)] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95">
            <Image
              src="/globe.svg"
              alt="live demo"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <Text className="text-sm font-medium">Live Demo</Text>
          </div>
        </ClientDiv>
      )}

      {github && (
        <ClientDiv open={github}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 hover:border-gray-500 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95">
            <Image
              src="/github.svg"
              alt="github"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <Text className="text-sm font-medium">GitHub</Text>
          </div>
        </ClientDiv>
      )}
    </div>
  );
}
