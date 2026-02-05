import React from "react";
import getStaticData, { Website } from "@/../public/static";
import Image from "next/image";
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";
import WebStacks from "@/app/components/WebsitesList/WebStacks";

interface WebsiteImageProps {
  content: Website;
}

const WebsiteImage = ({ content }: WebsiteImageProps) => {
  return (
    <div className={`flex flex-col items-center p-5 relative`}>
      {/*Image*/}
      <ClientDiv
        open={content.live}
        className={
          "relative hover:cursor-pointer " +
          "hover:shadow-lg hover:scale-105 hover:transform" +
          "transition-transform duration-300 ease-in-out " +
          "mb-6"
        }
      >
        <Image
          width={518}
          height={317}
          src={content.image}
          alt={content.name}
          className={"h-auto w-auto z-0 rounded-3xl object-cover"}
        />

        {/*HOVER GRAY BACK*/}
        <div
          className={
            "absolute bg-[#0e0e0e] top-0 left-0 w-full h-full z-10 rounded-3xl " +
            "bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
          }
        >
          <div className={"flex justify-center items-center h-full"}>
            <Text
              className={"text-white text-2xl font-semibold tracking-widest"}
            >
              {content.name}
            </Text>
          </div>
        </div>
      </ClientDiv>

      {/*Text Link */}
      <div className={`flex w-full justify-evenly z-10 `}>
        <ClientDiv open={content.live}>
          <Text
            className={`flex justify-center items-center hover:underline`}
            hover
          >
            <Image
              src={"globe.svg"}
              alt={"globe"}
              width={5}
              height={5}
              className={"mr-2 w-4 h-4 md:w-5 md:h-5 "}
            />
            Live Demo
          </Text>
        </ClientDiv>

        <ClientDiv open={content.github}>
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
  );
};

async function WebsitesList() {
  const static_data = await getStaticData();

  const cur_websites = [];

  for (let i = 0; i < static_data.websites.length; i++) {
    cur_websites.push(
      <div
        key={i}
        className={`relative flex flex-col-reverse ${i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"} 
                 items-center text-center justify-evenly mb-18 p-10 max-w-2xl md:max-w-screen-2xl h-full `}
      >
        {/* IMAGE SIDE  */}
        <WebsiteImage content={static_data.websites[i]} />

        {/*  TEXT SIDE  */}
        <div
          className={`flex text-left flex-col h-full z-10 ml-4 md:md:max-w-xl `}
        >
          <Text className={`text-2xl font-bold `}>
            {static_data.websites[i].name}
          </Text>
          <Text
            className={`mt-2 text-base justify-center  mr-8`}
            dangerouslySetInnerHTML={{
              __html: static_data.websites[i].description,
            }}
          />
          <WebStacks stacks={static_data.websites[i].stacks} />
        </div>
      </div>,
    );
  }

  return (
    <div className="flex  flex-col items-center text-center justify-center mt-20 ">
      {cur_websites}
    </div>
  );
}

export default WebsitesList;
