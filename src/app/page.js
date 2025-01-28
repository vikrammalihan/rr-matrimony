"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                router.replace("/dashboard");
            }, 200); // Delay to ensure proper rendering
        }
    }, [router]);

    return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
}
