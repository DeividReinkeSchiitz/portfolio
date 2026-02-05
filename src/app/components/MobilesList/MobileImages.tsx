import Image from "next/image";
import React from "react";

export default function MobileImages({ images }: { images: string[] }) {
  return (
    <div className={"hidden md:flex"}>
      <div
        className={
          "max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[-100px] left-[-22vw] "
        }
      >
        <Image
          src={images[0]}
          alt={images[0]}
          className={"w-full h-full object-fit rotate-[270deg]"}
          quality={100}
          width={1140}
          height={1024}
        />
      </div>

      <div
        className={
          "max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[300px] left-[-23vw] "
        }
      >
        <Image
          src={images[1]}
          alt={images[1]}
          className={"w-full h-full object-fit rotate-[220deg]"}
          quality={100}
          width={1140}
          height={1024}
        />
      </div>

      <div
        className={
          "max-w-[420px] w-[25vw] h-auto mt-5 absolute top-[270px] right-[-18vw] "
        }
      >
        <Image
          src={images[2]}
          alt={images[2]}
          className={"w-full h-full object-fit "}
          quality={100}
          width={1140}
          height={1024}
        />
      </div>
    </div>
  );
}
