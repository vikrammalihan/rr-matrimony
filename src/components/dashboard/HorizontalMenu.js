"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Eye, Users, Heart, Mail, MapPin, CheckCircle, XCircle, Ban, ThumbsUp, ThumbsDown } from "lucide-react";

const iconMapping = {
    Eye, Users, Heart, Mail, MapPin, CheckCircle, XCircle, Ban, ThumbsUp, ThumbsDown,
};

const menuItems = [
    { icon: "Heart", label: "Saved", path: "/profile/shortlisted" },
    { icon: "Eye", label: "Viewed You", path: "/profile/viewedyou" },
    { icon: "Users", label: "Viewed", path: "/profile/viewed" },
    { icon: "CheckCircle", label: "Accepted", path: "/profile/accepted" },
    { icon: "XCircle", label: "Rejected", path: "/profile/rejected" },
    { icon: "Ban", label: "Blocked", path: "/profile/blocked" },
    { icon: "Mail", label: "Interest Sent", path: "/profile/interestsent" },
    { icon: "Mail", label: "Interest Received", path: "/profile/interestreceived" },
    { icon: "MapPin", label: "Address View", path: "/profile/addressview" },
    { icon: "ThumbsUp", label: "Liked You", path: "/profile/likedyou" },
    { icon: "ThumbsDown", label: "You Liked", path: "/profile/youliked" },
];

export default function HorizontalMenu() {
    const scrollRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setHasScrolled(scrollRef.current.scrollLeft > 0);
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="relative w-full mt-4">
            {/* Scrollable Container with ID to Detect Scrolling */}
            <div
                id="horizontal-menu"
                ref={scrollRef}
                className={`flex overflow-x-auto scrollbar-hide py-2 no-scrollbar w-full transition-all duration-100 ${hasScrolled ? 'ml-0' : 'ml-3'}`}
            >
                {menuItems.map((item, index) => {
                    const IconComponent = iconMapping[item.icon] || Eye;
                    return (
                        <Link key={index} href={item.path}>
                            <div className="flex flex-col justify-center items-center w-[70px] h-[85px] bg-gray-200 rounded-lg shadow-md mx-1">
                                <IconComponent className="w-6 h-6 text-gray-700" />
                                <p className="text-center text-xs font-medium leading-tight pt-1">{item.label}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
