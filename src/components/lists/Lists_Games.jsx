import React, { useState, useMemo } from 'react';
import Button from '../../components/hooks/Button.jsx';
import VideoEmbed from '../../components/hooks/Video_Embed.jsx';
import useCsvData from '../../components/hooks/useCsvData.jsx';
import LoadingMessage from '../../components/hooks/LoadingMessage.jsx';

const gameImages = import.meta.glob('../../Assets/images/games/*', { eager: true });

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRcczx33xixp4uvdKmm56MuouAu2taz8boXR8fF1FWnY70MSM_NQtjWn1fh6YtDwmjEvPbazotjjec/pub?output=csv';

const parser = (row, index) => {
    const imagePath = `../../Assets/images/games/${row.imageName?.trim()}`;
    const image = gameImages[imagePath]?.default || '';

    return {
        id: index,
        title: row.gameName,
        image,
        teamName: row.teamName,
        storeUrl: row.storeUrl,
        trailerUrl: row.trailerUrl,
        tags: row.tags ? row.tags.split(',').map(tag => tag.trim()) : [],
    };
};

const Lists = () => {
    const [videoSrc, setVideoSrc] = useState(null);
    const [activeTag, setActiveTag] = useState(null);
    const [search, setSearch] = useState('');
    const { items, loading } = useCsvData(csvUrl, parser, { header: true });

    const description =
        `Dive into a collection of games created by students at Staffordshire University. From first prototypes to fully polished experiences, these projects showcase creativity, skill, and ambition.

Whether it’s a solo passion project or a team collaboration, every game represents hands-on learning and real development practice. Go Play!`;

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesTag = activeTag ? item.tags.includes(activeTag) : true;
            const matchesSearch = [item.title, item.teamName].some(field =>
                field?.toLowerCase().includes(search.toLowerCase())
            );
            return matchesTag && matchesSearch;
        });
    }, [items, activeTag, search]);

    const allTags = useMemo(() => {
        const tagSet = new Set();
        items.forEach(item => item.tags.forEach(tag => tagSet.add(tag)));
        return Array.from(tagSet).sort();
    }, [items]);

    return (
        <>
            <div className="flex justify-center text-gray-800 dark:text-gray-300 py-12 px-6 md:px-20 text-center max-w-5xl mx-auto">
                <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
            </div>

            {loading ? (
                <LoadingMessage text="Fetching games..." />
            ) : (
                <>
                    {/* Search Input */}
                    <div className="max-w-xl mx-auto mb-6 px-6">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-UofS-Red"
                        />
                    </div>

                    {/* Tag filter row */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8 px-6">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`text-xs px-4 py-2 rounded-full font-semibold tracking-wide border transition 
                                    ${activeTag === tag
                                    ? 'bg-UofS-Red text-white border-UofS-Red'
                                    : 'bg-white dark:bg-gray-800 text-UofS-Red border-UofS-Red hover:bg-UofS-Red hover:text-white'}
                                `}
                            >
                                {tag}
                            </button>
                        ))}
                        {activeTag && (
                            <button
                                onClick={() => setActiveTag(null)}
                                className="text-xs px-4 py-2 rounded-full font-semibold tracking-wide border border-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                Clear Filter
                            </button>
                        )}
                    </div>

                    {filteredItems.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400 italic pb-20">No games match this filter.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 px-6 md:px-12 pb-20">
                            {filteredItems.map((item, i) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg overflow-hidden transition-all transform hover:scale-[1.015] hover:shadow-xl animate-fade-in"
                                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
                                >
                                    <div
                                        className="relative h-64 cursor-pointer group"
                                        onClick={() => item.trailerUrl && setVideoSrc(item.trailerUrl)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && item.trailerUrl && setVideoSrc(item.trailerUrl)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={`Promotional for ${item.title}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                        {item.trailerUrl && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                                <p className="text-sm font-bold text-white">Watch Trailer</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col justify-between h-full grow">
                                        <div className="flex flex-col gap-2 mb-4">
                                            <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">{item.title}</h3>
                                            {item.teamName && (
                                                <p className="text-sm text-gray-500 dark:text-gray-400 italic">By {item.teamName}</p>
                                            )}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.tags?.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs bg-UofS-Red/10 text-UofS-Red px-3 py-1 rounded-full font-semibold uppercase tracking-wide"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-end mt-auto">
                                            {item.storeUrl ? (
                                                <Button
                                                    id={`store-link-${item.id}`}
                                                    title="Download from Store"
                                                    href={item.storeUrl}
                                                    target="_blank"
                                                    containerClass="bg-UofS-Red hover:bg-UofS-Yellow-100 text-white hover:text-black text-sm font-bold px-5 py-3 rounded-full transition-colors"
                                                />
                                            ) : (
                                                <span className="text-sm text-gray-400 italic">No download available</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {videoSrc && <VideoEmbed src={videoSrc} closeModal={() => setVideoSrc(null)} />}
        </>
    );
};

export default Lists;
