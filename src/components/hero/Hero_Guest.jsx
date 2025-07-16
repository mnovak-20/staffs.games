import React  from 'react';
import BgImage from "../../Assets/images/lets_talk_games.png";


const HeroSUIcon = () => (
    <svg viewBox="0 0 283.46 283.46">
        <path class="st0" d="M113.8,217.97l2.8-32.08c25.1-7.94,50.56-20.86,70.84-37.71,24.01-19.93,54.02-65.34,23.78-92.49-25.03-22.49-64.5-8.46-77.26,20.4,25.73,6.89,51.29,14.52,75.96,24.58-2.82,9.98-8.67,19.27-15.81,26.72-30.55-11.58-61.96-21.34-94.27-26.76,1.67,1.88,4.51,2.58,6.69,3.92,5.64,3.5,11.19,8.25,12.99,14.94-11.52,43.14-17.98,87.78-16.56,132.59-10.36-1.2-20.68-.26-31.02.52l.5-35.95c2.04-33.93,7.66-67.37,16.09-100.21.57-2.26,4.79-15.22,4.58-16.03-.3-1.22-5.17-.89-6.46-.84-2.99.12-7.09.73-10.08,1.29-44.64,8.51-58.46,68.43-11.84,84.83l-2.63,31.21C20.65,207.09-4.07,168.48,8.2,126.57c9.07-30.99,36.19-53.06,68.19-56.91,8.83-1.06,17.69-.42,26.57-.33,4.7-10.24,10.45-20.09,18.07-28.45,50.89-55.78,145.99-19.76,131.7,59.3-6.63,36.66-32.52,63.39-62.03,83.74-23.01,15.88-49.37,28.32-76.88,34l-.02.05Z"/>
        <path class="st0" d="M283.46,188.56l-17.63-12.44c-10.27,34.45-12.14,71.93-5.54,107.34h23.17v-94.9Z"/>
        <path class="st0" d="M265.8,176.1l.02.02s0-.02,0-.04l-.03.02Z"/>
        <path class="st0" d="M242.68,150.37c3.38,1.98,6.98,3.69,10.36,5.68,10.43,6.15,20.56,12.69,30.42,19.6v-37.1c-8.71-5.53-17.61-10.78-26.71-15.69-2.86,7.16-6.34,14.07-10.38,20.63-.91,1.48-3.93,5.05-4.33,6.01-.37.87.33.68.64.87Z"/>
        <path class="st0" d="M165.82,283.46c-3.29-1.71-6.61-3.34-9.98-4.89-33.11-15.29-68.43-23.35-103.84-9.91-9.83,3.73-18.03,8.79-24.67,14.8h138.49Z"/>
    </svg>
);


export default function HeroGuest() {

    return (
        <section
            className="relative  w-full bg-cover bg-center overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]"
            style={{ backgroundImage: `url(${BgImage})` }}
        >

            {/* Top-left content */}
            <div className="absolute bottom-16 font-bebas tracking-widest text-9xl text-UofS-Yellow-100 z-10 flex flex-col items-start px-10 sm:px-14 md:px-18 lg:px-20 pt-16 sm:pt-24 lg:pt-26 max-w-[800px] scale-110">
                       Guest <br/> Lecturers

                   {/*<img*/}
                   {/*    src={UofSLogo}*/}
                   {/*     alt="University of Staffordshire"*/}
                   {/*     className="h-[50px] object-contain"*/}
                   {/*/>*/}
                </div>


            {/* Bottom Right Ribbon Logo */}
            <a
                href="https://www.artstation.com/staffordshireuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="fill-Game-Light dark:fill-UofS-Burgundy absolute bottom-0 right-0 transform sm:w-[200px] md:w-[240px] lg:w-[320px] mix-blend-normal opacity-100 pointer-events-none"
            >
                <HeroSUIcon />
            </a>


        </section>
    );
};