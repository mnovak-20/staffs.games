import React from 'react'
import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BlogList from "../components/BlogList.jsx";
import HeroNews from "../components/hero/Hero_News.jsx";


const News = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />
<HeroNews />
<BlogList />
            <div className="flex-1"></div>
            <Footer />

        </main>
    )
}
export default News
