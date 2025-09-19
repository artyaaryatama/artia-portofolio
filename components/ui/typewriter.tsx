"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function TextGenerateEffect({
  words,
  className = "",
  startAnimation = true,
  h1No = true,
}: {
  words: string;
  className?: string;
  startAnimation?: boolean;
  h1No?:boolean
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
    h1No ? (
      <motion.h1 className={className}>
        {displayText}
      </motion.h1>
    ) : (
      <motion.h2 className={className}>
        {displayText}
      </motion.h2>
    )
  );
};