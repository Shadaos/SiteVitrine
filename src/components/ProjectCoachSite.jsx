import { motion } from "motion/react"
import AppIcon from "./AppIcon"
import { t } from "i18next"
import Carousel from "./Carousel"

const MotionImg = motion.img

fetch("https://apps.apple.com/tn/app/guitar-tuner-easy-tune-chords/id838981369")
  .then((res) => res.json())
  .then((data) => {
    const iconUrl = data.results[0].artworkUrl512
    console.log(iconUrl)
  })

const slides = [
  "../../Images/coachgsite1.png",
  "../../Images/coachgsite2.png",
  "../../Images/coachgsite3.png",
  "../../Images/coachgsite4.png",
]

export const ProjectCoachSite = () => {
  return (
    <section
      id="ProjectCoachSite"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6">
          {/*Name*/}

          <div className="relative flex justify-center items-center ">

            <MotionImg
              className="p-8 size-64 "
              src="../../Images/cg-logo-nav.svg"
              alt="application"
            />
            <div className="flex flex-col">
              <a
                className="font-Juno text-4xl md:text-5xl title-csite"
                href="https://coachguitar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoachGuitar
              </a>

              <a
                className="font-Juno text-4xl md:text-5xl title-csite"
                href="https://coachguitar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            <a className="title-cg"
              href="https://apps.apple.com/tn/app/guitar-play-learn-chords/id405338085"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Cg_Title")}
            </a>
            <span className="opacity-0 animate-fade-in">
              {t("Cg_Description")}
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl tracking-tight">
            <ul class="liste">
              <li>Optimisation de la base de données avec PostgreSQL</li>
              <li>
                Optimisations de code et utilisation efficace de la mise en
                cache
              </li>
              <li>Gestion d’une équipe de 3 développeurs et 1 designer</li>
            </ul>
          </h2>

          <h2>
            <span className="opacity-0 animate-fade-in">
              The creation of the module cursus was a true challenge, nous avions besoin de deux manche de guitar animé en fonction des exercices demander l'un static et l autre dynamique, des datas pour le suivis de l utilisateurs afin de pouvoir modifier le cursus et repondre au attente
              de plus il a fallut penser a la gamification du cursus afin d avoir une meilleur retention cela c est traduit par un ajout d un arbre de skills et récompense a travers des badges et des chanson débloquer par rapport au niveau de l utilisateur ainsi que des exercices quotident lié a un systeme de streak
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <Carousel autoSlide={false} >
              {[...slides.map((s) => (
                <img src={s} />
              ))]}
            </Carousel>
            <span className="opacity-0 animate-fade-in grid grid-cols-1 gap-6">
              The creation of the module cursus was a true challenge, nous avions besoin de deux manche de guitar animé en fonction des exercices demander l'un static et l autre dynamique, des datas pour le suivis de l utilisateurs afin de pouvoir modifier le cursus et repondre au attente
              de plus il a fallut penser a la gamification du cursus afin d avoir une meilleur retention cela c est traduit par un ajout d un arbre de skills et récompense a travers des badges et des chanson débloquer par rapport au niveau de l utilisateur ainsi que des exercices quotident lié a un systeme de streak
            </span>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <span className="opacity-0 animate-fade-in grid grid-cols-1 gap-6">
              The creation of the module cursus was a true challenge, nous avions besoin de deux manche de guitar animé en fonction des exercices demander l'un static et l autre dynamique, des datas pour le suivis de l utilisateurs afin de pouvoir modifier le cursus et repondre au attente
              de plus il a fallut penser a la gamification du cursus afin d avoir une meilleur retention cela c est traduit par un ajout d un arbre de skills et récompense a travers des badges et des chanson débloquer par rapport au niveau de l utilisateur ainsi que des exercices quotident lié a un systeme de streak
            </span>

            <MotionImg
              className="flex-initial rounded-lg shadow-lg"
              src="../../Images/coachg5.png"
              alt="application"
            />
          </div>
          <MotionImg
            className="flex-initial rounded-lg shadow-lg"
            src="../../Images/coachg6.png"
            alt="application"
          />
          <MotionImg
            className="flex-initial rounded-lg shadow-lg"
            src="../../Images/coachg7.png"
            alt="application"
          />


          <AppIcon appId="405338085" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <MotionImg
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/e4/85/9be48555-7c39-da1f-ff58-a4e48cc1ec4c/395668f5-537c-4395-b310-00d9cdb799a4_EN-Screenshot-2@3x.jpg/300x650bb.webp"
              alt="application"
            />
            <div className="grid grid-cols-1 gap-6">
              <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                multi paragraphe avec image comme soutiens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
