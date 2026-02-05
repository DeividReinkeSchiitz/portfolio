import React from "react";
import getStaticData from "@/../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";

interface SocialMediasProps {
  className?: string;
}

async function SocialMedias({ className }: SocialMediasProps) {
  const static_data = await getStaticData();

  const cur_medias = [];

  for (let i = 0; i < static_data.social_medias.length; i++) {
    cur_medias.push(
      <ClientDiv
        open={static_data.social_medias[i].link}
        key={i}
        className={`
                    flex items-center mb-5
                    justify-self-start
                    w-full font-normal
                    hover: cursor-pointer
                 hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out relative`}
      >
        <div
          className={`flex p-3 items-center justify-center rounded-md relative flex-wrap md:h-[70px] md:w-[70px]`}
        >
          {/* Colored Square */}
          <div
            className={
              "absolute z-0 opacity-50 rounded-md bg-[var(--blue)] h-full w-full"
            }
          />
          <Image
            src={static_data.social_medias[i].icon}
            alt={static_data.social_medias[i].name}
            objectFit={"contain"}
            width={30}
            height={30}
            className={`w-[30px] h-[30px] z-10`}
          />
        </div>

        <div className={"inline-block text-left ml-4  "}>
          <Text className={"mb-[-3] pb-0 font-semibold md:!text-xl"}>
            {static_data.social_medias[i].name}
          </Text>
          <Text className={"opacity-70 text-sm md:!text-base"}>
            {static_data.social_medias[i].description}
          </Text>
        </div>
      </ClientDiv>,
    );
  }

  return (
    <div
      className={`p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6  max-w-screen-lg ${className}`}
    >
      {cur_medias}
    </div>
  );
}

export default SocialMedias;
