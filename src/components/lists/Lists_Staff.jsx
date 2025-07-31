import React, { useState } from 'react';
import Button from '../../components/hooks/Button.jsx';
import LoadingMessage from '../../components/hooks/LoadingMessage.jsx';
import useCsvData from '../../components/hooks/useCsvData.jsx';

import SU from '../../Assets/images/SU.svg';

import { FaUser, FaUserGraduate } from 'react-icons/fa6';
import { FaLinkedin, FaGamepad, FaCode, FaPaintBrush, FaMusic } from 'react-icons/fa';
import { MdAnimation } from 'react-icons/md';
import { LuMove3D } from 'react-icons/lu';

const staffImages = import.meta.glob('../../Assets/images/staff/*', { eager: true });

const teachIcons = {
    Design: { icon: <FaGamepad title="Design" />, bgColor: 'bg-orange-600' },
    Programming: { icon: <FaCode title="Programming" />, bgColor: 'bg-blue-600' },
    Art: { icon: <LuMove3D title="Game Art" />, bgColor: 'bg-purple-600' },
    Concept: { icon: <FaPaintBrush title="Concept Art" />, bgColor: 'bg-pink-600' },
    Animation: { icon: <MdAnimation title="Animation" />, bgColor: 'bg-yellow-600' },
    Audio: { icon: <FaMusic title="Audio" />, bgColor: 'bg-green-600' },
};

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSo7n2hUWWcqVfztryidahUsqwbQUAp5vNO7IFfMQbGFxOzK2HYB-ojPR5ZZ7aH0JKOXQd5vIODtHLT/pub?output=csv';

const parser = (row, index) => {
    const teachOn = row.teachOn?.split('|').map(d => d.trim()).filter(Boolean) || [];

    const imageKey = Object.keys(staffImages).find(key =>
        key.endsWith(`/${row.imageName?.trim()}`)
    );
    const image = imageKey ? staffImages[imageKey].default : '';

    return {
        id: index,
        title: row.staffName,
        image,
        role: row.role,
        department: row.department,
        specialism: row.specialism,
        linkedin: row.linkedin,
        research: row.research,
        portfolio: row.portfolio,
        teachOn,
        profile: row.staffProfile,
    };
};

const Lists = () => {
    const [selected, setSelected] = useState(null);
    const { items, loading } = useCsvData(csvUrl, parser, { header: true });

    const description =
        'Meet the passionate and experienced team behind our award-winning games courses. Our staff bring together years of industry expertise and academic excellence, combining real-world knowledge with cutting-edge teaching. They are dedicated to nurturing the next generation of game developers. Discover the people who make our community thrive.';

    return (
        <>
            {/* Description */}
            <div className="flex justify-center text-gray-800 dark:text-gray-300 py-12 px-20 text-center max-w-6xl mx-auto">
                <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
            </div>

            {loading ? (
                <LoadingMessage text="Finding our Staff..."/>

            ) : (
                <div className="px-8 grid gap-5 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] mb-[50px] transition-opacity duration-300 opacity-100">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative w-full h-[250px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                            onClick={() => setSelected(item)}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                            {/* Hover Overlay */}
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white text-center p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-base">
                                {item.title}
                            </div>

                            {/* Teaches On Icons */}
                            {item.teachOn?.length > 0 && (
                                <div className="absolute bottom-2 left-2 flex gap-1">
                                    {item.teachOn.map((dept, idx) => {
                                        const info = teachIcons[dept.replace(/ /g, '_')];
                                        return info ? (
                                            <div
                                                key={idx}
                                                className={`${info.bgColor} p-1 rounded-full text-white text-xs flex items-center justify-center w-6 h-6`}
                                                title={dept}
                                            >
                                                {info.icon}
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            )}

                            {/* Small name label */}
                            <div className="absolute top-2 right-2 text-white text-[10px] bg-black/50 px-2 py-[2px] rounded-full transition-opacity duration-200 group-hover:opacity-0">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
                    <div className="bg-Game-Light dark:bg-Game-Dark rounded-3xl p-6 max-w-lg w-full flex flex-col sm:flex-row gap-6 shadow-lg">
                        <div className="flex-1">
                            <h3 className="text-xl font-black text-gray-800 dark:text-gray-300 mb-2">{selected.title}</h3>

                            {selected.role && <p className="text-UofS-Red font-black text-base">{selected.role}</p>}

                            {selected.department && (
                                <p className="mt-2.5 text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                                    <b>Department:</b> {selected.department}
                                    <br />
                                    <b>Specialism:</b> {selected.specialism}
                                </p>
                            )}

                            <div className="flex flex-col gap-3 mt-3">
                                {selected.profile && (
                                    <Button
                                        id="profile"
                                        title="Staffordshire Profile"
                                        leftIcon={<img src={SU} alt="SU Logo" className="w-5 h-5" />}
                                        containerClass="flex-auto bg-UofS-DarkBlue hover:bg-UofS-DigitalBlue text-white px-6 py-2 text-sm w-[170px]"
                                        href={selected.profile}
                                        target="_blank"
                                    />
                                )}
                                {selected.linkedin && (
                                    <Button
                                        id="linkedin"
                                        title="LinkedIn"
                                        leftIcon={<FaLinkedin />}
                                        containerClass="flex-auto bg-UofS-Peach-100 hover:bg-UofS-Peach-50 px-6 py-2 text-sm w-[170px]"
                                        href={selected.linkedin}
                                        target="_blank"
                                    />
                                )}
                                {selected.research && (
                                    <Button
                                        id="research"
                                        title="Research"
                                        leftIcon={<FaUserGraduate />}
                                        containerClass="flex-auto bg-UofS-Peach-100 hover:bg-UofS-Peach-50 px-6 py-2 text-sm w-[170px]"
                                        href={selected.research}
                                        target="_blank"
                                    />
                                )}
                                {selected.portfolio && (
                                    <Button
                                        id="portfolio"
                                        title="Portfolio"
                                        leftIcon={<FaUser />}
                                        containerClass="flex-auto bg-UofS-Peach-100 hover:bg-UofS-Peach-50 px-6 py-2 text-sm w-[170px]"
                                        href={selected.portfolio}
                                        target="_blank"
                                    />
                                )}

                            </div>

                            {/* Teaches On in Modal */}
                            {selected.teachOn?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {selected.teachOn.map((dept, idx) => {
                                        const info = teachIcons[dept.replace(/ /g, '_')];
                                        return info ? (
                                            <div
                                                key={idx}
                                                className={`${info.bgColor} px-2 py-1 rounded-full text-white text-xs flex items-center gap-1`}
                                                title={dept}
                                            >
                                                {info.icon}
                                                <span className="whitespace-nowrap">{dept}</span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Image + Close */}
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
