"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const currentPath = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setHidden(false);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 5) {
        setHidden(true);   
      } else if (currentScrollY < lastScrollY - 5) {
        setHidden(false);  
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed inset-x-0 top-3 z-50
        font-space-grotesk text-sm lg:text-lg
        transition-transform duration-500
      `}
    >
      <ul className="flex justify-between items-center">

        <li
          className={`
            w-32 min-xxxl:w-[14vw] min-lg:w-[12vw]
            text-sm lg:text-lg 
            bg-background/70 backdrop-filter backdrop-blur-sm
            py-3 px-5
            transition-all duration-700 ease-in-out
            ${hidden ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
            flex justify-end
          `}
        >
          <div className="font-bold leading-[14px] text-base lg:leading-4 text-left">
            <Link href={'/'}>
              ARTIA <span className="block">PORTO—</span> <span>FOLIO</span>
            </Link>
          </div>
        </li>

        <li
          className={`
            w-32 min-xxxl:w-[14vw] min-lg:w-[12vw]
            flex flex-col gap-1
            py-3 px-5
            bg-background/70 backdrop-filter backdrop-blur-sm 
            lg:text-lg 
            transition-all duration-700 ease-in-out
            ${hidden ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          <Button
            size={'nopady'}
            variant={'link'}
            className={`${currentPath === '/' ? 'font-bold underline underline-offset-2 ' : ''} lg:text-base text-sm`}
          >
            <Link href={{ pathname: "/" }}>
              HOME
            </Link>
          </Button>
          <Button
            size={'nopady'}
            variant={'link'}
            className={`${currentPath === '/experience' ? 'font-bold underline underline-offset-2 ' : ''} lg:text-base text-sm `}
          >
            <Link href={{ pathname: "/experience" }}>
              EXPERIENCE
            </Link>
          </Button>
        </li>

      </ul>
    </nav>
  )
}
