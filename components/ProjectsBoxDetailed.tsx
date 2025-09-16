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
      <div className="md:flex md:flex-row-reverse md:gap-10">
        
        {/* image */}
        <div className="md:w-2/5 xxxl:w-100">
         <div className="w-full h-50 bg-primary border-6 border-foreground group
          ">
            <div className="custom-border w-full h-full flex items-center justify-center
            ">
              <Image 
                src={imgSrc}
                alt={imgAlt}
                draggable={false}
                width={700}
                height={700}
                loading='lazy'
                className="
                w-80 h-40 
                px-3
                object-contain lg:grayscale group-hover:grayscale-0 rounded-xs"
              />
            </div>

          </div>

          <div className="md:flex mt-3 hidden">
            <ul className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <li key={idx} className=" text-xs bg-greyish px-2 py-1 rounded">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:grid grid-cols-2 gap-3 items-center mt-4 hidden
          ">
            {
              linkRepo !== '' && (
                <BtnSourceCode
                  link={linkRepo}
                  className={`${linkProd? 'col-span-1' : 'col-span-2 ' }`}
                  />
                )
              }
            {
              linkProd !== '' && (
                <BtnSites
                link={linkProd} 
                className={`${linkRepo? 'col-span-1' : 'col-span-2 ' }`}
                />
              )
            }

          </div>
        </div>

        {/* text */}
        <div className="md:w-3/5">
          <div className="flex flex-col items-start justify-center gap-1 px-1
          ">
            <p className="text-left text-primary 
              text-md mt-3 
              md:mt-0
            ">{duration}</p>

            <p className="text-left text-wrap
              text-md leading-5 font-semibold mt-1
              lg:text-base lg:leading-6
            ">{imgAlt} {projectName !== '' && ` | ${projectName}`} </p>

            <div className="flex mt-2 md:hidden">
              <ul className="flex gap-2 flex-wrap">
                {tags.map((tag, idx) => (
                  <li key={idx} className=" text-xs bg-greyish px-2 py-1 rounded">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-left text-wrap
              text-sm leading-5 
              lg:text-base lg:leading-6
              mt-4 md:mt-2
            ">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 items-center mt-3 px-1 md:hidden
          
          ">
            {
              linkRepo !== '' && (
                <BtnSourceCode
                  link={linkRepo}
                  className={`${linkProd? 'col-span-1' : 'col-span-2' }`}
                  />
                )
              }
            {
              linkProd !== '' && (
                <BtnSites
                link={linkProd} 
                className={`${linkRepo? 'col-span-1' : 'col-span-2' }`}
                />
              )
            }

          </div>
        </div>

      </div>
    </div>
  )
}