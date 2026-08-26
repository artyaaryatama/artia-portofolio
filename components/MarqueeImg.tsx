'use client';
import { useEffect, useState } from 'react';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import Image from 'next/image';

const images = [
  { src: '/marquee/1-min.webp', alt: 'Visiting Leang-leang, Maros.' },
  { src: '/marquee/7-min.webp', alt: 'Two Years in GDG on Campus Hasanuddin University.' },
  { src: '/marquee/3-min.webp', alt: 'Wrapping Up My Internship.' },
  { src: '/marquee/4-min.webp', alt: 'Weekly Internship Standup.' },
  { src: '/marquee/5-min.webp', alt: 'Study Jam with Friends.' },
  { src: '/marquee/2-min.webp', alt: 'Graduation Day.' },
  { src: '/marquee/6-min.webp', alt: 'A Blooming Day on Campus.' },
  { src: '/marquee/8-min.webp', alt: 'Wrapping Up My Internship.' }
]
export default function MarqueeImg () {
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    handleVisibilityChange();
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent play={isPageVisible} style={{ willChange: 'transform' }}>
          {images.map((_, index) => (
            <MarqueeItem className="mx-2 h-46 w-36 lg:w-48 lg:h-58 xxl:w-50 xxl:h-60 xxxl:w-56 xxxl:h-66 lg:mx-4" key={index}>
              <Image 
                src={images[index].src}
                alt={images[index].alt}
                loading='eager'
                decoding='async'
                draggable={false}
                width={300}
                height={300}
                sizes="(min-width: 1536px) 224px, (min-width: 1024px) 192px, 144px"
                className='w-full h-full object-cover grayscale hover:grayscale-0 focus:grayscale-0 transition-[filter] duration-300 transform-gpu will-change-transform'
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  )
}