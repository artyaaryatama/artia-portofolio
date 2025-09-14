import { Button } from "../ui/button"
import { MoveRight } from "lucide-react"

export default function About(){

  return (
    <div className="
      flex flex-col gap-6 items-left
    ">
      <div className="flex items-center gap-4 lg:h-20">
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
          lg:text-base lg:leading-6
        ">
          As a frontend developer, I&apos;ve worked with React, Next.js, TailwindCSS, and other modern frameworks to build responsive and user-friendly web applications. My work bridges design and development, focusing on clean, reusable code and smooth user experiences.
        </p>
      </div>

      <div>
        <Button
          variant={'linkNoUnderline'}
          className="
            text-sm border-2 border-primary font-semibold
          "
        >
          <a
            href={'/artia-cv.pdf'}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Resume 
            <MoveRight className="w-4 h-2" />
          </a>
        </Button>
      </div>
    </div>
  )
}