import { motion } from "motion/react"
import AppIcon from "./AppIcon"
import { t } from "i18next"
import Carousel from "./Carousel"

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
const slidesTF = [
  "../../Images/tideflow2.png",
  "../../Images/tideflow3.png",
]

const MotionImg = motion.img

export const ProjectTideFlow = () => {
  return (
    <section
      id="ProjectTideFlow"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/*Name*/}

          <div className="relative flex justify-center items-center ">

            <AppIcon className="absolute inset-0 flex justify-center items-center" appId="6477821120" />
            <a
              className="font-Juno text-4xl md:text-5xl p-8 title-tf"
              href="https://apps.apple.com/tn/app/guitar-chords-chart-notes-app/id6477821120"
              target="_blank"
              rel="noopener noreferrer"
            >
              TideFlow
            </a>

          </div>

          {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, i worked on a project name CoachChords{" "}
            </span>
          </h1> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <MotionImg
            src="../../Images/tideflow4.png"
            alt="application"
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}

          />
          <div className="grid grid-cols-1 gap-6">
            {t("Cg_TideFlow_description_1")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6">

          <div className="grid grid-cols-1 gap-6">
            {t("Cg_TideFlow_description_2")}
          </div>

          <Carousel autoSlide={true} >
            {[...slidesTF.map((s) => (
              <img src={s} />
            ))]}
          </Carousel>

        </div>

      </div>
    </section>
  )
}
