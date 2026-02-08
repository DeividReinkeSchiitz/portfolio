"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/app/components/Text";

interface FrameworkItemProps {
  icon: string;
  name: string;
  color: string;
  index: number;
}

export default function FrameworkItem({
  icon,
  name,
  color,
  index,
}: FrameworkItemProps) {
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
