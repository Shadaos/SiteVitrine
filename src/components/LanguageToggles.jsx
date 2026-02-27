import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";


export const LanguageToggles = () => {
    const [isEnglishMode, setIsEnglishMode] = useState(false);
    useEffect(() => {
    const storedTheme = localStorage.getItem("language");
    if (storedTheme === "en") {
        setIsEnglishMode(true)
        i18next.changeLanguage("en");   
//        document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem("language", "fr");
        setIsEnglishMode(false)
        i18next.changeLanguage("fr");
//        document.documentElement.classList.remove("dark");
    }
    }, [])


    const toggleTheme = () => {
        if (isEnglishMode) {
//            document.documentElement.classList.remove("dark");
            i18next.changeLanguage("fr");
            localStorage.setItem("language", "fr");
            setIsEnglishMode(false);
        } else {
//            document.documentElement.classList.add("dark");
            i18next.changeLanguage("en");
            localStorage.setItem("language", "en");
            setIsEnglishMode(true);
        }
    };

        {/* fixed  top-5 right-15 */}
    return <button onClick={toggleTheme} className={cn("flex justify-end max-sm:hidden z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}> {" "} {isEnglishMode ? (<div className="h-6 w-6">EN</div>) 
        : (<div className="h-6 w-6">FR</div>)}</button>;
}