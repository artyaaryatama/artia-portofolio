import ProjectBox from "../ProjectsBox"
import { projectsOthers } from "@/lib/projectsOthers"

export default function ProjectVault(){
  return(
    <div className="layout-gap flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <h4 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">Project <span  className="inline">Vault</span></h4>
      </div>

      <p className="font-figtree 
        text-sm leading-5 
        lg:text-base lg:leading-6
      ">
       A curated archive of my projects, from collaborative work to personal builds, each representing a milestone in my development journey.
      </p>

      <div className="
        scrollbar-thin scrollbar-thumb-gray-400
        mt-4
        grid gap-5 grid-cols-1 sm:grid-cols-2 sm:gap-3
        lg:flex lg:pb-5 lg:flex-row lg:overflow-x-auto lg:items-start
      ">
        {
          projectsOthers.length > 0 && 
          projectsOthers
            .filter((_, index) => index < 4)
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

        {/* <div className=" flex items-center mt-3
          lg:justify-center lg:w-65 lg:h-40 lg:mt-0">
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
        </div> */}
        
      </div>
    </div>
  )
}