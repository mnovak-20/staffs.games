import React from 'react'

import Button from "./hooks/Button.jsx";

const StickyHeader = () => {
    return (

        <div className="w-screen min-h-[30px] h-[40px] z-[1000] flex items-center shadow-md bg-UofS-Teal-100">
            <div className="w-full mx-auto flex items-center justify-between px-[30px] sm:px-[50px]">
    <span className="text-white text-sm font-light sm:text-base">
      Interested in Joining Us?
    </span>
                <Button
                    id="how-to-apply"
                    title="How to Apply"
                    containerClass=" bg-UofS-Yellow-100 hover:bg-UofS-Yellow-50 flex items-center font-normal justify-center gap-1 rounded-full px-4 py-1 text-xs sm:py-1.5"
                    href="https://www.staffs.ac.uk/courses/undergraduate/how-to-apply"
                    target="_blank"
                />
            </div>
        </div>





    )
}
export default StickyHeader
