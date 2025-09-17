"use client";

import { Space_Grotesk, Figtree} from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeadMeta from "@/components/layout-head/HeadMeta";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "700"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
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
    <html lang="en">
      <HeadMeta/>
      
      <body
        className={`${spaceGrotesk.variable} ${figtree.variable} antialiased 
        bg-background
        `}
      >
        {isFirstVisit && showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
        
        <div style={{ 
          visibility: showSplash ? 'hidden' : 'visible',
          opacity: showSplash ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}>
          <Navbar />
          <div className="mb-12 block min-lg:flex min-lg:items-center min-lg:flex-col">
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html> 
  );
}