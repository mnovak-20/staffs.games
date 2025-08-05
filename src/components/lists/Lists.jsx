import React, { useState } from 'react';
import Button from "../hooks/Button.jsx";
import useCsvData from '../../components/hooks/useCsvData.jsx';

const boxArtImages = import.meta.glob("../../Assets/images/boxart/*.{jpg,jpeg,png,webp}", { eager: true });
const studioImages = import.meta.glob("../../Assets/images/studio/*.{jpg,jpeg,png,webp}", { eager: true });

const tabConfigs = {
    CREDITS: {
        csvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTB9a6UtJtvvOzJdKK4dozXmyP9J1ofMn4FFjB6VNfxJ72rgFp4JlNUMhSp0jJJCk5JPYGgWklX5PuR/pub?output=csv',
        parser: (row, index) => {
            const names = row.studentNames?.split('|') || [];
            const links = row.linkedins?.split('|') || [];
            const ports = row.portfolios?.split('|') || [];
            const students = names.map((name, i) => ({
                name: name.trim(),
                linkedin: links[i]?.trim() || '',
                portfolio: ports[i]?.trim() || '',
            }));

            const trimmedName = row.imageName?.trim();
            const imageKey = trimmedName
                ? Object.keys(boxArtImages).find(key => key.endsWith(`/${trimmedName}`))
                : null;

            const image = imageKey ? boxArtImages[imageKey].default : '';

            if (!image && trimmedName) {
                console.warn(`Image not found for: ${trimmedName}`);
            }

            return { id: index, title: row.title, image, students };
        }
    },
    STUDIOS: {
        csvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQsRlsFc_V0Hv9ohZaakOtm7Krzo5GVCVIlIDemtsOpmEQFtFaapcZexH3nUC7uxXPNxDQCgk0Jd5lH/pub?output=csv',
        parser: (row, index) => {
            const names = row.Name?.split('|') || [];
            const links = row.LinkedIn?.split('|') || [];
            const ports = row.Portfolio?.split('|') || [];
            const students = names.map((name, i) => {
                const linkedin = links[i]?.trim() || '';
                const portfolio = ports[i]?.trim() || '';
                return {
                    name: name.trim(),
                    linkedin: linkedin.toLowerCase().includes("none") ? '' : linkedin,
                    portfolio: portfolio.toLowerCase().includes("none") ? '' : portfolio,
                };
            });

            const trimmedName = row.studioImage?.trim();
            const imageKey = trimmedName
                ? Object.keys(studioImages).find(key => key.endsWith(`/${trimmedName}`))
                : null;

            const image = imageKey ? studioImages[imageKey].default : '';

            return {
                id: index,
                title: row.Studio,
                image,
                students,
            };
        }
    }
};

const Lists = () => {
    const [activeTab, setActiveTab] = useState('STUDIOS');
    const [selected, setSelected] = useState(null);

    const tabDescriptions = {
        CREDITS: "The List of Awesome celebrates the incredible achievements of our graduates who have gone on to work on some of the world’s biggest and most acclaimed games. From AAA blockbusters to indie hits, our alumni have made their mark across the industry.\n\nThis credit list highlights just a small sample of the titles our students have helped bring to life, showcasing the real-world impact of a Staffordshire Games degree. Their success is proof that with passion, skill, and the right support, anything is possible.",
        STUDIOS: "You’ll find Staffordshire talent behind the scenes at places like Rockstar, Ubisoft, Codemasters, Sumo Digital, Creative Assembly, Playground Games, and many more. This list celebrates where our students go, what they achieve, and how they continue to shape the future of games.",
    };

    const tabStyles = {
        CREDITS: { cardHeight: 260, minWidth: 150 },
        STUDIOS: { cardHeight: 180, minWidth: 140 },
    };

    const cardMinWidth = tabStyles[activeTab]?.minWidth || 200;
    const cardHeight = tabStyles[activeTab]?.cardHeight || 260;

    const { items, loading } = useCsvData(
        tabConfigs[activeTab].csvUrl,
        tabConfigs[activeTab].parser,
        { header: true }
    );

    return (
        <>
            {/* Tab Buttons */}
            <div className="flex flex-nowrap justify-center">
                <div className="flex gap-10 py-10">
                    {['STUDIOS','CREDITS'].map((label) => (
                        <div
                            key={label}
                            onClick={() => setActiveTab(label)}
                            className={`
                                ${activeTab === label
                                ? 'cursor-auto font-bebas tracking-widest text-gray-800 dark:text-gray-300 fontWeight-bold bg-UofS-Red'
                                : 'cursor-pointer text-gray-800 dark:text-gray-300 dark:hover:text-gray-800 font-bebas tracking-widest hover:bg-UofS-Yellow-50'}
                                text-[20px] px-[50px] py-[15px] rounded-full
                            `}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="flex justify-center text-gray-800 dark:text-gray-300 py-12 px-20 text-center max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed whitespace-pre-line">{tabDescriptions[activeTab]}</p>
            </div>

            {/* Grid */}
            <div
                className={`mt-5 px-8 grid gap-5 transition-opacity duration-300 ${
                    loading
                        ? 'hidden opacity-0'
                        : `grid-cols-[repeat(auto-fill,minmax(${cardMinWidth}px,1fr))] opacity-100 mb-[50px]`
                }`}
                style={{
                    gridTemplateColumns: `repeat(auto-fill, minmax(${cardMinWidth}px, 1fr))`,
                }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="w-full cursor-pointer relative rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-110 duration-300"
                        style={{ height: `${cardHeight}px` }}
                        onClick={() => setSelected(item)}
                    >
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white text-center p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-base">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Loading Message */}
            {loading && (
                <div className="doto-title" style={{ padding: '80px', textAlign: 'center', color: 'var(--UofSRed)', fontSize: '40px' }}>
                    LOADING...
                </div>
            )}

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
                    <div className="bg-Game-Light dark:bg-Game-Dark rounded-3xl p-6 max-w-lg w-full flex flex-col sm:flex-row gap-6 shadow-lg">
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-gray-800 dark:text-gray-300 mb-2">{selected.title}</h3>

                            {selected.students?.map((s, i) => (
                                <div key={i} className="mb-3">
                                    <p className="text-[18px] text-gray-800 dark:text-gray-300 font-bold">{s.name}</p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        {s.linkedin && (
                                            <Button
                                                id={`linkedin-${i}`}
                                                title="LinkedIn"
                                                containerClass="bg-UofS-Peach-100 hover:bg-UofS-Peach-50 px-4 py-1 text-sm"
                                                href={s.linkedin}
                                                target="_blank"
                                            />
                                        )}
                                        {s.portfolio && (
                                            <Button
                                                id={`portfolio-${i}`}
                                                title="Portfolio"
                                                containerClass="bg-UofS-Peach-100 hover:bg-UofS-Peach-50 px-4 py-1 text-sm"
                                                href={s.portfolio}
                                                target="_blank"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Image & Close */}
                        <div className="flex flex-col items-end flex-none w-[150px]">
                            <img src={selected.image} alt={selected.title} className="w-full rounded-3xl object-cover shadow-md" />
                            <Button
                                id="close"
                                title="Close"
                                containerClass="bg-UofS-Red hover:bg-UofS-Yellow-50 flex-center mt-3 px-6 py-2 text-sm"
                                onClick={() => setSelected(null)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Lists;
