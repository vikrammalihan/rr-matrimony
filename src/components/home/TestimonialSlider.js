"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import { LucideArrowLeftCircle, LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        image: "https://placehold.co/200x200.png",
        name: "Jack Daniel",
        location: "New York",
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 2,
        image: "https://placehold.co/200x200.png",
        name: "Samantha Smith",
        location: "California",
        quote: "Finding the right match was never this easy! Highly recommend this platform for everyone looking for meaningful connections.",
    },
    {
        id: 3,
        image: "https://placehold.co/200x200.png",
        name: "Rahul Mehta",
        location: "Mumbai",
        quote: "A seamless experience with amazing features. I found my life partner through this service!",
    },
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Manual navigation
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <section className="bg-[#FFF5F5] py-10 text-center">
            <h2 className="text-2xl font-bold text-red-600">Trusted Brand</h2>
            <p className="text-gray-700">Trust by <span className="text-red-600 font-bold">1500+</span> Couples/Families</p>

            <div className="relative flex justify-center items-center mt-6">
                <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md">
                    <LucideArrowLeftCircle className="w-8 h-8 text-red-600" />
                </button>

                <Carousel className="w-full max-w-md">
                    <CarouselContent className="flex justify-center">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={testimonial.id}
                                className={`w-full transition-opacity duration-500 ${
                                    index === currentIndex ? "opacity-100" : "opacity-0 hidden"
                                }`}
                            >
                                <Card className="bg-white p-6 shadow-lg rounded-lg text-center">
                                    <div className="flex justify-center">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <FaQuoteLeft className="text-red-600 text-2xl mx-auto mt-3" />
                                    <CardContent className="mt-4">
                                        <p className="text-gray-700 text-sm">{testimonial.quote}</p>
                                        <h3 className="font-semibold mt-3">{testimonial.name}</h3>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md">
                    <LucideArrowRightCircle className="w-8 h-8 text-red-600" />
                </button>
            </div>

            <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md text-sm font-semibold">
                More Customer Reviews
            </button>
        </section>
    );
}
