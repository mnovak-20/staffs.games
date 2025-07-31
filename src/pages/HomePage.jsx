import React from "react";

import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/hero/Hero.jsx";
import Section_LoA_Link from "../components/section/Section_LoA_Link.jsx";
import Footer from "../components/Footer.jsx";
import Section_Award_Winner from "../components/section/Section_Award_Winner.jsx";
import SpecialistSection from "../components/section/Section_Specialist.jsx";
import Staffsverse from "../components/section/Section_Staffsverse.jsx";
import Section_LOD from "../components/section/Section_LOD.jsx";
import DeveloperMode from "../components/section/Section_DeveloperMode.jsx";
import MockInterviews from "../components/section/Section_Mock.jsx";
import CampusSection from "../components/section/Section_Campus.jsx";


export default function HomePage() {

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <Hero />
            <Section_LoA_Link />
            <SpecialistSection />
            <Section_Award_Winner/>
            <MockInterviews />

            <Section_LOD />
            <DeveloperMode />
            <CampusSection />
            <Staffsverse />

            <div className="flex-1"></div>
            <Footer />
        </main>
    );
}