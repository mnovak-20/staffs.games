import React, { useEffect, useState } from 'react';

import AnnivLogoD from "../Assets/images/23YoG_dark.png";
import AnnivLogoL from "../Assets/images/23YoG_light.png";
import SULogo from "../Assets/images/SU.svg";

const Footer = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme(); // Initial check

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-Game-Light dark:bg-Game-Dark flex items-center h-[70px]">
            {/* Left */}
            <div className="flex pl-[25px] sm:pl-[50px] justify-center">
                <a
                    href="https://www.staffs.ac.uk/news/2023/12/heralding-20-year-of-games-the-christmas-lectures"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={isDark ? AnnivLogoL : AnnivLogoD}
                        alt="23 Years of Games"
                        className="h-[30px] sm:h-[40px] lg:h-[50px]"
                    />
                </a>
            </div>

            {/* Center */}
            <div className="flex-1 text-center">
                <a
                    href="https://www.staffs.ac.uk/go/games"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 dark:text-gray-300 font-medium dark:hover:text-UofS-Red"
                >
                    staffs.ac.uk/go/games
                </a>
            </div>

            {/* Right */}
            <div className="flex pr-[25px] sm:pr-[50px] justify-center">
                <a href="https://www.staffs.ac.uk/" target="_blank" rel="noreferrer">
                    <img
                        src={SULogo}
                        alt="Staffs Decorative Logo"
                        className="h-[30px] sm:h-[40px] lg:h-[50px]"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
