"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export default function Navbar() {

  const currentPath = usePathname();

  return (
    <nav className="
      fixed inset-x-0 top-0 z-50
      bg-background/70 backdrop-filter backdrop-blur-lg w-full
      font-space-grotesk text-sm h-[62px]
      px-5 pt-3
      ">

      <ul className="
        grid grid-cols-4
        gap-2.5
        has-autofill:
      ">

        <li className="
          text-sm
          col-span-3
          ">
          <div className="
            font-bold leading-[14px]
            ">
            <Link href={'/'}>
              ARTIA <span className="block">PORTO-</span> <span>FOLIO</span>
            </Link>

          </div>

        </li>

        {/* <li className="">
          <Button
            size={'nopadx'}
            variant={'outline'}
            className="overflow-hidden 
              text-sm
            "
            >
              <Link href="mailto:artyaaryatama@gmail.com">
                Contact
              </Link>
          </Button>
        </li> */}

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