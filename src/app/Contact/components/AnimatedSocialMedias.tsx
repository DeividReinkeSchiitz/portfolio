"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface SocialMedia {
  name: string;
  description: string;
  icon: string;
  link: string;
}

interface AnimatedSocialMediasProps {
  socialMedias: SocialMedia[];
}

function SocialMediaCard({
  media,
  index,
}: {
  media: SocialMedia;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Magnetic effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) * 0.15);
    mouseY.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={media.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        delay: 1.3 + index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex items-center p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[var(--blue)]/30 hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer"
    >
      <motion.div className="relative flex items-center justify-center min-w-[60px] w-[60px] h-[60px] rounded-xl bg-[var(--blue)]/10 border border-[var(--blue)]/20">
        <Image
          src={media.icon}
          alt={media.name}
          width={30}
          height={30}
          className="relative z-10 w-[30px] h-[30px] object-contain"
        />
      </motion.div>

      {/* Text content */}
      <div className="ml-4 flex-1 relative z-10">
        <motion.h3
          className="font-semibold text-base sm:text-lg text-white mb-0.5 group-hover:text-[var(--blue)] transition-colors duration-300"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(10px)",
          }}
        >
          {media.name}
        </motion.h3>
        <motion.p
          className="text-xs sm:text-sm text-white/60"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(5px)",
          }}
        >
          {media.description}
        </motion.p>
      </div>

      {/* Arrow icon with slide animation */}
      <motion.div
        className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          x: [0, 4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-5 h-5 text-[var(--blue)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </motion.div>
    </motion.a>
  );
}

export default function AnimatedSocialMedias({
  socialMedias,
}: AnimatedSocialMediasProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="w-full max-w-screen-lg px-4"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.4,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
        <span className="text-sm font-medium text-white/40 tracking-wider uppercase">
          Connect with me
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socialMedias.map((media, index) => (
          <SocialMediaCard key={media.name} media={media} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
