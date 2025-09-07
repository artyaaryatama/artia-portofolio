import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      mb-2
    ">
      <div className="layout-gap
      flex flex-col gap-6">
        <div className="flex items-start">
          <h3
            className="
              font-space-grotesk font-bold 
              leading-[38px] text-4xl
            "
          >
            Design Meets
            <span className="block">
              Development Here
              <span className="relative inline-flex size-2 ml-[10px] mt-2 align-middle">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
            </span>
          </h3>
        </div>

        <p className="font-figtree text-sm leading-5">
          Currently open to new opportunities in freelance, contract, or full-time positions. If you&apos;re looking for a frontend developer who bridges design and development, <span className="underline underline-offset-2  font-bold">let&apos;s build something great together.</span>
        </p>

        <div className="
          mt-3
          flex flex-col gap-6
          ">

          <div className="
            flex justify-start gap-3 items-end">
            <div className="border-4 border-primary w-[90px] h-[90px]">
              <Image 
                src= {'/person/zoom.jpg'}
                alt= "Artia Audrian Aryatama"
                width={300}
                height={300}
                draggable={false}
                className="grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-500 object-cover"
                />
            </div>

            <div>
              <h5 className="font-space-grotesk
                text-lg font-bold
              ">
                Socials
              </h5>
              <ul className=" font-figtree
                text-sm leading-4 grid grid-cols-2 gap-1 
              ">
                <li>
                  <Link
                    href={'/'}
                  >
                    /Github 
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                  >
                    /LinkedIn 
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                  >
                    /Instagram 
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                  >
                    /Email 
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        
          
        </div>
      </div>

      <div className="bg-primary font-space-grotesk py-2 mt-10">
        <p className=" text-background
        text-center text-sm 
        ">@ 2025 Artia Audrian Aryatama</p>
      </div>
    </footer>
  )
}