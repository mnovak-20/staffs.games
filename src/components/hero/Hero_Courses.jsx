import React, { useEffect, useState } from "react";
import Button from "../hooks/Button";
import { motion, AnimatePresence } from "framer-motion";

// Course data
const courses = [
    {
        id: "game-art",
        title: "Game Art",
        text: "Visual storytelling, character ideation, and expressive environments.",
        subjectLinks: ["Environment", "Character", "Weapon", "Vehicle", "Prop"],
        undergradUrl: "https://www.staffs.ac.uk/courses/search?searchstax[query]=game%20art&searchstax[page]=1",
        postgradUrl:
            "https://www.staffs.ac.uk/courses/search?searchstax[query]=game%20art&searchstax[page]=1&searchstax[facets][0]=or:study_level_ss:Postgraduate%20(Taught)&searchstax[facets][1]=or:study_level_ss:Postgraduate%20(Research)",
        images: import.meta.glob("../../Assets/images/hero/*.{jpg,jpeg,png,webp}", { eager: true }),
    },
    {
        id: "game-concept",
        title: "Game Concept_Art",
        text: "Visual storytelling, character ideation, and expressive environments.",
        subjectLinks: ["World", "Creature", "Storyboarding", "Mood", "Perspective"],
        undergradUrl: "https://www.staffs.ac.uk/courses/search?searchstax[query]=concept%20art&searchstax[page]=1",
        postgradUrl:
            "https://www.staffs.ac.uk/courses/search?searchstax[query]=concept%20art&searchstax[page]=1&searchstax[facets][0]=or:study_level_ss:Postgraduate%20(Taught)&searchstax[facets][1]=or:study_level_ss:Postgraduate%20(Research)",
        images: import.meta.glob("../../Assets/images/loa/*.{jpg,jpeg,png,webp}", { eager: true }),
    },
    {
        id: "game-design",
        title: "Game Design",
        text: "Craft mechanics, systems, and gameplay experiences that engage players.",
        subjectLinks: ["Systems", "Narrative", "Mechanics", "UI/UX", "Level Design"],
        undergradUrl: "https://www.staffs.ac.uk/courses/search?searchstax[query]=game%20design&searchstax[page]=1",
        postgradUrl:
            "https://www.staffs.ac.uk/courses/search?searchstax[query]=game%20design&searchstax[page]=1&searchstax[facets][0]=or:study_level_ss:Postgraduate%20(Taught)&searchstax[facets][1]=or:study_level_ss:Postgraduate%20(Research)",
        images: import.meta.glob("../../Assets/images/courses/game-design/*.{jpg,jpeg,png,webp}", { eager: true }),
    },
    {
        id: "games-programming",
        title: "Games Programming",
        text: "Code engines, gameplay systems, AI and shaders for cutting-edge games.",
        subjectLinks: ["AI", "Physics", "Engines", "Multiplayer", "Optimization"],
        undergradUrl: "https://www.staffs.ac.uk/courses/search?searchstax[query]=games%20programming&searchstax[page]=1",
        postgradUrl:
            "https://www.staffs.ac.uk/courses/search?searchstax[query]=games%20programming&searchstax[page]=1&searchstax[facets][0]=or:study_level_ss:Postgraduate%20(Taught)&searchstax[facets][1]=or:study_level_ss:Postgraduate%20(Research)",
        images: import.meta.glob("../../Assets/images/courses/games-programming/*.{jpg,jpeg,png,webp}", { eager: true }),
    },
    {
        id: "games-animation",
        title: "Games Animation",
        text: "Bring characters and creatures to life with industry-grade rigs and tools.",
        subjectLinks: ["Rigging", "Keyframing", "Facial", "Motion Capture", "Timing"],
        undergradUrl: "https://www.staffs.ac.uk/courses/search?searchstax[query]=games%20animation&searchstax[page]=1",
        postgradUrl:
            "https://www.staffs.ac.uk/courses/search?searchstax[query]=games%20animation&searchstax[page]=1&searchstax[facets][0]=or:study_level_ss:Postgraduate%20(Taught)&searchstax[facets][1]=or:study_level_ss:Postgraduate%20(Research)",
        images: import.meta.glob("../../Assets/images/courses/games-animation/*.{jpg,jpeg,png,webp}", { eager: true }),
    },
];

