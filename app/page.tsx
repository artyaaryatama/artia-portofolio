"use client";

import { useState, useEffect } from 'react';
import HomeHero from "@/components/home/HomeHero";
import About from "@/components/home/About";
import Graduate from "@/components/home/Graduate";
import Experience from "@/components/home/Experience";
import ProjectVault from "@/components/home/ProjectVault";

export default function Home() {
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    // Check if splash was shown for typewriter timing
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // If user has visited before, start typewriter immediately
      setStartTypewriter(true);
    } else {
      // If first visit, wait for splash screen duration + buffer
      const timer = setTimeout(() => {
        setStartTypewriter(true);
      }, 2900); // 3000ms splash + 1500ms transition buffer

      return () => clearTimeout(timer);
    }
  }, []);

  return (
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
  );
}