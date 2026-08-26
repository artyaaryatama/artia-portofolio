'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VISIBLE_MS = 2000; // how long the splash sits on screen
const EXIT_MS = 800;     // how long the slide-up exit animation takes

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setIsVisible(false), VISIBLE_MS);
    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    if (isVisible) return;
    // Fire onComplete exactly when the exit animation below actually finishes,
    // instead of relying on AnimatePresence to work out timing across several
    // independently-delayed nested exit animations.
    const completeTimer = setTimeout(onComplete, EXIT_MS);
    return () => clearTimeout(completeTimer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: EXIT_MS / 1000, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-center"
          >
            <h4 className="font-space-grotesk font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xxxl:text-7xl leading-tight mb-6">
              One sec, don&apos;t blink 👀
            </h4>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="font-space-grotesk text-sm sm:text-base lg:text-lg xxxl:text-xl text-muted mt-14" 
            >
              Artia Aryatama
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}