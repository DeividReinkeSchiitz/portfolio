import React from "react";
import Image from "next/image";
import Text from "@/app/components/Text";

interface FrameworksProps {
  frameworks: {
    name: string;
    icon: string;
    color: string;
  }[];
}

interface FrameworkItemProps {
  icon: string;
  name: string;
  color: string;
  index: number;
}

function FrameworkItem({ icon, name, color }: FrameworkItemProps) {
  return (
    <div
      className={`flex items-center justify-evenly border-[1px] p-2 pl-3 pr-3 rounded-md
                hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out`}
      style={{ borderColor: color }}
    >
      <Image
        width={8}
        height={8}
        src={icon}
        alt={name}
        className={"w-6 h-6 md:w-8 md:h-8"}
      />
      <Text className={`sm:text-lg ml-2`} style={{ color }}>
        {name}
      </Text>
    </div>
  );
}

function Frameworks({ frameworks }: FrameworksProps) {
  const blurConfigs = [
    { top: "top-0", left: "-left-[0%]", opacity: "opacity-15", colorIndex: 0 },
    {
      top: "top-1/3",
      left: "-left-[0%]",
      opacity: "opacity-15",
      colorIndex: 1,
    },
    { top: "top-0", left: "right-1/3", opacity: "opacity-15", colorIndex: 2 },
    { top: "top-1/3", left: "right-1/3", opacity: "opacity-15", colorIndex: 3 },
    { top: "top-0", left: "left-1/3", opacity: "opacity-15", colorIndex: 4 },
    { top: "top-1/3", left: "left-1/3", opacity: "opacity-15", colorIndex: 5 },
    { top: "top-0", left: "-right-[0%]", opacity: "opacity-15", colorIndex: 6 },
    {
      top: "top-1/3",
      left: "-right-[0%]",
      opacity: "opacity-10",
      colorIndex: 7,
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-x-12 gap-y-7 grid-cols-2 p-5 mb-10 ">
        {frameworks.map((framework, i) => (
          <FrameworkItem
            key={i}
            icon={framework.icon}
            name={framework.name}
            color={framework.color}
            index={i}
          />
        ))}
      </div>

      {/* BLURS IN MAIN PAGE*/}
      {blurConfigs.map((config, i) => (
        <div
          key={i}
          className={`w-[50%] h-[50%] absolute ${config.top} ${config.left} ${config.opacity} filter blur-[100px] z-[-1]`}
          style={{
            background: `radial-gradient(circle, ${frameworks[config.colorIndex].color} 20% 20%, transparent 50%)`,
          }}
        />
      ))}
    </div>
  );
}

export default Frameworks;
