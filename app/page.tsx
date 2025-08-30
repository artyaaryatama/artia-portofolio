import HomeHero from "@/components/hero/HomeHero";
import MarqueeImg from "@/components/MarqueeImg";

export default function Home() {
  return (
    <div className="
      flex flex-col 
      gap-7
    ">
      <HomeHero />
      <MarqueeImg />
    </div>
  );
}
