import phone_svg from "@/../public/phone.svg";
import website_svg from "@/../public/website.svg";
import battery_svg from "@/../public/battery.svg";
import { IconConfig } from "@/app/components/PageHeader/types";

export const othersPageConfig = {
  title: "Other Projects",
  description:
    "I've created <span>templates</span> and backend projects that truly <span>spark</span> my curiosity. Here are a few of my all-time favorites that I'm proud to share!",
  icons: [
    {
      src: phone_svg,
      alt: "Phone",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] right-10 md:right-0",
    },
    {
      src: website_svg,
      alt: "Website Projects",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 bottom-[-20px] md:bottom-[-80px] right-10 md:right-0",
    },
    {
      src: battery_svg,
      alt: "Battery",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 bottom-20 md:top-[-45px] left-[0px]",
    },
  ] as IconConfig[],
};
