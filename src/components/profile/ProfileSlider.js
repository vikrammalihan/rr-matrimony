"use client";

import { useState, useEffect } from "react";
import { Heart, Bookmark } from 'lucide-react';
import { IoIosShareAlt } from "react-icons/io";
import Image from "next/image";

const images = [
    "https://res.cloudinary.com/dnevbbzpx/image/upload/v1736919331/samples/man-portrait.jpg",
    "https://res.cloudinary.com/dnevbbzpx/image/upload/v1736919331/samples/outdoor-woman.jpg",
    "https://res.cloudinary.com/dnevbbzpx/image/upload/v1736919331/samples/chair-and-coffee-table.jpg",
];

export default function ProfileSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeStart, setSwipeStart] = useState(null);

    // Auto-scroll every 5 sec (5*1000 ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]); // Dependency added to ensure auto-scroll works

    // Handle swipe gestures
    const handleTouchStart = (e) => {
        setSwipeStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!swipeStart) return;
        const diff = swipeStart - e.touches[0].clientX;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
        setSwipeStart(null);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div 
            className="relative w-full h-96 z-10 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <Image
                src={images[currentIndex]}
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className=" transition-transform duration-500 ease-in-out"
            />
            
            {/* Horizontal Progress Bars */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 w-1/4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 flex-1 transition-all duration-300 ${
                            currentIndex === index ? "bg-red-600 w-full" : "bg-gray-300 w-3/4"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
            <div className="absolute flex flex-col right-2 bottom-2 transform -translate-y-1/2  space-y-4">
                <Heart />
                <Bookmark />
                <IoIosShareAlt />
            </div>
        </div>
    );
}
