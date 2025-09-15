"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function TextGenerateEffect({
  words,
  className = "",
  startAnimation = true,
}: {
  words: string;
  className?: string;
  startAnimation?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  useEffect(() => {
    if (!startAnimation) return;

    const controls = animate(count, words.length, {
      type: "tween",
      duration: 3.5,
      ease: "easeInOut",
    });
    
    return controls.stop;
  }, [words, startAnimation]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};