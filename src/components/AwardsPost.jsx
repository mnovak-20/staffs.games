import { useParams, Link } from "react-router-dom";
import posts from "../utils/getAwardPosts";
import ReactMarkdown from "react-markdown";

import StickyHeader from "../components/StickyHeader.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

export default function AwardsPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) return <div className="p-8 text-xl">Post not found.</div>;

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col bg-Game-Light dark:bg-Game-Dark">

            <StickyHeader />
            <Header />

            <div className="max-w-2xl mx-auto p-8">
                <Link to="/Awards" className="text-blue-500 underline">&larr; Back to all posts</Link>
                <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
                <p className="text-gray-500 mb-4">{post.date}</p>
                {post.thumbnail && (
                    <img src={post.thumbnail} alt={post.title} className="w-full max-w-xs my-2" />
                )}
                <article className="prose">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
            </div>

            <div className="flex-1"></div>
            <Footer />

        </main>

    );
}
