import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFullscreen } from "react-icons/bs";

function GalleryCarousel({ panels, fullScreen = true }) {
    const [visibleCount, setVisibleCount] = useState(4);
    const [startIndex, setStartIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(1);
    const [fullscreenIndex, setFullscreenIndex] = useState(null);
    const [autoPlay, setAutoPlay] = useState(true);

    const autoPlayRef = useRef();
    const resetTimerRef = useRef();
    const touchStartX = useRef(null);

    useEffect(() => {
        autoPlayRef.current = handleNext;
    });

    useEffect(() => {
        const play = () => {
            if (autoPlayRef.current) {
                autoPlayRef.current();
            }
        };
        if (autoPlay) {
            resetTimerRef.current = setInterval(play, 8000);
            return () => clearInterval(resetTimerRef.current);
        }
    }, [autoPlay]);

    const resetAutoPlayTimer = () => {
        if (resetTimerRef.current) clearInterval(resetTimerRef.current);
        if (autoPlay) {
            resetTimerRef.current = setInterval(() => {
                if (autoPlayRef.current) autoPlayRef.current();
            }, 8000);
        }
    };

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            let count = 4;
            if (width < 640) count = 3;
            else if (width < 768) count = 4;
            else if (width < 1024) count = 5;
            else count = 6;

            setVisibleCount((prev) => {
                if (count !== prev) {
                    setExpandedIndex((idx) => Math.min(idx, count - 1));
                }
                return count;
            });
        };
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    useEffect(() => {
        setStartIndex(0);
        setExpandedIndex(1);
        setFullscreenIndex(null);
    }, [panels]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setFullscreenIndex(null);
                setAutoPlay(true);
            }
            if (fullscreenIndex !== null) {
                if (e.key === 'ArrowLeft') {
                    handleFullscreenNav(-1);
                } else if (e.key === 'ArrowRight') {
                    handleFullscreenNav(1);
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [fullscreenIndex]);

    const total = panels.length;
    const visiblePanels = Array.from({ length: visibleCount }, (_, i) => {
        return panels[(startIndex + i) % total];
    });

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + total) % total);
        setExpandedIndex(1);
        resetAutoPlayTimer();
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % total);
        setExpandedIndex(1);
        resetAutoPlayTimer();
    };

    const handlePanelClick = (index) => {
        resetAutoPlayTimer();
        if (expandedIndex === index) {
            const globalIndex = (startIndex + index) % total;
            setFullscreenIndex(globalIndex);
            setAutoPlay(false);
        } else {
            const newGlobalIndex = (startIndex + index) % total;
            const newStartIndex = (newGlobalIndex - 1 + total) % total;
            setStartIndex(newStartIndex);
            setExpandedIndex(1);
        }
    };

    const handleFullscreenNav = (direction) => {
        setFullscreenIndex((prev) => (prev + direction + total) % total);
    };

    const handleFullscreenBackgroundClick = (e) => {
        if (e.target.id === 'fullscreen-overlay') {
            setFullscreenIndex(null);
            setAutoPlay(true);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                handleFullscreenNav(-1);
            } else {
                handleFullscreenNav(1);
            }
        }
        touchStartX.current = null;
    };

    if (!panels || panels.length === 0) {
        return (
            <div className="w-full h-[50vh] flex items-center justify-center text-white bg-black text-lg">
                No images found for this gallery.
            </div>
        );
    }

    return (
        <main className={`w-screen ${fullScreen ? 'h-screen' : 'h-[90vh]'} bg-black overflow-hidden relative`}>
            <div
                className="h-full w-full flex items-center justify-center p-4 relative"
                style={{
                    backgroundImage: `url(${visiblePanels[expandedIndex]?.image || panels[0].image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="inset-0 absolute bg-[rgba(0,0,0,0.5)] backdrop-blur-md z-0"></div>

                {/* Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white bg-UofS-Red hover:bg-UofS-Yellow-100 hover:text-black rounded-full p-2"
                >
                    <IoIosArrowBack size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white bg-UofS-Red hover:bg-UofS-Yellow-100 hover:text-black rounded-full p-2"
                >
                    <IoIosArrowForward size={24} />
                </button>

                {/* Gallery Panels */}
                <div className="flex w-full max-w-[90vw] h-[80vh] gap-2 items-center justify-center z-10">
                    {visiblePanels.map((panel, index) => {
                        const isExpanded = expandedIndex === index;
                        const uniqueKey = `${panel.image}-${index}`;
                        return (
                            <div
                                key={uniqueKey}
                                onClick={() => handlePanelClick(index)}
                                className={`relative h-full rounded-2xl cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%]' : 'w-[10%] hover:bg-gray-200'} min-w-[40px]`}
                            >
                                <img
                                    src={panel.image}
                                    alt={`Panel ${index + 1}`}
                                    className="w-full h-full object-cover object-top"
                                />
                                {isExpanded && (
                                    <>
                                        <div className="absolute bottom-4 right-5 bg-black/20 text-white text-[16px] px-2 py-2 rounded">
                                            <BsFullscreen />
                                        </div>
                                        {panel.credit && (
                                            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded max-w-[75%]">
                                                artwork by: {panel.link ? (
                                                    <a
                                                        href={panel.link.startsWith('http') ? panel.link : `https://${panel.link}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline hover:text-UofS-Yellow-100"
                                                    >
                                                        {panel.credit}
                                                    </a>
                                                ) : panel.credit}
                                                {panel.year && ` • ${panel.year}`}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Indicator */}
                <div className="absolute bottom-6 text-black text-xl font-bold z-20 bg-UofS-Yellow-100 px-4 py-2 rounded-full">
                    {((startIndex + expandedIndex) % total + 1).toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
                </div>

                {/* Fullscreen Overlay */}
                {fullscreenIndex !== null && (
                    <div
                        id="fullscreen-overlay"
                        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                        onClick={handleFullscreenBackgroundClick}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <button
                            onClick={() => handleFullscreenNav(-1)}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white bg-UofS-Red hover:bg-UofS-Yellow-100 hover:text-black rounded-full p-3"
                        >
                            <IoIosArrowBack size={28} />
                        </button>

                        <div className="relative z-40">
                            <img
                                src={panels[fullscreenIndex].image}
                                alt="Fullscreen"
                                className="max-w-full max-h-[90vh] object-contain cursor-pointer"
                                onClick={() => {
                                    setFullscreenIndex(null);
                                    setAutoPlay(true);
                                }}
                            />
                            {panels[fullscreenIndex].credit && (
                                <div className="absolute bottom-4 left-4 text-white bg-black/60 text-sm px-3 py-1 rounded">
                                    artwork by: {panels[fullscreenIndex].link ? (
                                        <a
                                            href={panels[fullscreenIndex].link.startsWith('http') ? panels[fullscreenIndex].link : `https://${panels[fullscreenIndex].link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-UofS-Yellow-100"
                                        >
                                            {panels[fullscreenIndex].credit}
                                        </a>
                                    ) : panels[fullscreenIndex].credit}
                                    {panels[fullscreenIndex].year && ` • ${panels[fullscreenIndex].year}`}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => handleFullscreenNav(1)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white bg-UofS-Red hover:bg-UofS-Yellow-100 hover:text-black rounded-full p-3"
                        >
                            <IoIosArrowForward size={28} />
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default GalleryCarousel;
