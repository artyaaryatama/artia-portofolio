"use client";

import { Space_Grotesk, Figtree} from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
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
      <head>
        <title>Artia Aryatama | Frontend Developer</title>
        <meta name="description" content="A collection of my work as a frontend developer, from landing pages to web applications." />

        <link rel="icon" type="image/png" sizes="16x16" href="/meta-icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta-icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/meta-icons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/meta-icons/favicon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/meta-icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/meta-icons/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/meta-icons/android-icon-192x192.png" />

        <link rel="apple-touch-icon" sizes="57x57" href="/meta-icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/meta-icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/meta-icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/meta-icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/meta-icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/meta-icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/meta-icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/meta-icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta-icons/apple-icon-180x180.png" />

        <link rel="manifest" href="/meta-icons/manifest.json" />
        <meta name="msapplication-TileImage" content="/meta-icons/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        <meta property="og:title" content="Artia Aryatama | Frontend Developer" />
        <meta property="og:description" content="A collection of my work as a frontend developer, from landing pages to web applications." />
        <meta property="og:url" content="https://artyaaryatama.me" />
        <meta property="og:site_name" content="Artia Aryatama | Frontend Developer" />
        <meta property="og:image" content="https://artyaaryatama.me/meta-icons/og2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Artia Aryatama" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artia Aryatama | Frontend Developer" />
        <meta name="twitter:description" content="A collection of my work as a frontend developer, from landing pages to web applications." />
        <meta name="twitter:image" content="/meta-icons/og2.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Artia Aryatama",
              "url": "https://artyaaryatama.me",
              "sameAs": [
                "https://github.com/artyaaryatama",
                "https://www.linkedin.com/in/artia-aryatama"
              ],
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }),
          }}
        />
      </head>
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
          </div>
          <Footer />
        </div>
      </body>
    </html> 
  );
}