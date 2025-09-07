'use client';

import { Button } from "../ui/button";
import { Sticker } from "lucide-react";

interface BtnSitesProps {
  link: string;
  className?: string;
}

export default function BtnSites({ link, className }: BtnSitesProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button 
        className="text-foreground border-foreground hover:bg-primary hover:font-semibold border-2 bg-background
        text-sm w-full
      ">
        <Sticker/>
        Check the sites!
      </Button>
    </a>

  );
}