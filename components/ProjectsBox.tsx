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
    <div className="font-figtree w-full lg:w-85 ">
      {
        imgSrc !== 'none' ? 
        <div>
          <Link 
            href={'/experience'}
            className=""
          >
            <div className="w-full lg:w-85 h-40 bg-primary border-6 border-foreground  group

            ">
              <div className="custom-border w-full h-full flex items-center justify-center">
                <Image 
                  src={imgSrc}
                  alt={imgAlt}
                  draggable={false}
                  width={700}
                  height={700}
                  loading='lazy'
                  className="w-64 px-2 h-30 object-contain lg:grayscale group-hover:grayscale-0 rounded-xs"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-1 
              mt-3 mb-2 px-1
              lg:items-center lg:mt-2 lg:mb-0 
            ">
              <p className="text-left text-primary 
                text-xs md:text-sm lg:text-center
              ">{duration}</p>
              <p className="text-left text-wrap
                text-sm lg:text-md leading-5 lg:text-center group-hover:underline underline-offset-3 
              ">{imgAlt} {projectName !== '' && ` | ${projectName}`}</p>
            </div>
          </Link>
        </div>
        : 
        <div className="w-full md:w-65 h-40 bg-primary border-6 border-foreground 
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