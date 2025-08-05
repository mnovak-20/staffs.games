import React from 'react'
import { Link } from "react-router-dom"
import SULogo from "../../Assets/images/SU.svg"
import AwardWin from "../../Assets/images/award_winning.svg"
import Button from "../hooks/Button.jsx"

const Section_Award_Winner = () => {
    return (
        <section className="relative bg-UofS-Red w-full h-[600px] md:h-[800px] overflow-hidden text-white flex items-center justify-center">
            {/* Top Left Logo */}
            <img
                src={SULogo}
                alt="SU Logo"
                className="absolute -top-[160px] -left-[160px] w-[600px] md:top-20 md:left-20 md:w-[240px] filter invert brightness-0 opacity-20 md:opacity-100"
            />

            {/* Bottom Left Awarding Image */}
            <img
                src={AwardWin}
                alt="Award Winner"
                className="absolute bottom-[1px] left-0 w-[90%] md:w-[80%]"
            />

            {/* Top Right Text Links */}
            <div className="absolute top-10 right-10 md:top-20 md:right-24 text-right space-y-3">
                <Link to="/staff" className="block text-5xl md:text-7xl font-bold text-white hover:underline">
                    Lecturers
                </Link>
                <Link to="/courses" className="block text-5xl md:text-7xl font-bold text-[#5D1C16] hover:underline">
                    Courses
                </Link>
                <Link to="/loa" className="block text-5xl md:text-7xl font-bold text-white hover:underline">
                    Students
                </Link>
                <Link to="/games" className="block text-5xl md:text-7xl font-bold text-[#5D1C16] hover:underline">
                    Games
                </Link>

                {/* Yellow Button */}
                <div className="py-8">
                    <Link to="/awards"><Button
                        id="awards"
                        title="See Awards"

                        containerClass="bg-UofS-Yellow-100 hover:bg-UofS-Yellow-50 text-black font-semibold text-sm px-5 py-3 sm:px-8 sm:py-4 rounded-full"
                    /></Link>
                </div>
            </div>
        </section>
    );
}



export default Section_Award_Winner
