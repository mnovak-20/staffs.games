import React, { useState } from 'react';
import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import EnvGallerySection from "../components/galleries/Env_Gallery.jsx";
import WeaponGallerySection from "../components/galleries/Weapon_Gallery.jsx";
import CharGallerySection from "../components/galleries/Char_Gallery.jsx";
import VehicleGallerySection from "../components/galleries/Vehicle_Gallery.jsx";
import HeroCourses from "../components/hero/Hero_Courses.jsx";
import SectionEnvironment from "../components/section/Section_Environment.jsx";
import SectionCharacter from "../components/section/Section_Character.jsx";
import SectionWeapon from "../components/section/Section_Weapon.jsx";
import SectionVehicle from "../components/section/Section_Vehicle.jsx";
import SectionProp from "../components/section/Section_Prop.jsx";
import PropGallerySection from "../components/galleries/Prop_Gallery.jsx";

const Courses = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        return (
            <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">
                    <StickyHeader />
                    <Header />
                    <HeroCourses currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

                    {currentIndex === 0 && (
                        <>
                                <SectionEnvironment />
                                <EnvGallerySection />
                                <SectionWeapon />
                                <WeaponGallerySection />
                                <SectionCharacter />
                                <CharGallerySection />
                                <SectionVehicle />
                                <VehicleGallerySection />
                                <SectionProp />
                                <PropGallerySection />
                        </>
                    )}

                    {currentIndex === 1 && (
                        <>
                                {/* Game Concept Art specific components */}
                                <SectionWeapon />
                        </>
                    )}

                    {currentIndex === 2 && (
                        <>
                                { /* Game Design specific components */}
                                <SectionEnvironment />

                        </>
                    )}

                    {currentIndex === 3 && (
                        <>
                                {/* Game Programming specific components */}
                                <SectionProp />
                        </>
                    )}

                    {currentIndex === 4 && (
                        <>
                                {/* Game Animation specific components */}
                                <SectionVehicle />
                        </>
                    )}

                    <div className="flex-1" />
                    <Footer />
            </main>
        );
};

export default Courses;

