import ProjectBox from "../ProjectsBox"
import { MoveRight } from "lucide-react"
import { projectsOthers } from "@/lib/projectsOthers"
import { Button } from "../ui/button"
import Link from "next/link"

export default function ProjectVault(){
  return(
    <div className="layout-gap flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <h4 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">Project <span  className="inline">Vault</span></h4>
      </div>

      <p className="font-figtree 
        text-sm leading-5 
      ">
       A curated archive of my projects, from collaborations to experiments and side creations, each marking a step in my journey.
      </p>

      <div className="
        flex gap-3 w-full 
        pb-5
        scrollbar-thin scrollbar-thumb-gray-400
        flex-col items-center
        lg:flex-row lg:overflow-x-auto lg:items-start
      ">
        {
          projectsOthers.length > 0 && 
          projectsOthers
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
          <Link 
            href={'/experience'}
          >
            <Button
              variant={'outline'}
              className="flex justify-start items-center font-space-grotesk font-normal hover:bg-primary hover:font-semibold hover:cursor-pointer"
            >
              See my other projects! 👀 
              <MoveRight className="w-10 h-7" />
            </Button>
            
          </Link>
        </div>
        
      </div>
    </div>
  )
}