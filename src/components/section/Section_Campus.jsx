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
                    Step into one of the UK’s most exciting creative spaces for game development.
                    Our campus is more than just a place to study, it’s a fully equipped production hub where artists,
                    designers, programmers, and producers work side by side. From high-spec labs and motion capture studios
                    to VR suites and collaborative breakout spaces, treat the educational space like the studios you’ll one day work in.
                    <br></br><br></br>
                    Whether you're crafting concept art, building playable worlds, or fine-tuning your final build for a live showcase,
                    you'll be surrounded by passionate peers and expert staff who share your drive.
                    This is where ideas come to life, and careers begin.
                </p>

                <p className="text-2xl tracking-widest">
                    Can't join us in person. <br/><span className="font-bold">Explore campus via Staffsverse.</span>
                </p>
            </div>
        </section>
    );
}
