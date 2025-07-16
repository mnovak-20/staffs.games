import React, { useState } from 'react';
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
    };
};

const Lists = () => {
    const [videoSrc, setVideoSrc] = useState(null);
    const { items, loading } = useCsvData(csvUrl, parser, { header: true });

    const description =
`Dive into a collection of games created by students at Staffordshire University. From first prototypes to fully polished experiences, these projects showcase creativity, skill, and ambition.

Whether it’s a solo passion project or a team collaboration, every game represents hands-on learning and real development practice. Go Play!`;

    return (
        <>
            <div className="flex justify-center text-gray-800 dark:text-gray-300 py-12 px-20 text-center max-w-6xl mx-auto">
                <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
            </div>

            {loading ? (
                <LoadingMessage text="Fetching games..."/>

            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="w-full bg-UofS-Grey rounded-3xl shadow-lg overflow-hidden transition duration-200 hover:scale-[1.01]"
                        >
                            <div
                                className="relative h-[300px] cursor-pointer"
                                onClick={() => item.trailerUrl && setVideoSrc(item.trailerUrl)}
                            >
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 text-UofS-Yellow-100 flex items-center justify-center text-center text-sm font-black px-4 opacity-0 hover:opacity-100 transition-opacity">
                                    Play '{item.title}' trailer
                                </div>
                            </div>
                            <div className="p-4 flex justify-between items-start gap-4 flex-wrap">
                                <div>
                                    <h3 className="text-lg font-black text-textLight mb-1 mt-2">{item.title}</h3>
                                    {item.teamName && (
                                        <p className="text-base text-[#170D38]">Team: {item.teamName}</p>
                                    )}
                                </div>
                                {item.storeUrl && (
                                    <Button
                                        id={`store-link-${item.id}`}
                                        title="Download from Game Store"
                                        href={item.storeUrl}
                                        target="_blank"
                                        containerClass="bg-UofS-Red hover:bg-UofS-Yellow-100 text-gray-800 text-lg font-bold px-7 py-5 rounded-full"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {videoSrc && <VideoEmbed src={videoSrc} closeModal={() => setVideoSrc(null)} />}
        </>
    );
};

export default Lists;
