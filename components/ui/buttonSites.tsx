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
        className=" border-foreground bg-muted text-background hover:text-primary hover:bg-foreground hover:font-semibold border-2 
        w-full hover:cursor-pointer 
        text-sm md:text-xs lg:text-base
      ">
        <Sticker/>
        Check the sites!
      </Button>
    </a>

  );
}