import HomeHero from "@/components/home/HomeHero";
import MarqueeImg from "@/components/MarqueeImg";
import About from "@/components/home/About";
import Graduate from "@/components/home/Graduate";

export default function Home() {
  return (
    <div className="
      flex flex-col 
      gap-7
    ">
      <HomeHero />
      <MarqueeImg />
      <div className="
        mt-4
        flex flex-col 
        gap-7
      ">
        <About />
        <Graduate />
      </div>
    </div>
  );
}
