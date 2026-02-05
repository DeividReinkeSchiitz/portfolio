"use client";

import React from "react";
import Text from "@/app/components/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

function Header({ className, style }: HeaderProps) {
  const currentPath = usePathname();

  return (
    <div
      className={`absolute w-full z-10 p-5 transform  ${className}`}
      style={style}
    >
      <div
        className="flex w-full ml-auto mr-auto pt-3 pb-3 max-w-2xl items-center border-[#fafafa] border-[1px] rounded-2xl justify-evenly
            "
      >
        <Link href={"/"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/" && "text-[var(--blue)]"}`}
          >
            Home
          </Text>
        </Link>
        <Link href={"/Websites"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/Websites" && "text-[var(--blue)]"}`}
          >
            Websites
          </Text>
        </Link>
        <Link href={"/Mobiles"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/Mobiles" && "text-[var(--blue)]"}`}
          >
            Mobiles
          </Text>
        </Link>
        <Link href={"/Others"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/Others" && "text-[var(--blue)]"}`}
          >
            Others
          </Text>
        </Link>
        <Link href={"/Timeline"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/Timeline" && "text-[var(--blue)]"}`}
          >
            Timeline
          </Text>
        </Link>
        <Link href={"/Contact"}>
          <Text
            hover
            className={`sm:text-xl sm:p-2 hover:opacity-80 ${currentPath == "/Contact" && "text-[var(--blue)]"}`}
          >
            Contact
          </Text>
        </Link>
      </div>
    </div>
  );
}

export default Header;
