"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@components/mobile/SplashScreen";
import WelcomeSlides from "@components/mobile/WelcomeSlides";

import Image from "next/image";

// default landing page of the app
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

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

  const handleSplashFinish = () => {
      setShowSplash(false);
      setShowSlides(true);
  };

  const handleSlidesFinish = () => {
      setShowSlides(false);
  };

  

  return (

    <>
    {isMobile && showSplash && <SplashScreen onFinish={handleSplashFinish} />}
    {isMobile && showSlides && <WelcomeSlides onFinish={handleSlidesFinish} />}
      
    </>
  );

}
