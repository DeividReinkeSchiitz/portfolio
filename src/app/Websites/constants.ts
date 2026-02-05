import website_svg from "@/../public/website.svg";
import { IconConfig } from "@/app/components/PageHeader/types";

export const websitesPageConfig = {
  title: "Website Projects",
  description:
    "Every backend needs a amazing interface. Here are a few of my all-time favorites that I'm proud to share!",
  icons: [
    {
      src: website_svg,
      alt: "Website Projects",
      className:
        "absolute w-10 h-10 md:w-20 md:h-20 mb-3 ml-2 bottom-[-10] right-12",
    },
  ] as IconConfig[],
};
