
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggles";
import { LanguageToggles } from "../components/LanguageToggles";

const MotionA = motion.a
const MotionDiv = motion.div

export const Navbar2 = ({ items = [] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const HomeButtonNotVisible = items.some((item) => item.name === "Home")
  const [selectedTab, setSelectedTab] = useState(items[0])
  const isClickingRef = useRef(false)
  const clickTimeoutRef = useRef(null)
  const language = {
    en: {nativeName : "English"},
    fr: {nativeName : "Français"},
  }
const [isOpen, setIsOpen] = useState(false)

  /* -------------------------------- scroll shadow */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  /* -------------------------------- scroll spy for the dropdown menu*/
 const observerRef = useRef(null)

useEffect(() => {
  if (observerRef.current) {
    observerRef.current.disconnect()
  }

  observerRef.current = new IntersectionObserver(
    (entries) => {
      let bestEntry = null
      let minDistance = Infinity

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const rect = entry.boundingClientRect
        const sectionCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2
        const distance = Math.abs(sectionCenter - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          bestEntry = entry
        }
      })

      if (bestEntry && !isClickingRef.current) {
        const id = `#${bestEntry.target.id}`
        const matchedItem = items.find((item) => item.href === id)

        if (matchedItem) {
          setSelectedTab(matchedItem)
        }
      }
    },
    {
      threshold: 0.1,
    }
  )

  items.forEach((item) => {
    if (!item.href?.startsWith("#")) return
    const section = document.querySelector(item.href)
    if (section) observerRef.current.observe(section)
  })

  return () => observerRef.current?.disconnect()
}, [items])

/* -------------------------------- click scroll */
  const handleNavClick = (item) => {
    isClickingRef.current = true
    setSelectedTab(item)

    clearTimeout(clickTimeoutRef.current)
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false
    }, 1500) // durée du scroll vers l'ancre
  }

  return (
 <nav
      className={cn(
        "fixed w-full h-20 z-40 transition-all duration-300  bg-background/50 backdrop-blur-md ",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <span
          className={cn(
            "relative z-10 text-xl font-bold text-primary flex items-center",
            HomeButtonNotVisible ? "not-visible" : "visible",
          )}
        >
        {/* Logo  Home */}
          <MotionA href="/" className="cosmic-button">
                      <span className="text-glow text-foreground">Home</span>{" "}
          </MotionA>
        </span>

      <div className="px-4 gap-4 flex">
        <ThemeToggle/>
        <LanguageToggles/> 
        <div className="flex flex-row-reverse ">

          {/* Desktop Menu hidden md:*/}

<ul className="flex space-x-8 items-center">
  <li className="relative group">
    <button
      type="button"
      className="flex items-center gap-1 hover:text-gray-300"
    >
      {selectedTab?.name} <ChevronDown size={16} />
    </button>
    <ul
      className="
        absolute left-0 mt-2 w-40 bg-gray-900 rounded-md shadow-lg
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
      "
    >
      {items.map((item, key) => (
        <li
          key={key}
          className="px-4 py-2 hover:bg-gray-800"
        >
          <a
            href={item.href}
            className=" text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={() => handleNavClick(item)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>

  </li>
</ul>



            {/* Dropdown Desktop */}

{/*
          <ul className="hidden md:flex space-x-8 items-center">



            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                Services <ChevronDown size={16} />
              </button>

              <ul className="absolute left-0 mt-2 w-40 bg-gray-900 rounded-md shadow-lg 
                             opacity-0 invisible group-hover:opacity-100 
                             group-hover:visible transition-all duration-200">

                                {items.map((item, key) => (



                                                    <li key={key} className="px-4 py-2 hover:bg-gray-800">

            <MotionA
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 "
              onClick={() => handleNavClick(item)}
            >
              {item.name}
              {item.name === selectedTab?.name && (
                <MotionDiv
                  layoutId="navbar-underline"
                  className=" left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  }}
                />
              )}
            </MotionA>
                </li>
          
          ))}
          
          {/*
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/dev">Développement</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/design">Design</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <a href="/seo">SEO</a>
                </li>
                ////
              </ul>
            </li>
 
          </ul>
          */}

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <Menu size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-4 pb-4 ">
          <a href="/" className="block py-2">Accueil</a>


          <a href="/contact" className="block py-2">Contact</a>
        </div>
      )}

        </div>
    </nav>
  )

}
