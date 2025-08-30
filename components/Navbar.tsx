"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export default function Navbar() {

  const currentPath = usePathname();

  return (
    <nav className="
      font-space-grotesk text-sm
      mx-5 h-15
      position-fixed top-0 left-0 right-0
      ">

      <ul className="
        grid grid-cols-4
        gap-[10px]
        has-autofill:
      ">

        <li className="
          text-sm
          col-span-2
          ">
          <div className="
            font-bold leading-[14px]
            ">
            <Link href={'/'}>
              ARTIA <span className="block">PORTOFO-</span> <span>LIO</span>
            </Link>

          </div>

        </li>

        <li className="">
          <Button
            size={'nopadx'}
            variant={'outline'}
            >
            <Link href={{ pathname: "/" }}>
              Contact ME
            </Link>
          </Button>
        </li>

        <li className="
          flex flex-col 
          gap-1
        ">

          <Button
            size={'nopady'}
            variant ={'link'}
            className={`
              ${currentPath === '/' ? 'font-bold' : ''}
              `}
            >
            <Link href={{ pathname: "/" }}>
              HOME
            </Link>
          </Button>
          <Button
            size={'nopady'}
            variant ={'link'}
            className={`
              ${currentPath === '/experience' ? 'font-bold' : ''}
              `}
            >
            <Link href={{ pathname: "/experience" }}>
              EXPERIENCE
            </Link>
          </Button>

        </li>


        <li>

        </li>
      </ul>
    </nav>
  )
}