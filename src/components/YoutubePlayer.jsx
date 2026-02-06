import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionDiv = motion.div
const MotionButton = motion.button
export default function YouTubePlayer({ videoId = "W3kclJnqkik" }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Lazy load + pause quand hors écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setIsPlaying(false); // pause quand sortie
      },
      { threshold: 0.5 } // 50% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Build iframe src
  const iframeSrc = iframeLoaded
    ? `https://www.youtube.com/embed/${videoId}?autoplay=${
        isPlaying ? 1 : 0
      }&mute=${isMuted ? 1 : 0}&playsinline=1&rel=0&modestbranding=1`
    : undefined;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "900px",
        aspectRatio: "16 / 9",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        background: "black",
        cursor: "pointer",
      }}
      onClick={() => {
        if (!iframeLoaded) setIframeLoaded(true); // lazy load à premier clic
        setIsPlaying((prev) => !prev);
      }}
    >
      {/* Iframe */}
      {iframeLoaded && isVisible && (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="YouTube video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      )}

      {/* Bouton Unmute */}
      {isMuted && iframeLoaded && isVisible && (
        <MotionButton
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(false);
            setIsPlaying(true);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            background: "rgba(255,255,255,0.8)",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          🔊
        </MotionButton>
      )}
    </div>
  );
}
