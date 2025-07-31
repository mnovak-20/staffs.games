import React from 'react'
import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import EnvGallerySection from "../components/galleries/Env_Gallery.jsx";
import WeaponGallerySection from "../components/galleries/Weapon_Gallery.jsx";
import CharGallerySection from "../components/galleries/Char_Gallery.jsx";
import VehicleGallerySection from "../components/galleries/Vehicle_Gallery.jsx";

const Courses = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <EnvGallerySection />
            <WeaponGallerySection />
            <CharGallerySection />
            <VehicleGallerySection />
            <div className="flex-1"></div>
            <Footer />

        </main>
    )
}
export default Courses
