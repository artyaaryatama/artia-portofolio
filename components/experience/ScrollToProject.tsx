"use client";

import { useEffect } from "react";

export default function ScrollToProject() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}