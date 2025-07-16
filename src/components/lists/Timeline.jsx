import React, { useEffect, useState } from "react";
import Papa from 'papaparse';

// Preload timeline images
const timelineImages = import.meta.glob('../../Assets/images/timeline/*', { eager: true });

const description =
    'Alongside our exceptional in-house teaching, Staffordshire University’s Games courses host a wide range of guest lectures from leading voices across the games industry. This timeline showcases just some of the incredible professionals who’ve joined us over the years from artists, designers, and programmers to producers and studio founders.\n' +
    '\n' +
    'These sessions offer our students unique, real-world insight into how the industry works, where it’s heading, and what it takes to thrive in it. They’re not just talks, they’re windows into careers, studios, and creative journeys that inspire and inform the next generation of developers.';

const Timeline = () => {
    const [timelineItems, setTimelineItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const csvUrl =
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5lY4waSA6tj1LQvQLoBCYYs3QBPA4lD4NHcUJs1lsimNG9_9ok6a-ME4vZHZs7L9TVR7STmcScSlZ/pub?output=csv';

        setLoading(true);

        fetch(csvUrl)
            .then(res => res.text())
            .then(csvText => {
                const parsed = Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                });

                const items = parsed.data.map(row => {
                    const imagePath = `../../Assets/images/timeline/${row.imageName?.trim()}`;
                    const image = timelineImages[imagePath]?.default || null;

                    return {
                        date: row.date,
                        name: row.name,
                        description: row.description,
                        image,
                    };
                });

                setTimelineItems(items.filter(item => item.name));
                setLoading(false);
            });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 720, behavior: 'smooth' });
    };


    return (
        <div className="container mx-auto w-full h-full bg-Game-Light dark:bg-Game-Dark relative">
            {/* Description */}
            <div className="flex justify-center text-gray-800 dark:text-gray-300 py-12 px-20 text-center max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed">{description}</p>
            </div>

            <div className="relative wrap p-20">
                {/* Dotted vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 z-0"></div>

                {timelineItems.map((item, index) => {
                    const isRight = index % 2 === 0;
                    const bgColor = isRight ? "bg-UofS-Grey" : "bg-UofS-Teal-100";
                    const textColor = isRight ? "text-gray-800" : "text-gray-300";

                    return (
                        <div
                            key={index}
                            className={`mb-12 flex flex-col sm:items-center sm:justify-between w-full relative ${
                                isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                            }`}
                        >
                            {/* Horizontal connector (desktop only) */}
                            <div
                                className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-500 z-0 ${
                                    isRight
                                        ? "left-[calc(50%+2rem)] right-[5%]"
                                        : "right-[calc(50%+2rem)] left-[5%]"
                                }`}
                            />

                            {/* Spacer */}
                            <div className="order-1 sm:w-5/12" />

                            {/* Date Marker */}
                            <div className="z-10 flex items-center justify-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full mx-auto sm:mx-0">
                                <p className="font-semibold text-sm text-white">{item.date}</p>
                            </div>

                            {/* Content Card */}
                            <div className={`order-1 ${bgColor} rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 z-10 mt-6 sm:mt-0`}>
                                <h3 className={`mb-3 font-bold text-xl ${textColor}`}>
                                    {item.name}
                                </h3>
                                <p className={`text-sm leading-snug tracking-wide whitespace-pre-line ${textColor}`}>
                                    {item.description}
                                </p>
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="mt-4 rounded-xl object-cover w-auto max-h-[200px]"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}

                {loading && (
                    <div className="text-center text-gray-800 font-bold text-2xl py-10">
                        Loading timeline...
                    </div>
                )}
                {/* Back to top button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-UofS-Red hover:bg-UofS-Yellow-100 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg z-50"
                    aria-label="Scroll to top"
                >
                    ↑ Top
                </button>
            </div>
        </div>
    );
};

export default Timeline;
