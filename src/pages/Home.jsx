import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggles";

/*
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
        <Navbar navItems={navItems}/>

*/
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }
];

export const Home = () => {
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
            <HeroSection/>  
            <AboutSection/>
            <SkillsSection/>
        </main>
        
        {/* Footer */}

    </div>
    );
};