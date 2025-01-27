"use client";

import { useEffect, useState } from "react";

import BannerSearch from '@components/home/BannerSearch';
import BannerSlider from '@components/home/BannerSlider';


import MobileFooter from '@components/mobile/footer/MobileFooter';  
import MobileHeader from '@components/mobile/header/MobileHeader';
import SplashScreen from '@components/mobile/SplashScreen';
import WelcomeSlides from '@components/mobile/WelcomeSlides';
import DesktopFooter from '@components/desktop/footer/DesktopFooter';
import DesktopHeader from '@components/desktop/header/DesktopHeader';

export default function HomePage() {
    const [isMobile, setIsMobile] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [showSlides, setShowSlides] = useState(false);

    // Check for screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile view for <768px
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}

            {/* Main Content */}
            <main className="flex-grow pb-20"> {/* Add `pb-20` to create space for MobileFooter */}
                <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
                <p className="text-gray-600 mt-4">
                    This is the main content of your application.
                </p>
                <BannerSearch />
                <BannerSlider />
            </main>

            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </>
    );
}