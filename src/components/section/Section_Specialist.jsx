import React from "react";

export default function SpecialistSection() {
    return (
        <section className="bg-Game-Light dark:bg-Game-Dark px-10 py-28 text-gray-800 dark:text-gray-300">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bebas font-extrabold text-UofS-Red uppercase tracking-widest">
                    Specialists not generalists
                </h2>

                {/* Body Text */}
                <p className="text-2xl tracking-widest">
                    Whether you're passionate about stylised creature design, procedural environments, cinematic lighting,
                    or hard surface weapons, or you're drawn to the worlds of level design, game programming,
                    audio engineering, or production management. At Staffordshire University, you'll be taught
                    by someone who lives and breathes that exact discipline.
                    <br></br><br></br>
                    Our teaching staff aren’t just educators, they’re seasoned specialists with real-world experience
                    in every corner of game development. From coding complex AI systems and crafting immersive storylines to building
                    robust infrastructures and designing dynamic soundscapes, we cover the full spectrum of skills
                    the industry demands. Whatever path you choose, you’ll be supported by experts who know the field inside out
    and who are dedicated to helping you master it.
                </p>

                <p className="text-2xl tracking-widest">
                    Most give you a broad overview. <br/><span className="font-bold">We give you a focused pathway.</span>
                </p>
            </div>
        </section>
    );
}
