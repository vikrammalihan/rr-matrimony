"use client";

import { useState, useEffect } from "react";
import { LucideArrowLeftCircle, LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";

const couples = [
    {
        id: 1,
        image: "https://placehold.co/400x250.png",
        name: "Dany & July",
        location: "New York",
    },
    {
        id: 2,
        image: "https://placehold.co/400x250.png",
        name: "Michael & Sarah",
        location: "California",
    },
    {
        id: 3,
        image: "https://placehold.co/400x250.png",
        name: "Raj & Simran",
        location: "Mumbai",
    },
];

export default function RecentCouples() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % couples.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Navigation Functions
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? couples.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % couples.length);
    };

    return (
        <section className="bg-[#FFF5F5] py-10 text-center">
            <h2 className="text-2xl font-bold text-red-600 uppercase">Trusted Brand</h2>
            <h3 className="text-xl font-bold text-red-800">Recent Couples</h3>

            <div className="relative flex justify-center items-center mt-6">
                {/* Left Arrow */}
                <button onClick={prevSlide} className="absolute left-4 z-10 p-2 bg-white rounded-full shadow-md">
                    <LucideArrowLeftCircle className="w-8 h-8 text-red-600" />
                </button>

                {/* Image Carousel */}
                <div className="relative w-[90%] max-w-md">
                    <Image
                        src={couples[currentIndex].image}
                        alt={couples[currentIndex].name}
                        width={400}
                        height={250}
                        className="rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
                    />
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4 px-4 rounded-b-lg">
                        <h3 className="text-lg font-bold">{couples[currentIndex].name}</h3>
                        <p className="text-sm">{couples[currentIndex].location}</p>
                    </div>
                </div>

                {/* Right Arrow */}
                <button onClick={nextSlide} className="absolute right-4 z-10 p-2 bg-white rounded-full shadow-md">
                    <LucideArrowRightCircle className="w-8 h-8 text-red-600" />
                </button>
            </div>

            {/* View More Button */}
            <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md text-sm font-semibold">
                View More
            </button>
        </section>
    );
}
