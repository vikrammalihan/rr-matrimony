"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import SplashScreen from "@components/mobile/SplashScreen";
import WelcomeSlides from "@components/mobile/WelcomeSlides";


export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showSlides, setShowSlides] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);

  // Redirect to dashboard on desktop
  useEffect(() => {
    if (isClient && !isMobile) {
      router.replace("/dashboard");
    }
  }, [isClient, isMobile, router]);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setShowSlides(true);
  };

  const handleSlidesFinish = () => {
    setShowSlides(false);
    //router.replace("/dashboard");
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


  return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
}
