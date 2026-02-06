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
          if (entry.isIntersecting && !isClickingRef.current) {
            setSelectedTab(item)
          }
        },
        {
//          root: null,
          threshold: 0.55, // % visible pour activer
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
    }, 700) // durée du scroll vers l'ancre
  }
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300  bg-background/50 backdrop-blur-md shadow-xs",
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
        {/* Desktop nav */}
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
        {/* mobile nav */}

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
            "transition-all duration-300 md:hidden",
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
      </div>
    </nav>
  )
}
