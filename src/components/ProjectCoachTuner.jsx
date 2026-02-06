import { motion } from "motion/react"
import AppIcon from "./AppIcon"

const cardVariants = {
  onscreen: {
    y: 0,
    rotate: 0,
  },
  offscreen: {
    y: 50,
    rotate: -30,
    transition: {
      type: "spring",
      bounce: 5,
      duration: 3,
    },
  },
}
const MotionImg = motion.img

export const ProjectCoachTuner = () => {
  return (
    <section
      id="ProjectCoachTuner"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto  z-10">
        <div className="space-y-6">
          {/*Name*/}
          <AppIcon appId="838981369" />
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, i worked on a project name CoachTuner it s the main
              application of ManoMaya{" "}
            </span>
          </h1>
                    <h2 className="text-2xl md:text-4xl tracking-tight">
            <ul class="liste">
              
              <li>Optimisation d’un Algorithme de tuner de guitare</li>
              <li>Comprehension du fonctionnement des fréquences </li>
              <li>
                Restructuration graphique
              </li>
            </ul>
          </h2>

          <a
            href="https://apps.apple.com/tn/app/guitar-tuner-easy-tune-chords/id838981369"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Appstore
          </a>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 gap-6">
          <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            multi paragraphe avec image comme soutiens
          </p>
        </div>

        <MotionImg
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3e/d4/15/3ed41513-b928-2e37-af3e-fa2b3660073e/US-Screenshot-2@3x.jpg/300x650bb.webp"
          alt="application"
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
        />
              </div>

      </div>
    </section>
  )
}
