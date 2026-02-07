"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  LayoutGroup,
} from "framer-motion";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "./constants";

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

function Header({ className, style }: HeaderProps) {
  const currentPath = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  /* Entrance: whole bar drops in + fades */
  const barVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.header
      variants={barVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 p-3 sm:p-5 ${className ?? ""}`}
      style={style}
    >
      <LayoutGroup>
        <motion.nav
          layout
          className={`
            relative flex w-full mx-auto max-w-2xl items-center justify-between sm:justify-evenly
            rounded-2xl px-3 py-2 sm:px-2 sm:py-2.5
            transition-all duration-500 ease-out
            ${
              scrolled
                ? "bg-black/20 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,199,255,0.04)]"
                : "bg-white/[0.02] backdrop-blur-xl"
            }
          `}
          transition={{ layout: { duration: 0.3 } }}
        >
          {/* Accent top-edge glow — visible only when scrolled */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent"
            initial={{ width: "0%" }}
            animate={{
              width: scrolled ? "60%" : "0%",
              opacity: scrolled ? 0.5 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Desktop nav items */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={currentPath === link.href}
                index={i}
              />
            ))}
          </div>

          {/* Mobile: brand hint + hamburger */}
          <MobileMenu>
            {NAV_LINKS.map((link, i) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={currentPath === link.href}
                index={i}
              />
            ))}
          </MobileMenu>
        </motion.nav>
      </LayoutGroup>
    </motion.header>
  );
}

export default Header;
