import phone_svg from "@/../public/phone.svg";
import battery_svg from "@/../public/battery.svg";
import { IconConfig } from "@/app/components/PageHeader/types";

export const mobilesPageConfig = {
  title: "Mobile Projects",
  description:
    "I've built cool <span>Mobile Apps</span> using anything from Native to React Native. Here are some of my <span>favorite</span> projects over the course of my journey.",
  icons: [
    {
      src: phone_svg,
      alt: "Phone",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] right-20 md:right-0",
    },
    {
      src: battery_svg,
      alt: "Battery",
      className:
        "absolute w-10 h-10 md:w-16 md:h-16 top-[-38px] md:bottom-[-60px] left-[35px]",
    },
  ] as IconConfig[],
};
