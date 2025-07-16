import React from 'react'

import Header from "../components/Header.jsx";
import HeroLoA from "../components/hero/Hero_LoA.jsx";
import Footer from "../components/Footer.jsx";
import Lists from "../components/lists/Lists.jsx";
import StickyHeader from "../components/StickyHeader.jsx";

export default function LoA() {

    return (

        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <HeroLoA />
            <Lists />
            <div className="flex-1"></div>
            <Footer />

        </main>

    );
}
