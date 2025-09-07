import { Button } from "../ui/button"
import Link from "next/link"
import { MoveRight } from "lucide-react"

export default function About(){

  return (
    <div className="layout-gap 
      flex flex-col gap-6 items-left
    ">
      <div className="flex items-center gap-4">
        <h2 className=" font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">
          About 
        </h2>

        <div className="bg-primary px-3 py-2 -rotate-4 rounded-sm">
          <h2 className=" font-space-grotesk
            text-[26px] font-bold leading-[38px] 
          ">Me</h2>
        </div>
      </div>

      <div>
        <p className="font-figtree text-left 
          text-sm leading-5 
        ">
          As a Jr. frontend developer, I&apos;ve worked with VanillaJS, jQuery, React, Next.js, and TailwindCSS to create functional web projects. By building reusable components and working with API integration, I bridge design and development to deliver seamless, pixel-perfect applications.
        </p>
      </div>

      <div>
        <Button
          variant={'linkNoUnderline'}
          className="
            text-sm border-2 border-primary font-semibold
          "
        >
          <Link
            href={'/'}
            className="flex items-center gap-2"
          >
            Resume 
            <MoveRight className="w-4 h-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}