import SocialList from "./SocialList";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="
      layout-gap
    
      flex flex-col gap-6

      mb-5
    ">
      <div className="flex items-end">
        <h3 className="
        font-space-grotesk text-4xl
        font-bold leading-[38px]
        ">
          Design Meets <span className="block">Development Here</span>
        </h3>

        <span className="relative flex size-2 ml-2 mb-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
        </span>
      </div>
      
      <p className="font-figtree text-sm leading-5">
        Currently I available for new projects and collaborations. If you&apos;re looking for a frontend developer who blends design into development, let&apos;s build together!
      </p>

      <div className="
        mt-3
        flex flex-col gap-6
        
        ">
        <SocialList />

        <div className="
          flex justify-start">
          <div className="border-6 border-primary w-[130px] h-[130px]">
            <Image 
              src= {'/person/zoom.jpg'}
              alt= "Artia Audrian Aryatama"
              width={300}
              height={300}
              draggable={false}
              className="grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              />
          </div>
        </div>

      
        <p className="
        text-left

        font-figtree text-sm 
  
        ">@ 2025 Artia Audrian Aryatama</p>
      </div>
    </footer>
  )
}