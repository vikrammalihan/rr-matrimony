"use client";

import ProfileCard from "./ProfileCard";

const youViewedProfiles = [
    {
        id: "1431251290",
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

export default function YouViewedProfiles() {
    return (
        <div className="space-y-4">
            {youViewedProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} tab={"YouViewedProfiles"}/>
            ))}
        </div>
    );
}
