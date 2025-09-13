import ExprHero from "@/components/experience/ExprHero"
import ExprProjects from "@/components/experience/ExprProjects"
import MarqueeText from "@/components/MarqueeText"
import { projectsFreelances } from "@/lib/projectsFreelances"
import { projectsOthers } from "@/lib/projectsOthers"

export default function Page() {
  return (
    <div className="
      flex flex-col 
      gap-12
    ">
      <ExprHero />
      <ExprProjects 
        projectsData={projectsFreelances}
        projectTitle="Freelance Projects"
      />
      <MarqueeText 
        text="Open to new projects! 🌎"
        styleContainer="bg-muted py-2"
        styleText="text-primary text-2xl  font-figtree"
      />
      <ExprProjects 
        projectsData={projectsOthers}
        projectTitle="My other Projects..."
      />
    </div>
  )
}