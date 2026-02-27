import { motion } from "framer-motion";
import YouTube from 'react-youtube';
import { t } from "i18next"
import Schema from "./Schema";
const MotionDiv = motion.div
const MotionImg = motion.img

export const ProjectScriptAfterEffect = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  const onReady = (event) => {
    // Access player via event.target
    event.target.pauseVideo();
  };
  return (
    <section
      id="ProjectScriptAfterEffect"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/*Name*/}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in font-Juno">
              {t("Cg_Script_Title")}
            </span>
          </h1>

        </div>
      </div>

            <div className="text-center mt-12 px-4 ">        
        {t("Cg_Script_Intro")}
      </div>

                  {/* <MotionImg
            className=" mx-auto"
            src="../../Images/cycleScriptCoach.png"
            alt="application"
          /> */}
      
      {/* <div className="text-center mt-12 max-w-4xl px-4 py-6">
        {t("Cg_Script_Path")}        
      </div> */}

<Schema />

<div className="w-full max-w-4xl mx-auto aspect-video">
  <YouTube
    className="w-full h-full"
    videoId="W3kclJnqkik"
    opts={{
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 0,
      },
    }}
    onReady={onReady}
  />
</div>
      {/* <YouTube className="mx-auto"  videoId="W3kclJnqkik" opts={opts} onReady={onReady} /> */}

      <div className="text-center mt-12 max-w-4xl px-4">        
        {t("Cg_Script_Apres_Video")}        
      </div>


            {/*
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
        </p>
        <div className="grid grid-cols-1 gap-6">

      <YouTube videoId="W3kclJnqkik" opts={opts} onReady={onReady} />
        <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Cette vidéo a 1.4 millions de vue
        </p>
                </div>
      </div>




        <YouTubePlayer videoId="W3kclJnqkik" />
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: "100%",
        maxWidth: "900px",
        aspectRatio: "16 / 9",
        background: "black",
      }}
    >
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=W3kclJnqkik"
        muted
        controls
        width="100%"
        height="100%"
        playsinline
        playing={playing}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0, // IMPORTANT
              mute: 1,
              rel: 0,
            },
          },
        }}
onReady={() => {
  console.log("READY");
  setPlaying(true);
}}
onPlay={() => console.log("PLAY")}      />
    </MotionDiv>



    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/W3kclJnqkik?autoplay=1&mute=1"
      title="YouTube test"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
            */              
            }
    </section>
  )
}
