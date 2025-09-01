import ProjectBox from "../ProjectsBox"
import { MoveRight } from "lucide-react"
import { projectsFreelances } from "@/lib/projectsFreelances"
import Link from "next/link"

export default function Experience(){
  return(
    <div className="layout-gap flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <h4 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">Freelance <span  className="block">Experience</span></h4>

        <Link
            href={'/experience'}
            className="flex items-center gap-2 font-space-grotesk"
          >
            See others 
            <MoveRight className="w-7 h-5" />
          </Link>
      </div>

      <p className="font-figtree 
        text-sm leading-5 
      ">
        1.5+ years of freelance experience, developing landing pages, web applications tailored to client needs.
      </p>

      <div className="flex items-start gap-3 overflow-x-auto w-full 
        pb-4
        scrollbar-thin scrollbar-thumb-gray-400
      ">
        {
          projectsFreelances.length > 0 && 
          projectsFreelances
            .filter((_, index) => index < 2)
            .map((data, index) => (
              <ProjectBox 
                key={index}
                imgSrc={data.src}
                imgAlt={data.alt}
                projectName={data.name}
                duration={data.duration}
              />
            ))
        }

        <ProjectBox 
          imgSrc={'none'}
          imgAlt={''}
          projectName={'See my other projects! 👀'}
          duration={''}
        />
        
      </div>
    </div>
  )
}