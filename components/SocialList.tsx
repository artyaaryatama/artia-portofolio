import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function SocialList(){
  return (
    <div className="flex gap-6 items-end justify-start">
      <Link href='/' >
        <Image 
          src={'/icons/github.svg'}
          alt="Artia Audrian Aryatama | Github"
          width={28} height={28}
        />
      </Link>
      <Link href='/' >
        <Image 
          src={'/icons/linkedln.png'}
          alt="Artia Audrian Aryatama | Linkedln"
          width={28} height={28}
        />
      </Link>
      <Link href='/' >
        <Image 
          src={'/icons/insta.svg'}
          alt="Artia Audrian Aryatama | Instagram"
          width={28} height={28}
        />
      </Link>
      <Link href="mailto:artyaaryatama@gmail.com" >
        <Mail  className="w-[30px] h-[30px] text-black"/>
      </Link>
    </div>
  )
}