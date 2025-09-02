import HomeHero from "@/components/home/HomeHero";
import About from "@/components/home/About";
import Graduate from "@/components/home/Graduate";
import Experience from "@/components/home/Experience";
import Capstone from "@/components/home/Capstone";

export default function Home() {
  return (
    <div className="
      flex flex-col 
      gap-18
    ">
      <HomeHero />
      <div className="
        mt-4
        flex flex-col 
        gap-8
      ">
        <About />
        <Graduate />
      </div>
      <Experience />
      <Capstone/>
    </div>
  );
}
