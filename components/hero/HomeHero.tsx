import Image from "next/image";
import SocialList from "../SocialList";

export default function HomeHero() {
  return (
    <div className="
      flex flex-col gap-6

    ">
      <div className="">
        <Image 
          src={'/person/w-img.jpg'}
          alt="Artia Audrian Aryatama"
          width={600}
          height={600}
          draggable={false}
          className="object-cover h-[252px]"
        />
      </div>

      <div className="layout-gap">
        <h1 className="font-space-grotesk 
          text-4xl font-bold leading-[38px]
        ">
          Hi, I&apos;m Artia Audrian Aryatama Frontent Web Developer
        </h1>

        <p className="font-figtree 
          text-sm leading-5 
          mt-3">
          From Makassar, Indonesia, I craft purposeful web products that bring ideas to life. Driven by a passion to keep learning and connect design with purpose.  
        </p>
      </div>

      <div className="layout-gap flex items-center justify-between">
        <SocialList />

        <div className="flex items-end gap-3">
          <span className="relative flex size-2 ml-2 mb-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
          </span>

          <p>Available for new projects.</p>
        </div>

      </div>

    </div>

  )
}