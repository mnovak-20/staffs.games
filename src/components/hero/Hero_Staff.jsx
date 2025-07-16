import React from 'react'
import BgImage from "../../Assets/images/games _staff_group_photo.png";
import SUHeroLogo from "../../Assets/images/SU_hero.svg";


const HeroStaff = () => {
    return (

        <section
            className="relative  w-full bg-cover bg-center overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]"
            style={{ backgroundImage: `url(${BgImage})` }}
            >
            <div className="flex flex-nowrap justify-center py-10 px-[0px] w-full font-bebas tracking-widest font-black text-Game-Dark text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                GAMES STAFF
            </div>

            <img
                src={SUHeroLogo}
                alt="Staffs Uni Ribbon"
                className="absolute bottom-0 right-0 w-[140px] sm:w-[200px] md:w-[280px] lg:w-[320px] mix-blend-normal opacity-100 pointer-events-none invert brightness-0 opacity-50"
            />
        </section>




    )
}
export default HeroStaff
