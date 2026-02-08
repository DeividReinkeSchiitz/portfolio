"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTICLES } from "../constants";

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[var(--blue)]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0, particle.opacity, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default React.memo(FloatingParticles);
