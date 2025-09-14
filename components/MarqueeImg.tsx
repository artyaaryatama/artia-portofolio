'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import Image from 'next/image';

const images = [
  { src: '/marquee/1-min.webp', alt: 'Visiting Leang-leang, Maros 📍' },
  { src: '/marquee/7-min.webp', alt: 'Two Years in GDSC 🎯' },
  { src: '/marquee/3-min.webp', alt: 'Wrapping Up My Internship 🧐 - 1' },
  { src: '/marquee/4-min.webp', alt: 'Weekly Internship Standup 👩‍💻' },
  { src: '/marquee/5-min.webp', alt: 'Study Jam with Friends 🍞' },
  { src: '/marquee/2-min.webp', alt: 'Graduation Day 🎓' },
  { src: '/marquee/6-min.webp', alt: 'A Blooming Day on Campus 🌺' },
  { src: '/marquee/8-min.webp', alt: 'Wrapping Up My Internship 🧐 - 2' }
]
export default function MarqueeImg () {

  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {images.map((_, index) => (
            <MarqueeItem className="mx-2 h-46 w-36 lg:w-56 lg:h-66" key={index}>
              <Image 
                src={images[index].src}
                alt={images[index].alt}
                loading='lazy'
                draggable={false}
                width={700}
                height={700}
                className='w-full h-full object-cover grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300'
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  )
}