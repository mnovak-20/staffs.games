import React from 'react'

import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Lists_Staff from "../components/lists/Lists_Staff.jsx";
import HeroStaff from "../components/hero/Hero_Staff.jsx";

export default function Staff() {

    return (

        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <HeroStaff />
            <Lists_Staff />
            <div className="flex-1"></div>
            <Footer />

        </main>

    );
}
