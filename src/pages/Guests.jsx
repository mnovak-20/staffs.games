import React from 'react'

import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Timeline from "../components/lists/Timeline.jsx";
import HeroGuest from "../components/hero/Hero_Guest.jsx";

export default function Guests() {

    return (

        <main className="bg-Game-Light min-h-screen w-screen flex flex-col overflow-x-hidden bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <HeroGuest />
            <Timeline />
            <div className="flex-1"></div>
            <Footer />

        </main>

    );
}
