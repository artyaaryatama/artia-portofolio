"use client";

import { useState, useLayoutEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowSplash(false);
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsFirstVisit(false);
  };

  return (
    <>
      {isFirstVisit && showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      <div style={{
        visibility: showSplash ? 'hidden' : 'visible',
        opacity: showSplash ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
      }}>
        <Navbar />
        <div className="mb-12 block lg:flex lg:items-center lg:flex-col">
          {children}
          <SpeedInsights />
        </div>
        <Footer />
      </div>
    </>
  );
}