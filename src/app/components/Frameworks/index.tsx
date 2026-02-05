import React from "react";
import getStaticData from "@/../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";

async function Frameworks() {
  const static_data = await getStaticData();

  const cur_frameworks = [];

  for (let i = 0; i < static_data.frameworks.length; i++) {
    cur_frameworks.push(
      <div
        key={i}
        className={`flex items-center justify-evenly border-[1px] p-2 pl-3 pr-3 rounded-md
                hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out
                `}
        style={{ borderColor: static_data.frameworks[i].color }}
      >
        <Image
          width={8}
          height={8}
          src={static_data.frameworks[i].icon}
          alt={static_data.frameworks[i].name}
          className={"w-6 h-6 md:w-8 md:h-8"}
        />
        <Text
          className={`sm:text-lg ml-2 `}
          style={{ color: static_data.frameworks[i].color }}
        >
          {static_data.frameworks[i].name}
        </Text>
      </div>,
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-x-12 gap-y-7 grid-cols-2 p-5 mb-10 ">
        {cur_frameworks}
      </div>

      {/* BLURS IN MAIN PAGE*/}
      {/* LEFT */}
      <div
        className={`w-[50%] h-[50%] absolute top-0 -left-[0%] opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[0].color} 20% 20%, transparent 50%)`,
        }}
      />
      <div
        className={`w-[50%] h-[50%] absolute top-1/3 -left-[0%] opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[1].color} 20% 20%, transparent 50%)`,
        }}
      />

      {/* MIDDLE LEFT */}
      <div
        className={`w-[50%] h-[50%] absolute top-0 right-1/3 opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[2].color} 20% 20%, transparent 50%)`,
        }}
      />
      <div
        className={`w-[50%] h-[50%] absolute top-1/3 right-1/3 opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[3].color} 20% 20%, transparent 50%)`,
        }}
      />

      {/* MIDDLE RIGHT */}
      <div
        className={`w-[50%] h-[50%] absolute top-0 left-1/3 opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[4].color} 20% 20%, transparent 50%)`,
        }}
      />
      <div
        className={`w-[50%] h-[50%] absolute top-1/3 left-1/3 opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[5].color} 20% 20%, transparent 50%)`,
        }}
      />

      {/*  RIGHT */}
      <div
        className={`w-[50%] h-[50%] absolute top-0 -right-[0%] opacity-15 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[6].color} 20% 20%, transparent 50%)`,
        }}
      />
      <div
        className={`w-[50%] h-[50%] absolute top-1/3 -right-[0%] opacity-10 filter blur-[100px] z-[-1]`}
        style={{
          background: `radial-gradient(circle, ${static_data.frameworks[7].color} 20% 20%, transparent 50%)`,
        }}
      />
    </div>
  );
}

export default Frameworks;
