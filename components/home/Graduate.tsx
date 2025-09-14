export default function Graduate(){

  return (
    // pl-2 for centering manual the title due to graduation cap image div width cannot resizing independently without affecting the size of the Image
   <div className="
    flex flex-col gap-6 items-left 
   ">
    
    <div className="flex  gap-2 relative h-20">
      <div className="">
        <h3 className="font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">July <span className="block ">2025</span></h3>  
      </div> 

      <div className=" relative w-16">
        <span className="absolute -top-1 -left-4 rotate-8 text-6xl ">
          🎓
        </span>
      </div>

    </div>
    <div>
      <p className="font-figtree text-left
        text-sm leading-5 
        lg:text-base lg:leading-6
      ">
        Graduated with a Bachelor&apos;s degree in Informatics Engineering from Hasanuddin University, Makassar, South Sulawesi, Indonesia.
      </p>
    </div>
   </div>
  )
}