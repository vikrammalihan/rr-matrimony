"use client";

import ProfileCard from "./ProfileCard";

const viewedYouProfiles = [
    {
        id: "1431251291",
        name: "Krisha Suryan",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        viewedDate: "20 Feb 2025, 10:30 PM",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251292",
        name: "Krisha Suryan",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        viewedDate: "20 Feb 2025, 10:30 PM",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251293",
        name: "Krisha Suryan",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        viewedDate: "20 Feb 2025, 10:30 PM",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251294",
        name: "Krisha Suryan",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        viewedDate: "20 Feb 2025, 10:30 PM",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251295",
        name: "Krisha Suryan",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        viewedDate: "20 Feb 2025, 10:30 PM",
        image: "https://placehold.co/400x300.png",
    },
];

export default function ViewedYouProfiles() {
    return (
        <div className="space-y-4">
            {viewedYouProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} tab={"ViewedYouProfiles"} />
            ))}
        </div>
    );
}
