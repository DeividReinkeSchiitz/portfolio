import React from "react";
import getStaticData from "@/../public/static";
import FrameworkItem from "./FrameworkItem";

async function Frameworks() {
  const static_data = await getStaticData();

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-x-12 gap-y-7 grid-cols-2 p-5 mb-10 ">
        {static_data.frameworks.map((framework, i) => (
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
