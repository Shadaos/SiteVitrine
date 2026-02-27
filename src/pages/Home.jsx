import { AboutSection } from "../components/AboutSection";
import { IntroSection } from "../components/IntroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggles";
import { LanguageToggles } from "../components/LanguageToggles";

/*
const navItems = [
    { name: "Home", href: "#intro" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
        <Navbar navItems={navItems}/>

*/
const navItems = [
    { name: "Home", href: "#intro" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }
];

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Theme Toggle */}
        <ThemeToggle />
        <LanguageToggles />
        {/* Background Effects */}
        {/*<StarBackground/> */}  

        {/* Navbar */}
        <Navbar items={navItems} />
        {/* Main Content */}
        <main>
            <IntroSection/>  
            <AboutSection/>
            <SkillsSection/>
        </main>
        
        {/* Footer */}

    </div>
    );
};