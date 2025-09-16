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
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setStartTypewriter(true);
    } else {
      const timer = setTimeout(() => {
        setStartTypewriter(true);
      }, 1970); 

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