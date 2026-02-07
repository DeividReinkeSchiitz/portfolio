import React from "react";
import getStaticData from "@/../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";
import MobileStacks from "@/app/components/MobilesList/MobileStacks";
import MobileImages from "@/app/components/MobilesList/MobileImages";

async function MobilesList() {
  const static_data = await getStaticData();

  const cur_mobiles = [];

  for (let i = 0; i < static_data.mobiles.length; i++) {
    cur_mobiles.push(
      <div
        key={i}
        className={"flex relative flex-col mb-18 p-10 max-w-2xl md:max-w-2xl"}
      >
        <div className={`flex relative items-center`}>
          <MobileImages images={static_data.mobiles[i].images} />

          {/*Title Icon*/}
          <Image
            width={35}
            height={35}
            className={"h-[35px] w-[35px] mr-5"}
            src={static_data.mobiles[i].icon}
            alt={static_data.mobiles[i].name}
          />
          {/*Title*/}
          <Text className={`text-2xl font-bold text-left w-full`}>
            {static_data.mobiles[i].name}
          </Text>

          {/*Text Links*/}
          <div className={`flex w-full justify-evenly z-10 `}>
            <ClientDiv open={static_data.mobiles[i].github}>
              <Text
                className={`flex justify-center items-center hover:underline `}
                hover
              >
                <Image
                  src={"github.svg"}
                  alt={"github"}
                  width={6}
                  height={6}
                  className={"mr-2 w-6 h-6 md:w-6 md:h-6 "}
                />
                Github
              </Text>
            </ClientDiv>
          </div>
        </div>

        {/* Description */}
        <Text
          className={`mt-2 !text-base text-left w-full`}
          dangerouslySetInnerHTML={{
            __html: static_data.mobiles[i].description,
          }}
        />

        <MobileStacks stacks={static_data.mobiles[i].stacks} />
      </div>,
    );
  }

  return (
    <div className="flex items-center self-center h-full flex-col mt-20 w-full max-w-screen-xl md:gap-y-52 xl:gap-y-64 2xl:gap-y-80 ">
      {cur_mobiles}
    </div>
  );
}

export default MobilesList;
