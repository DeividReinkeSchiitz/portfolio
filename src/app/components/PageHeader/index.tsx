import Text from "@/app/components/Text";
import Image from "next/image";
import { PageHeaderProps } from "./types";

export default function PageHeader({
  title,
  description,
  icons = [],
}: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center justify-center mt-48">
      <div className="flex relative items-center text-center justify-center flex-col mb-10 max-w-xl">
        {/* Icons */}
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            className={icon.className}
            width={64}
            height={64}
          />
        ))}

        {/* Title */}
        <div className="flex items-center justify-center w-full">
          <Text
            className="md:text-3xl sm:text-2xl font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Description */}
        <Text
          className="text-center sm:text-xl mt-2 ml-10 mr-10 font-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
