import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function VideoEmbed({ src, closeModal }) {
    const [videoLoading, setVideoLoading] = useState(true);

    const spinner = () => {
        setVideoLoading(false);
    };

    useEffect(() => {
        setVideoLoading(true); // reset spinner every time it opens
    }, [src]);

    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 flex justify-center items-center">
            <div className="relative w-[80%]">
                <IoCloseOutline
                    className="absolute -top-4 -right-4 text-black bg-UofS-Red hover:bg-UofS-Yellow-100 rounded-full cursor-pointer w-8 h-8 z-50 shadow-md"
                    aria-label="Close modal"
                    onClick={closeModal}
                />


                <div className="relative">
                    {videoLoading && (
                        <div className="absolute top-1/2 left-1/2 transform  text-UofS-Yellow-100 text-4xl transform rotate-180 animate-spin z-10">
                            <BiLoaderAlt />
                        </div>
                    )}
                    <iframe
                        className="w-full aspect-video rounded-xl z-20"
                        onLoad={spinner}
                        loading="lazy"
                        src={src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
