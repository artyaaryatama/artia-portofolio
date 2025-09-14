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
        className=" border-foreground  hover:font-semibold border-2 bg-muted text-background hover:bg-foreground hover:text-primary
        text-sm w-full hover:cursor-pointer
      ">

        <Terminal />
        Source Code
      </Button>
    </a>

  );
}