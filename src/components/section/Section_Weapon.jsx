import React from "react";

export default function SectionWeapon() {
    return (
        <section
            id="weapon"
            className="bg-Game-Light dark:bg-Game-Dark px-10 py-28 text-gray-800 dark:text-gray-300"
        >
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bebas font-extrabold text-UofS-Red uppercase tracking-widest">
                    Weapon Art
                </h2>

                {/* Body Text */}
                <p className="text-2xl tracking-widest">
                    Push your hard-surface skills to the limit. From rifles to sci-fi blasters, you’ll model, bake, and texture high-detail weapons built for real-time. Clean topology, crisp detail, game-ready.
                </p>
            </div>
        </section>
    );
}
