"use client";

import { useState } from 'react';
import SplashScreen from "@/components/SplashScreen";
import HomeHero from "@/components/home/HomeHero";
import About from "@/components/home/About";
import Graduate from "@/components/home/Graduate";
import Experience from "@/components/home/Experience";
import ProjectVault from "@/components/home/ProjectVault";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [startTypewriter, setStartTypewriter] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setStartTypewriter(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className="
        flex flex-col 
        gap-12 min-xxxl:w-[70vw] min-lg:w-[74vw] w-full 
      ">
        <HomeHero startTypewriter={startTypewriter} />
        <div className="
          flex flex-col 
          gap-12 
          lg:flex-row
          layout-gap
        ">
          <About />
          <Graduate />
        </div>
        <Experience />
        <ProjectVault/>
      </div>
    </>
  );
}