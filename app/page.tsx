import HomeHero from "@/components/home/HomeHero";
import About from "@/components/home/About";
import Graduate from "@/components/home/Graduate";
import Experience from "@/components/home/Experience";
import ProjectVault from "@/components/home/ProjectVault";

export default function Home() {
  return (
    <div className="
      flex flex-col 
      gap-12 min-xxxl:w-[70vw] min-lg:w-[74vw] w-full 
    ">
      <HomeHero />
      <div className="
        flex flex-col 
        gap-12 
        lg:flex-row
        layout-gap
      ">
        <About />
        <Graduate />
      </div>
      <Experience />
      <ProjectVault/>
    </div>
  );
}
