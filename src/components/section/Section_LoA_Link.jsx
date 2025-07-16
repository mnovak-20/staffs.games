import React from 'react'
import { Link } from "react-router-dom";

const Section_LoA_Link = () => {
    return (
        <section className="relative h-[400px] py-6 text-center flex flex-col items-center justify-center bg-UofS-Red">
            <h1 className="font-bebas font-bold tracking-widest text-9xl text-[clamp(30pt,10dvw,60pt)] text-Game-Light cursor-pointer hover:animate-glow transition-all duration-500">
                <Link to="/loa" style={{ textDecoration: 'none' }}>
                    LIST OF AWESOME
                </Link>
            </h1>
            <div className="font-bebas font-normal tracking-wide text-xl mt-4 px-4 max-w-3xl text-Game-Light mt-10">
                <p>
                    A showcase of our graduates. Celebrating 23 years of excellence in game education
                </p>
            </div>
        </section>
    )
};

export default Section_LoA_Link;
