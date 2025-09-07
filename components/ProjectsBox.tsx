import Link from "next/link"
import Image from "next/image"

interface project {
  imgSrc: string,
  imgAlt: string,
  projectName: string,
  duration: string,
}

export default function ProjectBox(
  {imgSrc, imgAlt, projectName, duration} : project
){
  return(
    <div className="font-figtree w-65">
      {
        imgSrc !== 'none' ? 
        <div>
          <div className="w-65 h-40 bg-primary border-6 border-foreground 

          ">
            <div className="custom-border w-full h-full flex items-center justify-center">
              <Link 
                href={'/experience'}
                className="underline underline-offset-2 flex items-center gap-2"
              >
                <Image 
                  src={imgSrc}
                  alt={imgAlt}
                  width={200}
                  height={200}
                  className="w-54 h-30 object-cover grayscale hover:grayscale-0 rounded-xs"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 
            mt-2 px-1
          ">
            <p className="text-center text-primary 
              text-xs
            ">{duration}</p>
            <p className="text-center text-wrap
              text-sm leading-5
            ">{imgAlt} | {projectName}</p>
          </div>
        </div>
        : 
        <div className="w-65 h-40 bg-primary border-6 border-foreground 
        ">
          <div className="custom-border w-full h-full flex items-center justify-center bg-foreground">
            <Link 
              href={'/experience'}
              className="underline underline-offset-2 flex items-center gap-2"
            >
              <p className="text-center text-primary">
                {projectName}
              </p>

            </Link>
          </div>
        </div>
      }
    </div>
  )
}