import { Stack } from "../../../../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";
import React from "react";

interface WebStacksProps {
  stacks: Stack[];
}
export default function WebStacks({ stacks }: WebStacksProps) {
  const cur_stacks = [];

  for (let i = 0; i < stacks.length; i++) {
    cur_stacks.push(
      <div
        key={i}
        className={`hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out
                    font-normal flex p-3 
                 `}
      >
        <div
          className={`flex p-3 items-center justify-center rounded-2xl relative`}
        >
          {/* Colored Square */}
          <div
            className={"absolute w-[55px] h-[55px] opacity-30 rounded-md"}
            style={{ backgroundColor: stacks[i].color }}
          />
          <div
            className={
              "w-[30px] h-[30px] rounded-md flex items-center justify-center"
            }
          >
            <Image
              src={stacks[i].icon}
              alt={stacks[i].name}
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={"inline-block text-left pl-4 "}>
          <Text className={"mb-[-3] pb-0 font-semibold"}>{stacks[i].name}</Text>
          <Text className={"opacity-70 !text-sm"}>{stacks[i].description}</Text>
        </div>
      </div>,
    );
  }
  return (
    <div className={`grid grid-cols-2 mt-5 items-center justify-center`}>
      {cur_stacks}
    </div>
  );
}
