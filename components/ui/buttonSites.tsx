'use client';

import { Button } from "../ui/button";

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
        className=" border-2 border-background text-primary bg-background w-full 
        text-sm
      ">
        Check the sites!
      </Button>
    </a>

  );
}