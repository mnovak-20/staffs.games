import React, { useState } from "react";
import Button from "../hooks/Button.jsx";
import VideoEmbed from "../hooks/Video_Embed.jsx";
import MockLogo from "../../Assets/images/mock_interviews.svg";
import BgImage from "../../Assets/images/bg_mock_interviews.png";
import { FaPlay } from "react-icons/fa";

export default function MockInterviews() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="relative w-full bg-Game-Light text-black overflow-hidden px-8 py-16">
            {/* Background image (right aligned) */}
            <img
                src={BgImage}
                alt="Mock Interview background"
                className="absolute right-0 top-0 h-full object-cover z-0 max-w-[100%] sm:block"
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
                {/* Left content */}
                <div className="max-w-2xl space-y-6">
                    <div>
                        <h2 className="text-UofS-Red font-bold text-lg sm:text-2xl mb-6">
                            Jumpstart Your Games Career at Staffordshire
                        </h2>
                        <p>
                            Join Staffordshire University’s Games Institute and gain real-world confidence with our
                            award-winning industry-led mock interview scheme. Final-year students take part in
                            one-to-one interviews with developers from top studios like Sumo Digital,
                            Codemasters, Rebellion, Kwalee and more...
                        </p><br/>
                        <p>
                            You’ll get expert feedback on your CV, portfolio, and interview technique plus a
                            direct connection to key studios scouting new talent. This unique opportunity
                            helped us win TIGA’s Excellence in Industry Collaboration award in 2024.
                        </p><br/>
                        <p className="font-semibold mb-14">
                            Get ready to impress. Make industry contacts. Graduate confidently.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Button
                            id="find-out-more"
                            title="Find Out More"
                            href="https://www.staffs.ac.uk/features/industry-led-mock-interviews-for-game-students"
                            target="_blank"
                            containerClass="bg-UofS-Yellow-100 hover:bg-UofS-Yellow-50 text-black font-semibold text-xs px-5 py-3 sm:px-6 sm:py-3 rounded-full"
                        />
                        <Button
                            id="award-winning"
                            title="Award Winning"
                            href="https://www.staffs.ac.uk/news/2024/10/award-success-for-universitys-games-employability-scheme"
                            target="_blank"
                            containerClass="bg-UofS-Peach-100 hover:bg-UofS-Peach-50 text-black font-semibold text-xs px-5 py-3 sm:px-6 sm:py-3 rounded-full"
                        />
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<FaPlay className="text-Social-youtube" />}
                            onClick={() => setShowModal(true)}
                            containerClass="bg-white hover:bg-gray-100 text-black font-semibold text-xs px-5 py-3 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 shadow"
                        />
                    </div>

                    {/* Bottom-left logo */}
                    <div className="pt-10">
                        <img
                            src={MockLogo}
                            alt="Mock Interviews"
                            className="w-full max-w-sm xl:max-w-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Modal Video */}
            {showModal && (
                <VideoEmbed
                    src="https://www.youtube.com/embed/LHD9aKKiHWA?si=c8BYz3Ek_bnANmly"
                    closeModal={() => setShowModal(false)}
                />
            )}
        </section>
    );
}
