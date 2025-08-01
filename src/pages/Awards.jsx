import React from 'react'
import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AwardList from "../components/AwardList.jsx";


const News = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />

            <AwardList />
            <div className="flex-1"></div>
            <Footer />

        </main>
    )
}
export default News
