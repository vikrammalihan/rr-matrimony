'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BannerSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/assets/banners/Rawa-rajput-matrimony-banner-1.png",
        "/assets/banners/Rawa-rajput-matrimony-banner-2.png",
        "/assets/banners/Rawa-rajput-matrimony-banner-3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 8000); // Auto-slide every 8 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hom-ban-sli">
            {/* Slider */}
            <div
                className="ban-sli"
                style={{
                    transform: `translateX(-${currentSlide * 100}vw)`,
                }}
            >
                {images.map((src, index) => (
                    <div key={index} className="w-screen flex-shrink-0 h-screen">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            loading="lazy"
                            width={1920}
                            height={1080}
                            className="image"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                    onClick={() =>
                        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                    }
                    className="slider-nav-btn left"
                >
                    &#9664;
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                    className="slider-nav-btn right"
                >
                    &#9654;
                </button>
            </div>

            {/* Dots for Navigation */}
            <div className="slider-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`slider-dots button ${currentSlide === index ? 'active' : ''}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}
