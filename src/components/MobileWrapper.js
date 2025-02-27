"use client";

import { useEffect, useState } from "react";

export default function MobileWrapper({ children }) {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        setIsMobileView(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isMobileView) {
        return (
            <div className="w-screen h-screen flex flex-col overflow-hidden">
                <div className="flex-grow overflow-y-scroll scrollbar-hide relative">{children}</div>
            </div>
        );
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[375px] h-[812px] bg-white shadow-lg rounded-lg border border-gray-300 relative flex flex-col overflow-hidden">
                <div className="flex-grow overflow-y-scroll scrollbar-hide relative">{children}</div> 
            </div>
        </div>
    );
}
