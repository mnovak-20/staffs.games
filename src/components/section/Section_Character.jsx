import React from "react";

export default function SectionCharacter() {
    return (
        <section
            id="character"
            className="bg-Game-Light dark:bg-Game-Dark px-10 py-28 text-gray-800 dark:text-gray-300"
        >
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bebas font-extrabold text-UofS-Red uppercase tracking-widest">
                    Character Art
                </h2>

                {/* Body Text */}
                <p className="text-2xl tracking-widest">
                    Master anatomy, stylisation, and real-time workflows. From sculpt to shader, you'll craft game-ready characters with industry experts.
                </p>
            </div>
        </section>
    );
}
