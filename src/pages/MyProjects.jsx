import { IntroProjectSection } from "../components/IntroProjectSection";
import { ProjectCoachChords } from "../components/ProjectCoachChords";
import { ProjectCoachGuitar } from "../components/ProjectCoachGuitar";
import { ProjectCoachTuner } from "../components/ProjectCoachTuner";
import { ProjectScriptAfterEffect } from "../components/ProjectScriptAfterEffect";
import { ProjectTideFlow } from "../components/ProjectTideFlow";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectCoachSite } from "../components/ProjectCoachSite";
import { Navbar2 } from "../components/Navbar2";

const navItems = [
    { name: "Projects", href: "#introProject" },
    { name: "CoachGuitar", href: "#ProjectCoachGuitar" },
    { name: "CoachTuner", href: "#ProjectCoachTuner" },
    { name: "CoachChords", href: "#ProjectCoachChords" },
    { name: "CoachSite", href: "#ProjectCoachSite" },
    { name: "TideFlow", href: "#ProjectTideFlow" },
    { name: "Script", href: "#ProjectScriptAfterEffect" },
    { name: "Skills", href: "#skills" },
];

export const MyProjects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Background Effects */}
        {/*<StarBackground/> */}  

        {/* Navbar */}
        <Navbar2 items={navItems}/>
        {/* Main Content */}
        <main>
            <IntroProjectSection/>
            <ProjectCoachGuitar/>
            <ProjectCoachTuner/>
            <ProjectCoachChords/>
            <ProjectCoachSite/>
            <ProjectTideFlow/>
            <ProjectScriptAfterEffect/>

            <SkillsSection/>
        </main>
        
        {/* Footer */}

    </div>
    );
};