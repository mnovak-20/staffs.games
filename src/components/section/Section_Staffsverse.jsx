import React, {useState} from "react";
import Button from "../hooks/Button.jsx";
import StaffsverseLogo from "../../Assets/images/staffsverse_logo.png";
import FortniteLogo from "../../Assets/images/fortnite_logo.svg";
import BgImage from "../../Assets/images/staffsverse_bg.png";
import { FaPlay } from "react-icons/fa";
import { TbBrandFortnite } from "react-icons/tb";
import VideoEmbed from "../hooks/Video_Embed.jsx";

export default function Staffsverse() {


    const [modalOpen, setModalOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);
    const openModal = (src) => {
        setVideoSrc(src);
        setModalOpen(true);
    };

    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="text-center px-4 max-w-3xl">
                <img
                    src={StaffsverseLogo}
                    alt="Staffsverse"
                    className="mx-auto max-w-[70%] sm:max-w-[80%] md:max-w-[90%] mb-2"
                />
                <img
                    src={FortniteLogo}
                    alt="Fortnite"
                    className="mx-auto max-w-[40%] sm:max-w-[30%] md:max-w-[20%] mb-6 invert"
                />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button
                        id="find-out-staffverse"
                        title="Find Out More"
                        href="https://www.staffs.ac.uk/visit/staffsverse"
                        target="_blank"
                        containerClass="bg-UofS-Yellow-100 hover:bg-UofS-Yellow-50 text-black font-semibold text-xs px-6 py-3 rounded-full flex items-center w-[200px]"
                    />
                    <Button
                        id="staffverse-trailer"
                        title="Staffsverse Trailer"
                        leftIcon={<FaPlay className="text-Social-youtube" />}
                        onClick={() =>
                            openModal("https://www.youtube.com/embed/IyVKI9aij28?si=chp4PJpTL0pU2VZu")
                        }
                        containerClass="bg-UofS-Peach-100 hover:bg-UofS-Peach-50 text-black font-semibold text-xs px-6 py-3 rounded-full flex items-center w-[250px]"
                    />
                    <Button
                        id="staffverse-podcast"
                        title="LoD Podcast"
                        leftIcon={<FaPlay className="text-white" />}
                        onClick={() =>
                            openModal("https://www.youtube.com/embed/tWkRVRj4y3Y?si=PMprum95mFeCj3Mz")
                        }
                        containerClass="bg-UofS-Lavender-100 hover:bg-UofS-Lavender-50 text-black font-semibold text-xs px-6 py-3 rounded-full flex items-center w-[200px]"
                    />
                    <Button
                        id="staffverse-Play"
                        title="Play Staffsverse on Fortnite"
                        leftIcon={<TbBrandFortnite className="text-black scale-[200%]" />}
                        href="https://www.fortnite.com/@uniofstaffs/7421-1052-8692"
                        target="_blank"
                        containerClass="bg-UofS-Neon-100 hover:bg-UofS-Neon-50 text-black font-semibold text-xs px-6 py-3 rounded-full flex items-center w-[300px]"
                    />
                </div>

                <p className="font-bold text-lg sm:text-xl pt-10 pb-4">
                    Built by our talented games students, StaffsVerse is the UK’s first university campus to be recreated as a Fortnite island
                </p>
                <p className="mt-3 text-base sm:text-lg opacity-90">
                    Play mini-games <br />
                    Explore campus landmarks <br />
                    Connect with our vibrant community
                </p>
            </div>

            {/* Render Video Embed if modal is open */}
            {modalOpen && (
                <VideoEmbed src={videoSrc} closeModal={() => setModalOpen(false)} />
            )}

        </section>
    );
}