export default function HeroCourses({ currentIndex, setCurrentIndex }) {
    const [imageIndex, setImageIndex] = useState(0);
    const currentCourse = courses[currentIndex];

    const bgImages = Object.values(currentCourse.images ?? {}).map((mod) => mod?.default).filter(Boolean);
    const bgImage = bgImages.length > 0 ? bgImages[imageIndex % bgImages.length] : "../../Assets/images/Roxy.jpg";

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % (bgImages.length || 1));
        }, 8000);
        return () => clearInterval(interval);
    }, [currentCourse]);

    const handleNext = () => {
        setImageIndex(0);
        setCurrentIndex((prev) => (prev + 1) % courses.length);
    };

    const handlePrev = () => {
        setImageIndex(0);
        setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
    };

    return (
        <motion.section
            className="relative h-[60vh] w-full overflow-hidden text-white"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
                if (info.offset.x < -100) handleNext();
                else if (info.offset.x > 100) handlePrev();
            }}
        >
            {/* Background */}
            <AnimatePresence mode="wait">
                <motion.div className="absolute inset-0 w-full h-full flex">
                    {/* Previous Preview */}
                    <div className="hidden sm:block w-[10%] bg-cover bg-center opacity-20 blur-sm scale-95"
                         style={{ backgroundImage: `url(${courses[(currentIndex - 1 + courses.length) % courses.length]?.images && Object.values(courses[(currentIndex - 1 + courses.length) % courses.length].images)[0]?.default})` }}
                    />

                    {/* Main Image */}
                    <motion.div
                        key={currentCourse.id + imageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="flex-1 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />

                    {/* Next Preview */}
                    <div className="hidden sm:block w-[10%] bg-cover bg-center opacity-20 blur-sm scale-95"
                         style={{ backgroundImage: `url(${courses[(currentIndex + 1) % courses.length]?.images && Object.values(courses[(currentIndex + 1) % courses.length].images)[0]?.default})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-black/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-black/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Subject Area Links */}
            <div className="absolute top-10 right-[15%] z-20 flex flex-col gap-2 text-right text-2xl sm:text-5xl font-medium text-white w-[80%] max-w-[calc(100%-20%)]">
                {currentCourse.subjectLinks.map((subject, i) => (
                    <motion.a
                        key={i}
                        href={`#${subject.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:text-UofS-Red transition"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {subject}
                    </motion.a>
                ))}
            </div>

            {/* Title and Text */}
            <div className="absolute left-[15%] bottom-[100px] z-20 max-w-[80%]">
                <div className="doto-title leading-none">
                    <span className="text-white text-[150px] font-dot">GAME</span>
                    <span className="text-UofS-Red text-[100px] font-dot block">{currentCourse.title.split(" ")[1]?.toUpperCase() || "ART"}</span>
                    <p className="text-white text-lg mt-4 max-w-md leading-snug">{currentCourse.text}</p>
                </div>
            </div>

            {/* Course Links */}
            <div className="absolute left-[15%] bottom-[20px] z-20 flex gap-4">
                <Button
                    title="Undergrad"
                    href={currentCourse.undergradUrl}
                    containerClass="bg-white text-black px-6 py-2 text-lg font-semibold hover:bg-gray-200 transition"
                />
                <Button
                    title="Postgrad"
                    href={currentCourse.postgradUrl}
                    containerClass="bg-white text-black px-6 py-2 text-lg font-semibold hover:bg-gray-200 transition"
                />
            </div>

            {/* Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-[5%] top-1/2 z-30 transform -translate-y-1/2 text-6xl hover:text-UofS-Red"
                aria-label="Previous Course"
            >‹</button>
            <button
                onClick={handleNext}
                className="absolute right-[5%] top-1/2 z-30 transform -translate-y-1/2 text-6xl hover:text-UofS-Red"
                aria-label="Next Course"
            >›</button>

            {/* Previews */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {courses.map((course, idx) => (
                    <div key={course.id} className="relative group">
                        <button
                            onClick={() => {
                                setImageIndex(0);
                                setCurrentIndex(idx);
                            }}
                            className={`w-4 h-4 rounded-full border border-white transition ${idx === currentIndex ? "bg-white" : "bg-transparent"}`}
                        />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {course.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Credit */}
            <div className="absolute bottom-4 left-4 z-30 text-xs sm:text-sm text-white bg-black/50 px-3 py-1 rounded max-w-[90%]">
                Artwork by: {bgImage.split("/").pop()?.split(".")[0].replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
            </div>
        </motion.section>
    );
}
