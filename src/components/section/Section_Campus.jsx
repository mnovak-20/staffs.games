import React from "react";

export default function CampusSection() {
    return (
        <section className="bg-Game-Light dark:bg-Game-Dark px-10 py-28 text-gray-800 dark:text-gray-300">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bebas font-extrabold text-UofS-Red uppercase tracking-widest">
                    Join us on Our Campus
                </h2>

                {/* Body Text */}
                <p className="text-2xl tracking-widest">
                    Whether you want to master stylised creature design, procedural environments, cinematic lighting, or hard surface weapons,
                    you’ll be taught by someone who specialises in that exact thing.
                </p>

                <p className="text-2xl tracking-widest">
                    Can't join us in person. <br/><span className="font-bold">Explore campus via Staffsverse.</span>
                </p>
            </div>
        </section>
    );
}
