import React, { useEffect, useState, useRef } from "react";
import Papa from 'papaparse';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineImages = import.meta.glob('../../Assets/images/timeline/*', { eager: true });

const description =
    'Alongside our exceptional in-house teaching, Staffordshire University’s Games courses host a wide range of guest lectures from leading voices across the games industry.\n' +
    '\nThese sessions offer our students unique, real-world insight into how the industry works, where it’s heading, and what it takes to thrive in it.';

const TIMELINE_TOP_OFFSET = 340;
const TIMELINE_BOTTOM_OFFSET = 130;

const getYear = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('/');
    return `20${parts[2]}`;
};

const TimelineItem = ({ item, isRight, previousYear, currentYear, idx }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "start 50%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

    return (
        <React.Fragment>
            {(idx === 0 || currentYear !== previousYear) && (
                <div className="relative flex justify-center items-center">
                    <span className="bg-teal-700 text-white text-lg font-bold px-6 py-2 rounded-full shadow-md">
                        {currentYear}
                    </span>
                </div>
            )}

            <motion.div
                ref={ref}
                style={{ opacity, y: translateY }}
                className="relative min-h-[150px] flex items-center group transition-transform"
            >
                <div
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
                    style={{ top: "40px" }}
                >
                    <div className={`w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-transform group-hover:scale-110 ${isRight ? "bg-white border border-UofS-Teal-100" : "bg-UofS-Peach-50 dark:bg-Game-Dark border border-UofS-Teal-100 dark:border-teal-800"}`} />
                    <span className={`mt-4 px-3 py-2 rounded-full text-teal-700 font-bold text-xs sm:text-[16px] shadow-xl flex items-center justify-center transition-transform group-hover:scale-110 ${isRight ? "bg-white border border-UofS-Teal-100" : "bg-UofS-Peach-50 dark:bg-Game-Dark border border-UofS-Teal-100 dark:border-teal-800"}`}>
                        {item.date}
                    </span>
                </div>

                <div
                    className={`relative sm:w-[400px] w-full px-8 py-8 mt-32 sm:mt-0 rounded-2xl shadow-xl
                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                    ${isRight ? "ml-auto sm:mr-[calc(50%+80px)] mr-2 bg-white border border-UofS-Teal-100 dark:bg-gray-900" : "mr-auto sm:ml-[calc(50%+80px)] ml-2 bg-UofS-Peach-50 dark:bg-Game-Dark border border-UofS-Teal-100 dark:border-teal-800"}`}
                >
                    <h3 className="tracking-tight">
                        <span className="font-extrabold text-xl text-teal-700 dark:text-teal-200">{item.name}</span>
                        <span className="text-lg text-gray-800 dark:text-teal-200"> - {item.studio}</span>
                    </h3>

                    <p className=" text-lg mb-2 text-teal-700 dark:text-teal-200 tracking-tight">
                        {item.role}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 text-[16px] whitespace-pre-line mb-8">
                        {item.description}
                    </p>
                    {item.image && (
                        <div className="mt-4 flex justify-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="rounded-xl shadow max-h-[200px] max-w-full object-contain border border-teal-100 dark:border-teal-900"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </React.Fragment>
    );
};

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
                        studio: row.studio,
                        role: row.role,
                        description: row.description,
                        image,
                        location: row.location,
                        event: row.event,
                    };
                }).filter(item => item.name);

                setTimelineItems(items);
                setLoading(false);
            });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getLineStyle = () => ({
        top: `${TIMELINE_TOP_OFFSET}px`,
        bottom: `${TIMELINE_BOTTOM_OFFSET}px`
    });

    return (
        <div className="w-full min-h-screen py-12 px-20 sm:px-8 bg-Game-Light dark:bg-Game-Dark relative">
            {/* Description */}
            <div className="flex justify-center text-gray-900 dark:text-gray-300 pb-20 px-2 sm:px-20 text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line px-6 py-6">
                    {description}
                </p>
            </div>

            {/* Central dashed line */}
            <div
                className="absolute left-1/2 -translate-x-1/2 border-l-4 border-dashed border-teal-700 dark:border-teal-700 z-0"
                style={getLineStyle()}
            />

            {/* Timeline events */}
            <div className="relative z-10 flex flex-col gap-12">
                {timelineItems.map((item, idx) => {
                    const currentYear = getYear(item.date);
                    const previousYear = idx > 0 ? getYear(timelineItems[idx - 1].date) : null;
                    const isRight = idx % 2 === 0;

                    return (
                        <TimelineItem
                            key={idx}
                            item={item}
                            idx={idx}
                            isRight={isRight}
                            previousYear={previousYear}
                            currentYear={currentYear}
                        />
                    );
                })}
            </div>

            {loading && (
                <div className="w-full flex justify-center items-center">
                    <div className="text-center max-w-xl bg-teal-700 text-white text-lg font-bold px-6 py-2 rounded-full shadow-md">
                        Loading timeline...
                    </div>
                </div>
            )}

            <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-UofS-Red hover:bg-UofS-Yellow-100 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg z-50"
                aria-label="Scroll to top"
            >
                ↑ Top
            </motion.button>
        </div>
    );
};

export default Timeline;
