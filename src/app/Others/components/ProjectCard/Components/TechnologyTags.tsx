interface TechnologyTagsProps {
  technologies: string[];
}

export default function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs md:text-sm rounded-md border border-gray-500/30
                     hover:border-gray-400 hover:bg-gray-500/20
                     transition-all duration-200 cursor-default
                     group-hover:shadow-[0_0_8px_rgba(136,136,136,0.15)]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
