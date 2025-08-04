import React, { useState } from "react";
import posts from "../utils/getBlogPosts";
import { Link } from "react-router-dom";

const allTags = [
    ...new Set(posts.flatMap(post => post.tags || []))
];

function formatDateHeading(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

function groupByMonthYear(posts) {
    return posts.reduce((groups, post) => {
        const key = formatDateHeading(post.date);
        if (!groups[key]) groups[key] = [];
        groups[key].push(post);
        return groups;
    }, {});
}

export default function BlogList() {
    const [activeTag, setActiveTag] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post => {
        const matchesTag = activeTag === "all" || post.tags?.includes(activeTag);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.description?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    const groupedPosts = groupByMonthYear(filteredPosts);

    const featuredPost = posts.find(post => post.tags?.includes("featured")) || posts[0];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
            {/* Featured Post Banner */}
            {featuredPost && (
                <Link to={`/${featuredPost.slug}`} className="block mb-12 group">
                    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={featuredPost.thumbnail}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                            <p className="text-sm text-white/70 mb-1">{featuredPost.date}</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-UofS-Yellow-100 transition-all">
                                {featuredPost.title}
                            </h2>
                        </div>
                    </div>
                </Link>
            )}

            {/* Search Bar */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-80 px-4 py-2 border rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2">
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
            </div>

            <div className="space-y-10">
                {Object.entries(groupedPosts).map(([month, posts]) => (
                    <div key={month}>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4 border-b border-gray-300 dark:border-gray-700 pb-1">{month}</h3>
                        <div className="space-y-6">
                            {posts.map((post, index) => (
                                <Link
                                    to={`/${post.slug}`}
                                    key={post.slug}
                                    className="group flex flex-col sm:flex-row gap-6 items-start bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                                >
                                    {post.thumbnail && (
                                        <div className="relative overflow-hidden w-full sm:w-60 h-40 rounded-md shadow-md">
                                            <img
                                                src={post.thumbnail}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-3">
                                            <span>{post.date}</span>
                                            {post.tags?.map(tag => (
                                                <span key={tag}>• {tag}</span>
                                            ))}
                                        </div>
                                        <h2 className="text-2xl font-bold group-hover:text-UofS-Red transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                                            {post.description || post.content?.slice(0, 140) || ""}...
                                        </p>
                                        <div className="mt-auto text-right">
                                            <span className="text-sm font-semibold text-UofS-Red">Read more...</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
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

// Add this to your CSS (e.g. in index.css or global stylesheet):
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