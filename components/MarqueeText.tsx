'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';

interface textContent {
  text: string,
  styleText: string,
  styleContainer: string
}

export default function MarqueeText({text, styleText, styleContainer}: textContent) {
  return (
    <div>
      <Marquee>
        <MarqueeContent className={styleContainer}>
          <MarqueeItem>
            <p className={styleText}>
              {text}
            </p>
            
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  )
}