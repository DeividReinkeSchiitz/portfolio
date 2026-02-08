"use client";

import React from "react";
import { motion } from "framer-motion";

function GradientOrb() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      {/* Primary orb — centered, large */}
      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full orb-primary" />

      {/* Secondary orb — offset, smaller */}
      <div className="absolute top-[35%] left-[60%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full orb-secondary" />
    </motion.div>
  );
}

export default React.memo(GradientOrb);
