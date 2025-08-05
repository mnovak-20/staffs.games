import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";



// Theme Toggle Component
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-full p-2 text-gray-800 dark:text-gray-300 hover:bg-UofS-Yellow-50 dark:hover:text-black"
            aria-label="Toggle dark mode"
        >
            {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
    );
};

// Social Media SVGs

const ArtstationIcon = () => (
    <svg fill="#ffffff" viewBox="-10 -10 43 43">
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
    </svg>
);

const ItchIcon = () => (
    <svg fill="#ffffff" viewBox="-10 -10 51 51">
        <path
            d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z">
        </path>
    </svg>
);

const YoutubeIcon = () => (
    <svg fill="#ffffff" viewBox="-20 8 190 190">
        <path
            d="M75.67 137.53C29.59 137.53 28.87 136.41 28.87 104.6C28.87 74.1802 29.18 73.4902 74.74 73.4902C120.3 73.4902 121.13 74.1302 121.13 105.59C121.13 137.05 121.74 137.53 75.67 137.53ZM63 90.3902L63.48 123.22L93.06 105.6L63 90.3902Z">
        </path>
    </svg>
);

const TiktokIcon = () => (
    <svg fill="#ffffff" viewBox="0 0 24 24"  width="18px" height="18px">
        <path
            d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z">        </path>
    </svg>
);

// Nav Menu items

const navigation = [
        { name: <GoHomeFill className="size-5 mt-0"/>,
            to: "/" },
        { name: 'Courses', to: "/Courses" },
        { name: 'Awards', to: "/Awards" },
        { name: 'Staff', to: "/Staff"},
        { name: 'Games', to: "/Games" },
        { name: 'Graduates', to: "/LoA"},
        { name: 'Guests', to: "/Guests" },
        { name: 'News', to: "/News" },
    ];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Header() {
    const location = useLocation();

    return (

        <Disclosure as="nav" className="bg-Game-Light dark:bg-Game-Dark">
            <div className="mx-auto w-screen px-2 lg:px-6">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-4 text-UofS-Red hover:text-UofS-Yellow-100">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-[40px] group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-[40px] group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">

                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            location.pathname === item.to
                                                ? 'bg-UofS-Red'
                                                : 'text-gray-800 dark:text-gray-300 hover:bg-UofS-Yellow-50 dark:hover:text-black', 'rounded-full px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/*Social Media Buttons*/}

                    <div className="absolute inset-y-0 right-0 flex items-center pr-[25px] sm:static sm:inset-auto sm:ml-6">
                        <div className="flex items-center gap-5 sm:gap-5">
                            <a
                                href="https://www.artstation.com/staffordshireuniversity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-150 shadow-md bg-Social-artstation"
                            >
                                <ArtstationIcon />
                            </a>
                            <a
                                href="https://itch.io/jam/staffs-cgd25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-150 shadow-md bg-Social-itch"
                            >
                                <ItchIcon />
                            </a>
                            <a
                                href="https://www.youtube.com/@StaffsGames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-150 shadow-md bg-Social-youtube"
                            >
                                <YoutubeIcon />
                            </a>
                            <a
                                href="https://www.tiktok.com/@staffsgames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-150 shadow-md bg-Social-tiktok"
                            >
                                <TiktokIcon />
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                                location.pathname === item.to
                                    ? 'bg-UofS-Red'
                                    : 'text-gray-800 dark:text-gray-300 hover:bg-UofS-Yellow-50 dark:hover:text-black', 'block rounded-full px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}


