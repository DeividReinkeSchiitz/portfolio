"use client";
import React from "react";
import Image from "next/image";

// import Download from public
import Text from "@/app/components/Text";
import ReactGA from "react-ga4";

interface DownResumeProps {
  className?: string;
}

function DownResume({ className, ...rest }: DownResumeProps) {
  const openDownloadUrl = () => {
    ReactGA.event({
      category: "Resume",
      action: "Download",
      label: "Resume Download", // Optional, describes the event
    });

    window.open(
      "https://raw.githubusercontent.com/DeividReinkeSchiitz/DeividReinkeSchiitz.github.io/refs/heads/master/resume.pdf",
    );
  };

  return (
    <div
      className={`flex items-center justify-center ${className} ${rest} 
            hover:cursor-pointer mt-5 hover:underline`}
      onClick={openDownloadUrl}
    >
      <Image
        src={"download.svg"}
        alt="Download Resume"
        width={6}
        height={6}
        className={"w-6 h-6 md:w-7 md:h-7 "}
      />
      <Text className={"mt-1.5 ml-2 sm:text-xl "}>Download Resume</Text>
    </div>
  );
}

export default DownResume;
