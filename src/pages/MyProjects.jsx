import { IntroProjectSection } from "../components/IntroProjectSection";
import { Navbar } from "../components/Navbar";
import { ProjectCoachChords } from "../components/ProjectCoachChords";
import { ProjectCoachGuitar } from "../components/ProjectCoachGuitar";
import { ProjectCoachTuner } from "../components/ProjectCoachTuner";
import { ProjectScriptAfterEffect } from "../components/ProjectScriptAfterEffect";
import { ProjectTideFlow } from "../components/ProjectTideFlow";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggles";


const navItems = [
    { name: "CoachGuitar", href: "#ProjectCoachGuitar" },
    { name: "CoachTuner", href: "#ProjectCoachTuner" },
    { name: "CoachChords", href: "#ProjectCoachChords" },
    { name: "TideFlow", href: "#ProjectTideFlow" },
    { name: "Script", href: "#ProjectScriptAfterEffect" },
    { name: "Skills", href: "#skills" },
];

export const MyProjects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        {/*<StarBackground/> */}  

        {/* Navbar */}
        <Navbar items={navItems} />
        {/* Main Content */}
        <main>
            <IntroProjectSection/>
            <ProjectCoachGuitar/>
            <ProjectCoachTuner/>
            <ProjectCoachChords/>
            <ProjectTideFlow/>
            <ProjectScriptAfterEffect/>

            <SkillsSection/>
        </main>
        
        {/* Footer */}

    </div>
    );
};