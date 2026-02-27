import { motion } from "motion/react"
import AppIcon from "./AppIcon"
import { t } from "i18next"
import Carousel from "./Carousel"

const slidesCC = [
  "../../Images/coachChord1.png",
  "../../Images/coachChord2.png",
  "../../Images/coachChord3.png",
  "../../Images/coachChord4.png",
]

export const ProjectCoachChords = () => {
  return (
    <section
      id="ProjectCoachChords"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/*Name*/}

                    <div className="relative flex justify-center items-center ">
          
                      <AppIcon className="absolute inset-0 flex justify-center items-center" appId="999356670" />
                      <a
                        className="font-Juno text-4xl md:text-5xl p-8 title-cc"
                        href="https://apps.apple.com/tn/app/guitar-chords-chart-notes-app/id999356670"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CoachChords
                      </a>
          
                    </div>
          

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <Carousel autoSlide={true} >
              {[...slidesCC.map((s) => (
                <img src={s} />
              ))]}
            </Carousel>

        <div className="grid grid-cols-1 gap-6">
            {t("Cg_Chords_description")}
          <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
