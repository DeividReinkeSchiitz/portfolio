"use client";

import React from "react";
import { motion } from "framer-motion";
import { homeContent, ANIMATION_DELAYS } from "../constants";

function StatusBadge() {
  return (
    <motion.div
      className="flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
      initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay: ANIMATION_DELAYS.statusBadge,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs sm:text-sm text-white/50 font-medium tracking-wide">
        {homeContent.statusText}
      </span>
    </motion.div>
  );
}

export default React.memo(StatusBadge);
