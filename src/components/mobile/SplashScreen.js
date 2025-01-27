"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ onFinish }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onFinish(); // Notify when the splash screen finishes
        }, 3000); // Splash screen duration: 3 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!visible) return null; // Hide splash screen after timeout

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#762322] z-50">
            <Image
                src="/icons/rrm-logo.png" // Replace with your logo
                alt="App Logo"
                width={150}
                height={150}
            />
        </div>
    );
}
