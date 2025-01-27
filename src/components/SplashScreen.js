import { useState, useEffect } from "react";
import Image from "next/image";

const SplashScreen = ({ onLoaded }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoaded(); // Signal when the splash screen should be hidden
        }, 2000); // 2-second delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, [onLoaded]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#762322]">
            <div className="flex flex-col items-center">
                <Image src="/icons/rrm-logo.png" alt="Splash Screen" width={120} height={60} />
                <div className="font-bold text-gray-800 mt-4">Loading...</div>
                
                <div className="w-10 mt-4 h-10 border-t-2 border-b-2 border-red-500 rounded-full animate-spin">
                    {/* Spinner */}
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
                Rawa Rajput Matrimony App
            </div>
        </div>
    );
};

export default SplashScreen;
