import React from "react"
import Button from "../hooks/Button.jsx"
import LodLogo from "../../Assets/images/LoD_logo.svg"
import BgImage from "../../Assets/images/LoD_bg.jpg"
import { FaPlay } from "react-icons/fa"

export default function Section_LOD() {
    const openPodcast = () => {
        window.open("https://www.youtube.com/watch?v=KykaizRaEwI&list=PLkHj6Jg646IUKQpR3wHxNUfmVN_KBl4q4", "_blank");
    };

    return (
        <section
            className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="max-w-3xl flex flex-col items-center justify-center">
                {/* Logo */}
                <img
                    src={LodLogo}
                    alt="Level of Detail"
                    className="w-[70%] max-w-[400px] mb-12"
                />

                {/* Button */}
                <Button
                    id="watch-lod"
                    title="Watch LoD on Youtube"
                    leftIcon={<FaPlay className="text-Social-youtube" />}
                    onClick={openPodcast}
                    containerClass="bg-white hover:bg-gray-200 text-black font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2 mb-6"
                />

                {/* Description */}
                <p className="text-sm sm:text-base font-medium max-w-xl">
                    Join us on our award-winning podcast.<br />
                    Exploring the latest games and inviting a<br className="hidden sm:block" />
                    range of guests to give their insights into one of<br />
                    the fastest-growing and most exciting industries in the world.
                </p>
            </div>
        </section>
    );
}
