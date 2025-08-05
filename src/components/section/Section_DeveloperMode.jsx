import React from "react";
import Button from "../hooks/Button.jsx";
import DeveloperLogo from "../../Assets/images/developer_mode.svg";
import BgImage from "../../Assets/images/dm_bg.png";
import { FaPlay } from "react-icons/fa";

export default function DeveloperMode() {
    const openPlaylist = () => {
        window.open("https://www.youtube.com/playlist?list=PLu27eII51vjJskvco7qGmghRzPzCYNxp3", "_blank");
    };

    return (
        <section className="relative w-full h-[80vh] bg-[#0d0c0b] text-white overflow-hidden py-16 px-6 ">

            <img
                src={BgImage}
                alt="Developer Mode background"
                className="absolute bottom-0 right-0 w-[50%] max-w-[360px] pointer-events-none select-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start gap-12">
                {/* Logo */}
                <img
                    src={DeveloperLogo}
                    alt="Developer Mode"
                    className="w-[340px] sm:w-[520px] md:w-[680px]"
                />

                {/* Button */}
                <Button
                    id="watch-devmode"
                    title="Watch Dev Mode on Youtube"
                    leftIcon={<FaPlay className="text-Social-youtube" />}
                    onClick={openPlaylist}
                    containerClass="bg-white hover:bg-gray-200 text-black font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2"
                />

                {/* Description */}
                <p className="text-sm sm:text-base font-medium max-w-xl pt-2">
                    Join us as our expert staff discuss a wide range of interesting topics
                    of game development. From art to design to code. Explore the depth of
                    subject areas within games.
                </p>
            </div>
        </section>
    );
}
