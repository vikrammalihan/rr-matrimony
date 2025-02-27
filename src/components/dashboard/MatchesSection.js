"use client";

import Link from "next/link";
import Image from "next/image";

const matches = [
    { name: "Jenny Verma", age: "26 Yrs, 5 ft 5 inch", location: "New Delhi, India", img: "https://placehold.co/200x150.png" },
    { name: "Amit Sharma", age: "28 Yrs, 5 ft 9 inch", location: "Mumbai, India", img: "https://placehold.co/200x150.png" },
    { name: "Sneha Kapoor", age: "25 Yrs, 5 ft 3 inch", location: "Pune, India", img: "https://placehold.co/200x150.png" },
    { name: "Rahul Mehra", age: "30 Yrs, 6 ft 0 inch", location: "Bangalore, India", img: "https://placehold.co/200x150.png" },
    { name: "Priya Das", age: "27 Yrs, 5 ft 6 inch", location: "Hyderabad, India", img: "https://placehold.co/200x150.png" },
];

export default function MatchesSection() {
    return (
        <div className="mt-6">
            {/* New Match Section */}
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">New Match</h3>
                <Link href="/matches" className="text-red-600 text-sm font-semibold">See all</Link>
            </div>

            {/* Scrollable Matches List */}
            <div className="flex space-x-3 mt-4 overflow-x-auto scrollbar-hide py-2 flex-nowrap">
                {matches.map((match, index) => (
                    <Link key={index} href="/profile/[id]" as={`/profile/${index}`}>
                        <div key={index} className="bg-gray-300 min-w-[12rem] rounded-md p-2 shadow-md">
                            <Image
                                src={match.img}
                                alt={match.name}
                                width={200}
                                height={200}
                                className="w-full h-32 object-cover rounded-md"
                            />
                            <p className="text-sm font-bold">{match.name}</p>
                            <p className="text-xs text-gray-500">{match.age}</p>
                            <p className="text-xs text-gray-500">{match.location}</p>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}