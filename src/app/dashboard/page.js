"use client";

export const dynamic = "force-dynamic"; // Ensures this page is always rendered on the server

import { useEffect, useState } from "react";

import SplashScreen from "@components/mobile/SplashScreen";
import WelcomeSlides from "@components/mobile/WelcomeSlides";

import BannerSearch from "@components/home/BannerSearch";
import BannerSlider from "@components/home/BannerSlider";

import DesktopHeader from "@components/desktop/header/DesktopHeader";
import DesktopFooter from "@components/desktop/footer/DesktopFooter";

import MobileFooter from "@components/mobile/footer/MobileFooter";
import MobileHeader from "@components/mobile/header/MobileHeader";


export default function Dashboard() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [showSlides, setShowSlides] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    }, []);

    const handleSplashFinish = () => {
        setShowSplash(false);
        setShowSlides(true);
    };

    const handleSlidesFinish = () => {
        setShowSlides(false);
    };

    if (!isClient) return null; // Prevents SSR-related errors

    if (isMobile) {
        if (showSplash) {
            return <SplashScreen onFinish={handleSplashFinish} />;
        }
        if (showSlides) {
            return <WelcomeSlides onFinish={handleSlidesFinish} />;
        }
    }

    return (
        <>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
            <main className="flex-grow pb-20">
                <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
                <p className="text-gray-600 mt-4">This is the main content of your application.</p>
                <BannerSearch />
                <BannerSlider />
            </main>
            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </>
    );
}


