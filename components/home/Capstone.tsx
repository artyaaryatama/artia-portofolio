import Image from "next/image"
import BtnSourceCode from "../ui/buttonSourceCode"
import BtnSites from "../ui/buttonSites"

export default function Capstone(){
  return(
    <div className="bg-muted py-4">
      <div className="layout-gap text-background">
        <h5 className="
          font-space-grotesk
          text-4xl font-bold leading-[38px]
        ">Capstone Build:</h5>

        <div className="flex flex-col gap-3 mt-3">
          <p className="font-figtree text-left
          text-sm leading-5 ">
            As my Bachelor&apos;s thesis project, I built a decentralized web application (dApp) to track traditional medicine, powered by smart contracts on Ethereum Sepolia. Over 4-5 months, I developed the system from scratch, my first  React.js project alsongside Ethers.js, Hardhat, with Firebase and IPFS as off-chain storage.
          </p>
          <p className="font-figtree text-left
          text-sm leading-5 ">
            This project explored blockchain as a secure yet costly alternative to conventional databases. While the approach proved effective for ensuring transparency and data integrity, it also revealed the practical challenge, real-time blockchain storage demands significant costs, making it more of a fancy alternative than a fully viable solution for production-scale systems.
          </p>
        </div>

        <div className="flex flex-col gap-6
          mt-6
        ">
          <div className="bg-primary w-full flex justify-center items-center h-50 p-4">
            <Image 
              src='/projects/sma-athirah.webp'
              alt=''
              width={200}
              height={200}
              className="w-full h-full object-cover grayscale hover:grayscale-0 rounded-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 items-center">
            <BtnSourceCode
              link="http://localhost:3000/" 
              className="cols-span-1"
            />
            <BtnSites
              link="http://localhost:3000/" 
              className="cols-span-1"
            />

          </div>
        </div>
      
      
      </div>
    </div>
  )
}