import ImageWithSkeleton from "@/app/components/ImageWithSkeleton";

interface ProjectImageProps {
  image: string;
  name: string;
  color: string;
}

export default function ProjectImage({
  image,
  name,
  color,
}: ProjectImageProps) {
  return (
    <div
      className="relative overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300 ease-out"
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: color.length <= 7 ? color : "transparent",
        borderImage: color.length > 7 ? color : "none",
      }}
    >
      <div className="relative w-full aspect-video">
        <ImageWithSkeleton
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
