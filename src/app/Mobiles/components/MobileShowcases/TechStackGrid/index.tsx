"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TechStackGridProps } from "./types";

export default function TechStackGrid({
  stacks,
  accentColor,
}: TechStackGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {stacks.map((stack, i) => (
        <motion.div
          key={stack.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5 + i * 0.05,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative flex items-center gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
        >
          {/* Icon with color backdrop */}
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-lg opacity-20 scale-125 blur-sm"
              style={{ backgroundColor: stack.color }}
            />
            <div className="relative w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center p-1.5">
              <Image
                src={stack.icon}
                alt={stack.name}
                width={26}
                height={26}
                className="object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0">
            <p className="text-sm font-medium text-white/80 truncate">
              {stack.name}
            </p>
            <p className="text-xs text-white/40 truncate">
              {stack.description}
            </p>
          </div>

          {/* Hover accent line */}
          <div
            className="absolute bottom-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to right, transparent, ${accentColor}40, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
