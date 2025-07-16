import { useEffect, useState } from 'react';
import UofSGamesLogo from "../../Assets/images/UofS_games_logo.svg";
import SUHeroLogo from "../../Assets/images/SU_hero.svg";
import Button from "../hooks/Button.jsx";
import { FaPlay } from "react-icons/fa";
import VideoEmbed from "../hooks/Video_Embed.jsx";

// Dynamically import all images and their paths
const heroImages = import.meta.glob('../../Assets/images/hero/*.{jpg,jpeg,png,webp}', { eager: true });

// Get array of { src, filename } pairs
const backgroundImages = Object.entries(heroImages).map(([path, mod]) => ({
    src: mod.default,
    name: path.split('/').pop()?.split('.')[0] ?? 'unknown',
}));

// Capitalize and format filenames into credits
const imageCredits = backgroundImages.map(({ name }) =>
    name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
);



export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    const [modalOpen, setModalOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);

    const openModal = (src) => {
        setVideoSrc(src);
        setModalOpen(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                let nextImage;
                do {
                    nextImage = Math.floor(Math.random() * backgroundImages.length);
                } while (nextImage === currentImage);

                setCurrentImage(nextImage);
                setFade(true);
            }, 1000);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <section className="relative h-[60vh] sm:h-[80vh] lg:h-[95vh] w-full overflow-hidden text-white">
            {/* Background Images with Fade */}
            {backgroundImages.map(({ src }, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        index === currentImage && fade ? 'opacity-100 z-0' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-0" />

            {/* Top-left content */}
            <div className="relative z-10 flex flex-col items-start px-8 sm:px-14 md:px-18 lg:px-20 pt-16 sm:pt-24 lg:pt-26 max-w-[800px]">
                {/* Logo + Tagline wrapper */}
                <div className="flex flex-col items-start mb-6 sm:mb-8">
                    <img
                        src={UofSGamesLogo}
                        alt="University of Staffordshire Games"
                        className="w-[400px] sm:w-[445px] md:w-[495px] lg:w-[595px]"
                    />
                    <p className="text-UofS-Yellow-100 text-base sm:text-lg md:text-xl lg:text-2xl mt-6 tracking-wide">
                        Learn the Fundamentals. Master <b>Your</b> Specialist Craft
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        id="find-out"
                        title="Find Out More"
                        href="https://www.staffs.ac.uk/go/games"
                        target="_blank"
                        containerClass="bg-UofS-Yellow-100 hover:bg-UofS-Yellow-50 text-black font-semibold text-xs px-5 py-3 sm:px-6 sm:py-3 rounded-full"
                    />
                    <Button
                        id="watch-trailer"
                        title="Watch Student Showreel"
                        leftIcon={<FaPlay className="text-Social-youtube" />}
                        onClick={() => openModal("https://www.youtube.com/embed/M-FwcXNBQio?si=KeJb1IhTwWFvmD_J")}
                        containerClass="bg-UofS-Peach-100 hover:bg-UofS-Peach-50 text-black font-semibold text-xs px-5 py-3 sm:px-6 sm:py-3 rounded-full flex items-center gap-2"
                    />

                </div>
            </div>

            {/* Bottom Left Artwork Credit */}
            <div className="absolute bottom-4 left-4 z-30 text-xs sm:text-sm text-white bg-black/50 px-3 py-1 rounded max-w-[90%]">
                Artwork by: {imageCredits[currentImage]}
            </div>

            {/* Bottom Right Ribbon Logo */}
            <img
                src={SUHeroLogo}
                alt="Staffs Uni Ribbon"
                className="absolute bottom-0 right-0 w-[180px] sm:w-[200px] md:w-[280px] lg:w-[320px] mix-blend-normal opacity-100 pointer-events-none"
            />

            {/* Render Video Embed if modal is open */}
            {modalOpen && (
                <VideoEmbed src={videoSrc} closeModal={() => setModalOpen(false)} />
            )}
        </section>
    );
};
