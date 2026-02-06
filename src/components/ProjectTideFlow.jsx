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

export const ProjectTideFlow = () => {
  return (
    <section
      id="ProjectTideFlow"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/*Name*/}

          <AppIcon appId={6477821120}/>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, i worked on a project name CoachChords{" "}
            </span>
          </h1>
          <a
            href="https://apps.apple.com/tn/app/guitar-chords-chart-notes-app/id6477821120"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Appstore
          </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              <MotionImg
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/e5/6a/65/e56a65f0-3a36-283e-7035-78b13f409f21/b1d953ef-65a9-42ee-90a3-6526f46df4dd_screen1.jpg/300x650bb.webp"
          alt="application"
                          initial="offscreen" 
                whileInView="onscreen"
                variants={cardVariants} 

        />
        <div className="grid grid-cols-1 gap-6">
          <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            multi paragraphe avec image comme soutiens
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
