
import React from "react";
import {Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage.jsx";
import LoA from "./pages/LoA.jsx";
import Staff from "./pages/Staff.jsx";
import Games from "./pages/Games.jsx";
import Awards from "./pages/Awards.jsx";
import News from "./pages/News.jsx";
import Courses from "./pages/Courses.jsx";
import Guests from "./pages/Guests.jsx";



import BlogPost from "./components/BlogPost";
import AwardsPost from "./components/AwardsPost";




export default function App() {
    return (
        <main className="overflow-x-hidden">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoA" element={<LoA />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Awards" element={<Awards />} />
            <Route path="/Guests" element={<Guests />} />
            <Route path="/News" element={<News />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/awards/:slug"  element={<AwardsPost />} />
            <Route path="/news/:slug" element={<BlogPost />} />


        </Routes>
        </main>

    );
}
