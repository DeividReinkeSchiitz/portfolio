import Text from "@/app/components/Text";
import Image from "next/image";

interface ContactHeaderProps {
  location: string;
  availability: string;
  title: string;
  description: string;
  locationIcon: string;
  globeIcon: string;
}

export default function ContactHeader({
  location,
  availability,
  title,
  description,
  locationIcon,
  globeIcon,
}: ContactHeaderProps) {
  return (
    <div className="mt-20 flex w-full items-center text-center justify-center flex-col max-w-2xl">
      <div className="flex items-center justify-center mb-1">
        <Image
          src={locationIcon}
          alt="location"
          width={4}
          height={4}
          className="w-4 h-4 mr-1"
        />
        <Text className="text-sm font-normal">
          Based in <span>{location}</span> | Remote <span>{availability}</span>
        </Text>
        <Image
          src={globeIcon}
          alt="globe"
          width={4}
          height={4}
          className="w-4 h-4 ml-1"
        />
      </div>

      <Text
        className="!text-4xl tracking-wider text-center font-bold mb-3 underline decoration-[var(--blue)] underline-offset-8"
        style={{ textDecorationThickness: "0.15rem" }}
      >
        {title}
      </Text>

      <Text className="text-center !text-xl md:text-xl mt-2 ml-10 mr-10 font-normal">
        {description.split("reach me out").map((part, index) =>
          index === 0 ? (
            part
          ) : (
            <span key={index}>
              <span>reach me out</span>
              {part}
            </span>
          ),
        )}
      </Text>
    </div>
  );
}
