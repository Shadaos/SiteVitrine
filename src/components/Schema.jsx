import { useState, useEffect } from "react";
import "../Schema.css";
import { t } from "i18next"

export default function Schema() {
    const [hovered, setHovered] = useState(null);
    const [selected, setSelected] = useState(null);

    const descriptions = {
        partition: t("Cg_Script_Schema_1"),
        xml: t("Cg_Script_Schema_2"),
        json: t("Cg_Script_Schema_3"),
        after: t("Cg_Script_Schema_5"),
        app: t("Cg_Script_Schema_4"),
        videoApp: t("Cg_Script_Schema_6"),
        youtube: t("Cg_Script_Schema_7")
    };

    // Fermeture de la bottom bar au clic en dehors (mobile only)
    useEffect(() => {
        if (!selected) return;

        function handleClickOutside(event) {
            const isClickOnBox = event.target.closest(".box-group");
            const isClickOnBar = event.target.closest(".mobile-bottom-bar");
            if (!isClickOnBox && !isClickOnBar) {
                setSelected(null);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [selected]);

    const Box = ({ id, x, y, width = 170, height = 60, children }) => {
        const isSelected = selected === id;
        return (
            <g
                onMouseEnter={() => window.innerWidth > 768 && setHovered(id)}
                onMouseLeave={() => window.innerWidth > 768 && setHovered(null)}
                onClick={() => window.innerWidth <= 768 && setSelected(id)}
                className={`box-group${isSelected ? " selected" : ""}`}
            >
                <rect
                    x={x}
                    y={y}
                    rx="12"
                    width={width}
                    height={height}
                    className="box-rect"
                />
                <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="box-text"
                >
                    {children}
                </text>
            </g>
        );
    };

    return (
        <div className="schema-wrapper">

            {/* ================= DESKTOP ================= */}
            <svg viewBox="0 0 1600 500" className="schema-svg desktop">
                {/* Lignes principales */}
                <line x1="160" y1="250" x2="380" y2="250" />
                <line x1="530" y1="250" x2="740" y2="250" />
                <line x1="900" y1="250" x2="1100" y2="250" />

                {/* JSON → APP */}
                <line x1="830" y1="220" x2="1008" y2="115" />

                {/* AFTER → VIDEOS */}
                {/* AFTER → VIDEOS */}
                <line x1="1270" y1="250" x2="1350" y2="170" />
                <line x1="1270" y1="250" x2="1350" y2="330" />
                {/* Textes intermédiaires */}
                <text x={290} y={230} fill="var(--text-main)" fontSize="16" fontWeight="bold" textAnchor="middle">
                    Récupère
                </text>
                <text x={650} y={230}  fill="var(--text-main)" fontSize="16" fontWeight="bold" textAnchor="middle">
                    Transforme
                </text>
                <text x={1430} y={255} fill="var(--text-main)" fontSize="16" fontWeight="bold" textAnchor="middle">
                    Génère les vidéos
                </text>

                {/* Boxes */}
                <Box id="partition" x={20} y={220}>Partition</Box>
                <Box id="xml" x={380} y={220}>Fichier XML</Box>
                <Box id="json" x={740} y={220}>Fichier JSON</Box>
                <Box id="after" x={1100} y={220}>Script AE</Box>

                <Box id="app" x={1000} y={60}>Application iOS</Box>
                <Box id="videoApp" x={1350} y={140}>Vidéo App</Box>
                <Box id="youtube" x={1350} y={300}>Vidéo Youtube</Box>
            </svg>

            {/* ================= MOBILE ================= */}
            <p className="mobile-placeholder text-center px-4 py-6 mobile">{t("Cg_Script_Schema_Placeholder_mobile")}</p>
            <svg viewBox="0 0 400 800" className="schema-svg mobile">
                {/* Flux vertical principal */}
                <line x1="205" y1="120" x2="205" y2="200" />
                <line x1="205" y1="260" x2="205" y2="340" />

                {/* JSON split */}
                <line x1="205" y1="400" x2="305" y2="480" />
                <line x1="205" y1="400" x2="85" y2="480" />

                {/* After → Outputs */}
                <line x1="305" y1="540" x2="85" y2="620" />
                <line x1="305" y1="540" x2="305" y2="620" />

                {/* Textes intermédiaires mobile */}
                <text x={155} y={160} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
                    Récupère
                </text>
                <text x={150} y={300} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
                    Transforme
                </text>
                <text x={235} y={605} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
                    Génère les vidéos
                </text>

                {/* Boxes */}
                <Box id="partition" x={120} y={60}>Partition</Box>
                <Box id="xml" x={120} y={200}>Fichier XML</Box>
                <Box id="json" x={120} y={340}>Fichier JSON</Box>
                <Box id="after" x={220} y={480}>Script AE</Box>

                <Box id="app" x={0} y={480}>Application iOS</Box>

                <Box id="videoApp" x={0} y={620}>Vidéo App</Box>
                <Box id="youtube" x={220} y={620}>Youtube</Box>
            </svg>

            {/* Desktop hover */}
            <div className="hover-text desktop-hover">
                {hovered ? descriptions[hovered] : t("Cg_Script_Schema_Placeholder_desktop")}
            </div>

            {/* Mobile bottom bar */}
            <div className={`mobile-bottom-bar ${selected ? "active" : ""}`}>
                <div className="bottom-content mobile">
                    <p>{selected && descriptions[selected]}</p>
                    <button onClick={() => setSelected(null)}>✕</button>
                </div>
            </div>

        </div>
    );
}