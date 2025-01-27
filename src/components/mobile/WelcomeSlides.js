"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomeSlides({ onFinish }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter(); // Initialize the router

    const slides = [
        {
            image: "/images/slide1.png",
            title: "Welcome to Rawa Rajput Matrimony",
            description: "Connecting Rawa Rajput families with tradition and trust. Your journey to find the perfect life partner begins here.",
        },
        {
            image: "/images/slide2.png",
            title: "Matches Within Rawa Rajput Families",
            description: "Explore profiles from Rawa Rajput families, designed to align with your preferences and values.",
        },
        {
            image: "/images/slide3.png",
            title: "Tradition Meets Technology",
            description: "With advanced matchmaking and secure communication, we ensure a seamless experience rooted in Rawa Rajput values.",
        },
    ];

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            router.push("/index"); // Redirect to the home page
        }
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Slide Content */}
            <div className="flex-grow flex flex-col text-center justify-center p-6">
                
                <h1 className="text-2xl font-bold mt-4">
                    {slides[currentSlide].title}
                </h1>
                <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    width={200}
                    height={200}
                />
                <p className="text-gray-600 text-center mt-2">
                    {slides[currentSlide].description}
                </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center p-4 space-x-4">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? "bg-[#e31818]" : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>
            <div className="flex justify-between">
            <button
                onClick={() => router.push("/index")} // Redirect to the home page
                className="bg-[#e31818] text-white py-2 px-6 rounded m-4 self-center">
                    skip
            </button>
            
            <button
                onClick={handleNext}
                className="bg-[#e31818] text-white py-2 px-6 rounded m-4 self-center"
            >
                {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
            </button>
            </div>
        </div>
    );
}
