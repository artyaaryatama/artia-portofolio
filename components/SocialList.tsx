import Link from "next/link"
import Image from "next/image"

export default function SocialList(){
  return (
    <div className="
      flex items-center gap-4
    ">
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
        <Image 
          src={'/icons/gmail.svg'}
          alt="Artia Audrian Aryatama | Gmail"
          width={28} height={28}
        />
      </Link>
    </div>
  )
}