import React from "react";
import Markdown from "react-markdown";
import raw from '../../content/blog/test-blog-post.md?raw';

export default function MarkdownDemo() {
    return (
        <div className="prose mx-auto my-8">
            <Markdown>{raw}</Markdown>
        </div>
    );
}
