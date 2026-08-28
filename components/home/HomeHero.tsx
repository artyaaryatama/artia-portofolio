import Image from "next/image";
import MarqueeImg from "../MarqueeImg";
import TextGenerateEffect from "../ui/typewriter";

interface HomeHeroProps {
  startTypewriter: boolean;
}

export default function HomeHero({ startTypewriter }: HomeHeroProps) {
  return (
    <div>
      <div className="
        lg:mt-22 
      ">
        <div className="hidden lg:flex layout-gap
          flex-row gap-10 items-center 
          xxxxl:gap-20
        ">
          <div className="w-2/5 h-66 xxxl:h-76 relative ">
            <Image 
              src="/person/w-img.jpg"
              alt="Artia Audrian Aryatama"
              width={1000}
              height={1000}
              draggable={false}
              priority
              className="absolute top-0 right-0 object-cover object-[45%_50%] 
                        w-3/4 max-w-175 h-50 xxxl:h-56 z-20
                        "
            />
            <Image 
              src="/person/w-img.jpg"
              alt="Artia Audrian Aryatama"
              width={1000}
              height={1000}
              draggable={false}
              priority
              className="absolute left-0 bottom-0 object-cover object-[45%_95%] 
                        w-2/3 max-w-125 h-30 xxxl:h-46 grayscale z-10"
            />
          </div>

          <div className="w-3/5">
            <h1
              className="
              font-space-grotesk font-bold text-left
              text-[40px] leading-11
              llg:text-5xl llg:leading-13
              xl:text-[3.2rem] xl:leading-14
              xxxl:text-7xl xxxl:leading-17
              "
            >
              Hi, I&apos;m Artia Aryatama Frontend Developer
            </h1>
            {/* <TextGenerateEffect 
              words="Hi, I'm Artia Aryatama Frontend Developer"
              startAnimation={startTypewriter}
              className="
              font-space-grotesk font-bold text-left
              text-[40px] leading-11
              llg:text-5xl llg:leading-13
              xl:text-[3.2rem] xl:leading-14
              xxxl:text-7xl xxxl:leading-17
              "
            /> */}

            <p className="font-figtree 
              text-lg leading-6
              mt-6
              llg:mt-3 mb-3
              ">
              From Gowa, Indonesia, I craft purposeful web products that bring ideas to life. Detail-oriented, I refine the small things that shape a smoother overall experience.
            </p>

            <div className=" flex gap-3 pl-1
              items-start 
            ">
              <span className="relative flex size-2 mt-1.75">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>

              <p className="font-figtree
              text-lg leading-6 text-primary">Open to freelance, contract, or full-time opportunities.</p>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden
          flex-col gap-6 items-center
          mt-24
        ">
          <div className="flex layout-gap w-full">
            <Image 
              src={'/person/w-img.jpg'}
              alt="Artia Audrian Aryatama"
              width={1000}
              height={1000}
              draggable={false}
              priority
              className="object-cover 
              w-full h-60 
              sm:h-70
              md:h-96
              "
            />

          </div>
          <div className="layout-gap ">
            
            <h1
              className="
              font-space-grotesk 
              text-4xl font-bold leading-9.5
              "
            >
              Hi, I&apos;m Artia Aryatama Frontend Developer
            </h1>

            {/* <TextGenerateEffect 
              words="Hi, I'm Artia Audrian Aryatama Frontend Developer"
              startAnimation={startTypewriter}
              className="
              font-space-grotesk 
              text-4xl font-bold leading-9.5
              "
              h1No={false}
            /> */}

            <p className="font-figtree 
              text-sm leading-5 
              mt-5 mb-2">
              From Gowa, Indonesia, I craft purposeful web products that bring ideas to life. Driven by a passion to keep learning and connect design with purpose.  
            </p>

            <div className=" flex gap-3
              items-start
            ">
              <span className="relative flex size-2 mt-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>

              <p className="font-figtree
              text-sm leading-5 text-primary">Open to freelance, contract, or full-time opportunities.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-10 lg:mt-16">
        <MarqueeImg />
      </div>

    </div>

  )
}