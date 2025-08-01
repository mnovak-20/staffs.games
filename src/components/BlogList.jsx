import React from "react";
import posts from "../utils/getBlogPosts";
import { Link } from "react-router-dom";



export default function BlogList() {
    return (
        <div className="max-w-2xl mx-auto py-8 space-y-8">
            {posts.map(post => (

                <div key={post.slug} className="border rounded p-4 bg-white">


                        <Link to={`/${post.slug}`}>
                            <h2 className="text-2xl font-bold">{post.title}</h2>
                        </Link>


                    <p className="text-gray-500">{post.date}</p>
                    {post.thumbnail && (
                        <img src={post.thumbnail} alt={post.title} className="w-full max-w-xs my-2" />
                    )}
                    <p>{post.description + ". . ." || post.content.slice(0, 100) + "..."}</p>
                </div>
            ))}
        </div>
    );
}
