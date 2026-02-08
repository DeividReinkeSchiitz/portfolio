"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TextScramble({
  text,
  className,
  delay = 0,
  speed = 35,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [started, setStarted] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    frameRef.current = 0;

    const interval = setInterval(() => {
      frameRef.current += 0.4;
      const resolvedCount = Math.floor(frameRef.current);

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolvedCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (resolvedCount >= text.length) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      aria-label={text}
    >
      {displayText}
    </motion.span>
  );
}
