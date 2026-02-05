import { Stack } from "../../../../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";
import React from "react";

export default function MobileStacks({ stacks }: { stacks: Stack[] }) {
  const cur_stacks = [];

  for (let i = 0; i < stacks.length; i++) {
    cur_stacks.push(
      <div
        key={i}
        className={`hover:shadow-lg gap-x-2 items-center  pt-5 md:pt-8 hover:scale-105 font-normal
                  hover:transform transition-transform duration-300 ease-in-out flex`}
      >
        <div
          className={`flex p-3 items-center justify-center rounded-md relative `}
        >
          {/* Colored Square */}
          <div
            className={
              "absolute w-[40px] h-[40px] md:w-[55px] md:h-[55px] opacity-30 rounded-md"
            }
            style={{ backgroundColor: stacks[i].color }}
          />

          {/* Stack icon */}
          <div
            className={
              "w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-md flex items-center justify-center"
            }
          >
            <Image
              src={stacks[i].icon}
              alt={stacks[i].name}
              width={30}
              height={30}
              className={``}
            />
          </div>
        </div>

        {/* Stack Title and Description */}
        <div className={"inline-block text-left md:pl-4  "}>
          <Text className={"mb-[-3] pb-0 font-semibold"}>{stacks[i].name}</Text>
          <Text className={"opacity-70 !text-xs sm:!text-base"}>
            {stacks[i].description}
          </Text>
        </div>
      </div>,
    );
  }
  return (
    <div
      className={`sm:grid sm:grid-cols-2 sm:gap-x-2 sm:h-full sm:mt-5 sm:w-full 
            flex mt-5 w-full flex-wrap justify-left gap-x-5
        `}
    >
      {cur_stacks}
    </div>
  );
}
