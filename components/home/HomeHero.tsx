import Image from "next/image";
import SocialList from "../SocialList";
import MarqueeImg from "../MarqueeImg";

export default function HomeHero() {
  return (
    <div>
      <div className="
        flex flex-col gap-6
      ">
        <Image 
          src={'/person/w-img.jpg'}
          alt="Artia Audrian Aryatama"
          width={600}
          height={600}
          draggable={false}
          loading='lazy'
          className="object-cover 
          w-full 
          
          h-[192px]"
        />

        <div className="layout-gap">
          <h1 className="font-space-grotesk 
            text-4xl font-bold leading-[38px]
          ">
            Hi, I&apos;m Artia Audrian Aryatama Frontend Web Developer
          </h1>

          <p className="font-figtree 
            text-sm leading-5 
            mt-3">
            From Makassar, Indonesia, I craft purposeful web products that bring ideas to life. Driven by a passion to keep learning and connect design with purpose.  
          </p>
        </div>

        <div className="layout-gap
        ">
          <div className=" flex gap-3
            items-start
          ">
            <span className="relative flex size-2 ml-2 mt-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>

            <p className="font-figtree
            text-sm leading-4 text-primary">Open to freelance, contract, or full-time opportunities.</p>
          </div>

        </div>

      </div>

      <div className="mt-6">
        <MarqueeImg />
      </div>

    </div>

  )
}