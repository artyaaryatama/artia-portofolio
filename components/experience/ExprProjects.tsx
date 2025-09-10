
import ProjectBoxDetailed from "../ProjectsBoxDetailed"

interface data {
  src: string,
  alt: string,
  name: string,
  duration: string,
  description: string,
  tags: string[],
  linkRepo: string,
  linkProd: string,
}

interface projects {
  projectsData: data[],
  projectTitle: string,
}

export default function ExprProjects({projectsData, projectTitle}:projects){
  return(
    <div className="">
      <div className="layout-gap">
        <h5 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">{projectTitle}</h5>

        <div className="flex flex-col gap-6 mt-6">
          {
            projectsData.length > 0 && 
            projectsData.map((data, key) => (
              <ProjectBoxDetailed 
                key={key}
                imgSrc={data.src}
                imgAlt={data.alt}
                projectName={data.name}
                duration={data.duration}
                description={data.description}
                tags={data.tags}
                linkRepo={data.linkRepo}
                linkProd={data.linkProd}
              />
            ))}
        </div>
        
        

      
      </div>
    </div>
  )
}