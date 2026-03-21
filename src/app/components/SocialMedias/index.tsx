"use client";
import React from "react";
import Image from "next/image";
import Text from "@/app/components/Text";
import ClientDiv from "@/app/components/ClientDiv";
import { motion } from "framer-motion";

interface SocialMediasProps {
  className?: string;
  social_medias: {
    name: string;
    description: string;
    icon: string;
    link: string;
  }[];
}

function SocialMedias({ className, social_medias }: SocialMediasProps) {
  const cur_medias = [];

  for (let i = 0; i < social_medias.length; i++) {
    cur_medias.push(
      <ClientDiv
        open={social_medias[i].link}
        key={i}
        className={`group flex items-center mb-5 
                    justify-self-start
                    w-full font-normal
                    hover: cursor-pointer
                    hover:shadow-lg hover:scale-105 hover:transform transition-transform duration-300 ease-in-out relative
                    `}
      >
        <div
          className={`flex p-3 items-center justify-center rounded-md relative flex-wrap h-[50px] w-[50px] md:h-[70px] md:w-[70px] shrink-0`}
        >
          {/* Colored Square */}
          <div
            className={
              "absolute z-0 opacity-50 rounded-md bg-[var(--blue)] h-full w-full"
            }
          />
          <Image
            src={social_medias[i].icon}
            alt={social_medias[i].name}
            width={30}
            height={30}
            className={`w-[30px] h-[30px] z-10 object-contain`}
          />
        </div>

        <div className={"inline-block text-left ml-4 my-auto "}>
          <div className={"flex items-center gap-2"}>
            <Text className={"pb-0 font-semibold md:!text-xl"}>
              {social_medias[i].name}
            </Text>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 flex justify-end items-center"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-5 h-5 text-[var(--blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
          <Text className={"opacity-70 text-sm md:!text-base"}>
            {social_medias[i].description}
          </Text>
        </div>
      </ClientDiv>,
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut" }}
      className={`ml-24 lg:mr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 ${className} `}
    >
      {cur_medias}
    </motion.div>
  );
}

export default SocialMedias;
