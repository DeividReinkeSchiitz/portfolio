"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WebShowcaseStack } from "./types";

interface WebsiteTechPillsProps {
  stacks: WebShowcaseStack[];
  accentColor: string;
}

export default function WebsiteTechPills({
  stacks,
  accentColor,
}: WebsiteTechPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {stacks.map((stack, i) => (
        <motion.div
          key={stack.name}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.6 + i * 0.06,
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-250 cursor-default"
        >
          {/* Icon */}
          <div className="relative w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center p-0.5 shrink-0">
            <Image
              src={stack.icon}
              alt={stack.name}
              width={16}
              height={16}
              className="object-contain"
            />
          </div>

          {/* Label */}
          <div className="min-w-0">
            <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-colors">
              {stack.name}
            </span>
            <span className="hidden sm:inline text-[10px] text-white/30 ml-1.5">
              {stack.description}
            </span>
          </div>

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 12px ${accentColor}10`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
