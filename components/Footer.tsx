import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      bg-muted pt-10
    ">
      <div className="layout-gap mb-10
        flex flex-col gap-6 text-background ">
        <div className="flex items-start lg:ml-24">
          <h3 className="
            font-space-grotesk font-bold 
            leading-[38px] text-3xl sm:text-4xl
            lg:text-5xl lg:leading-13
            xl:text-6xl xl:leading-15
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

        <p className="font-figtree text-sm leading-5
          lg:text-base lg:leading-6 lg:w-170
        ">
          Currently open to new opportunities in freelance, contract, or full-time positions. Looking for someone to turn designs into seamless web experiences? <span className="underline underline-offset-2 font-semibold">Let&apos;s make it happen.</span>
        </p>

        <div className="
          mt-3
          flex flex-col gap-6 
          lg:justify-end
          ">

          <div className="
            flex justify-start gap-5 items-end
            lg:flex-row-reverse
            ">
            <div className="border-4 border-primary w-[90px] h-[90px]">
              <Image 
                src= {'/person/zoom.jpg'}
                alt= "Artia Audrian Aryatama"
                width={400}
                height={400}
                loading='lazy'
                draggable={false}
                className="grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-500 object-cover"
                />
            </div>

            <div>
              <h5 className="font-space-grotesk
                text-lg font-bold lg:text-left
              ">
                Socials
              </h5>
              <ul className=" font-figtree
                text-sm leading-4 grid grid-cols-2 gap-x-2 gap-y-1
              ">
                <li className="hover:underline hover:underline-offset-2">
                  <Link
                    href={'https://github.com/artyaaryatama'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    /Github 
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-2">
                  <Link
                    href={'https://www.linkedin.com/in/artia-aryatama/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    /LinkedIn 
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-2">
                  <Link
                    href={'https://www.instagram.com/artiaudrian/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    /Instagram 
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-2">
                  <Link
                    href={'mailto:artyaaryatama21@gmail.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    /Email 
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        
          
        </div>
      </div>

      <div className="bg-primary font-space-grotesk py-5 flex flex-col layout-gap">
        <p className=" text-background
        text-left text-sm lg:text-base lg:leading-6
        ">@ <span className="block">2025</span></p>
        <p className="text-background font-semibold text-2xl
          text-right leading-[28px]
        "
         >
          ARTIA AUDRIAN ARYATAMA
        </p>
      </div>
    </footer>
  )
}