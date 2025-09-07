import ProjectBox from "../ProjectsBox"
import { MoveRight } from "lucide-react"
import { projectsFreelances } from "@/lib/projectsFreelances"
import { Button } from "../ui/button"

export default function Experience(){
  return(
    <div className="layout-gap flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <h4 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">Freelance <span  className="inline">Experience</span></h4>
      </div>

      <p className="font-figtree 
        text-sm leading-5 
      ">
        1.5+ years of freelance experience, developing landing pages, web applications tailored to client needs.
      </p>

      {/* scrolled   
        flex items-start gap-3 overflow-x-auto w-full 
        pb-5
        scrollbar-thin scrollbar-thumb-gray-400
      */}
      <div className="
        flex items-start gap-3 overflow-x-auto w-full 
        pb-5
        scrollbar-thin scrollbar-thumb-gray-400
      ">
        {
          projectsFreelances.length > 0 && 
          projectsFreelances
            .filter((_, index) => index < 3)
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

        <div className="w-65 h-40 flex items-center justify-center">
          <Button
            variant={'outline'}
            className="flex justify-start items-center font-space-grotesk font-normal hover:bg-primary hover:font-semibold"
          >
            See my other projects! 👀 
            <MoveRight className="w-10 h-7" />
          </Button>
        </div>
        
      </div>
    </div>
  )
}