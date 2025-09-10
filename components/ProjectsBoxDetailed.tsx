import Link from "next/link"
import Image from "next/image"
import BtnSourceCode from "./ui/buttonSourceCode"
import BtnSites from "./ui/buttonSites"

interface project {
  imgSrc: string,
  imgAlt: string,
  projectName: string,
  duration: string,
  description: string,
  tags: string[],
  linkRepo: string,
  linkProd: string,
}

export default function ProjectBoxDetailed(
  {imgSrc, imgAlt, projectName, duration, description, tags, linkRepo, linkProd} : project
){
  return(
    <div className="font-figtree w-full">
      <div>
        <div className="w-full h-50 bg-primary border-6 border-foreground 

        ">
          <div className="custom-border w-full h-full flex items-center justify-center">
            <Link 
              href={'/experience'}
              className="underline underline-offset-2 flex items-center gap-2"
            >
              <Image 
                src={imgSrc}
                alt={imgAlt}
                draggable={false}
                width={700}
                height={700}
                loading='lazy'
                className="
                w-full h-40 
                object-cover grayscale hover:grayscale-0 rounded-xs"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-1 
          my-2 px-1
        ">
          <p className="text-left text-primary 
            text-sm
          ">{duration}</p>
          <p className="text-left text-wrap
            text-md leading-5
          ">{imgAlt} | {projectName}</p>
          <p className="text-left text-wrap
            text-md leading-5
          ">{description}</p>
        </div>
        
        <ul>
          {tags.map((tag, idx) => (
            <li key={idx} className="inline-block mr-2 text-xs bg-gray-200 px-2 py-1 rounded">
              {tag}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 items-center mt-6">
          <BtnSourceCode
            link={linkRepo}
            className="cols-span-1"
          />
          <BtnSites
            link={linkProd} 
            className="cols-span-1"
          />

        </div>
      </div>
    </div>
  )
}