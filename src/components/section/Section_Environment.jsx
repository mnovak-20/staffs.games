import React from "react";

export default function SectionEnvironment() {
    return (
        <section
            id="environment"
            className="bg-Game-Light dark:bg-Game-Dark px-10 py-28 text-gray-800 dark:text-gray-300"
        >
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bebas font-extrabold text-UofS-Red uppercase tracking-widest">
                    Environment Art
                </h2>

                {/* Body Text */}
                <p className="text-2xl tracking-widest">
                    Design immersive worlds with modular assets, advanced materials, and procedural tools.
                    Build game-ready spaces that feel alive
                </p>
            </div>
        </section>
    );
}
