import React from 'react'

import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import HeroLoA from "../components/hero/Hero_LoA.jsx";
import Footer from "../components/Footer.jsx";
import Lists_Games from "../components/lists/Lists_Games.jsx";
import HeroGames from "../components/hero/Hero_Games.jsx";

export default function Games() {

    return (

        <main className="bg-Game-Light min-h-screen w-screen flex flex-col overflow-x-hidden bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
            <HeroGames />
            <Lists_Games />
            <div className="flex-1"></div>
            <Footer />

        </main>

    );
}
