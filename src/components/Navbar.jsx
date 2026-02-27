import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

const MotionA = motion.a
const MotionDiv = motion.div

export const Navbar = ({ items = [] }) => {
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

  /* -------------------------------- intersection observer */
  useEffect(() => {
    const observers = []

    items.forEach((item) => {
      if (!item.href?.startsWith("#")) return

      const section = document.querySelector(item.href)
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickingRef.current && entry.intersectionRatio > 0.10) {
            setSelectedTab(item)
          }
        },
        {
//          root: null,
          threshold: 0.10, // % visible pour activer
        },
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [items])

  /* -------------------------------- click handler */
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
        "fixed w-full z-40 transition-all duration-300  bg-background/50 ",
        isScrolled
          ? "py-3 bg-background/80 "
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
        {/* Desktop nav 
        <div className="hidden md:flex space-x-8">
          {items.map((item, key) => (
            <MotionA
              key={key}
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
          ))}
        </div>
        */}
        {/* mobile nav  md:hidden */}
{/*
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:block p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:block",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {items.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                onClick={() => { 
                  handleNavClick(item)
                  setIsMenuOpen(false)}}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

*/}
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="text-foreground hover:text-primary transition">
            Menu
          </button>

          {/* Dropdown */}
          <div
            className={`
              absolute left-0 mt-4 w-[600px]
              bg-background border rounded-xl shadow-lg
              transition-all duration-200
              ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
          >
            <div className="grid grid-cols-3 gap-6 p-6">
              {items.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
              <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
                <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:block",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >

<div className="flex flex-col space-y-8 text-xl">
            {items.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                onClick={() => { 
                  handleNavClick(item)
                  setIsMenuOpen(false)}}
              >
                {item.name}
              </a>
            ))}
          </div>
          </div>

          {/*
      <div className="md:hidden flex flex-col space-y-4 mt-4">
        {items.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
*/
          }


      </div>
    </nav>
  )
}
