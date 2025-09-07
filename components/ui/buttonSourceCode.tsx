'use client';

import { Button } from "../ui/button";
import { Terminal } from "lucide-react"

interface BtnSourceCodeProps {
  link: string;
  className?: string;
}

export default function BtnSourceCode({ link, className }: BtnSourceCodeProps) {
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

        <Terminal />
        Source Code
      </Button>
    </a>

  );
}