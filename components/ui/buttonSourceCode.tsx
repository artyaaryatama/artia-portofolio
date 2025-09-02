'use client';

import { Button } from "../ui/button";

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
        className="border-2 border-primary text-foreground
        text-sm w-full
      ">
        Source Code
      </Button>
    </a>

  );
}