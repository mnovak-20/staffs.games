import React, { useState } from "react";
import posts from "../utils/getAwardPosts";
import { Link } from "react-router-dom";
import { FaAward, FaTag } from "react-icons/fa";

const allTags = [
    ...new Set(posts.flatMap(post => post.tags || []))
];

export default function AwardList() {
    const [activeTag, setActiveTag] = useState("all");

    const filteredPosts = activeTag === "all"
        ? posts
        : posts.filter(post => post.tags?.includes(activeTag));

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
            {/* Top bar with filter */}
            <div className="flex flex-wrap gap-2 mb-8">
                <button
                    className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${activeTag === "all" ? "bg-UofS-Red text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300"}`}
                    onClick={() => setActiveTag("all")}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${activeTag === tag ? "bg-UofS-Red text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300"}`}
                        onClick={() => setActiveTag(tag)}
                    >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (


                    <Link
                        to={`/awards/${post.slug}`}
                        key={post.slug}
                        className="group block transform transition duration-500 ease-in-out hover:scale-[1.01] opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow hover:shadow-2xl hover:border-UofS-Red transition-all duration-300 flex flex-col h-[500px] group-hover:bg-UofS-Yellow-50">
                            {post.thumbnail && (
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {post.tags?.includes("winner") && (
                                        <div className="absolute top-2 left-2 bg-UofS-Red text-white text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1">
                                            <FaAward className="text-xs" /> Winner
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <p className="text-sm text-UofS-Red font-medium mb-3">{post.date}</p>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-UofS-Red transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 line-clamp-4">
                                    {post.description || post.content?.slice(0, 100) || ""}...
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex flex-wrap gap-1">
                                        {post.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs text-white bg-gray-700 dark:bg-gray-600 px-2 py-1 rounded-full flex items-center gap-1"
                                            >
                                                <FaTag className="text-[10px]" /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-UofS-Red">Read more...</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Back to top button */}
            <div className="flex justify-center pt-10">
                <button
                    onClick={scrollToTop}
                    className="bg-UofS-Red hover:bg-UofS-Yellow-100 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
                    aria-label="Scroll to top"
                >
                    ↑ Back to Top
                </button>
            </div>
        </section>
    );
}

// Add this to your CSS (e.g. in index.css or a global stylesheet):
/*
@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  transform: translateY(20px);
}
*/
