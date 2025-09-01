import Image from "next/image"

export default function Graduate(){

  return (
    // pl-2 for centering manual the title due to graduation cap image div width cannot resizing independently without affecting the size of the Image
   <div className="layout-gap 
    flex flex-col gap-6 items-center
   ">
    
    <div className="flex  gap-2 relative pl-8.5">
      <div className="">
        <h3 className="font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">July <span className="block ">2025</span></h3>  
      </div> 

      <div className=" relative w-16">
        <Image 
          src="/icons/grad-cap.png"
          alt="graduation cap"
          width={100}
          height={100}
          className="w-16 absolute top-0 -left-3 rotate-8"
        
        />
      </div>

    </div>
    <div>
      <p className="font-figtree text-center
         text-sm leading-5 
      ">
        Graduated with a Bachelor&apos;s degree in Informatics Engineering from Hasanuddin University, Makassar, South Sulawesi, Indonesia.
      </p>
    </div>
   </div>
  )
}