"use client";

import ProfileCard from "./ProfileCard";

const shortlistedProfiles = [
    {
        id: "1431251289",
        name: "Krisha Suryan",
        profession: "Software Professional Graduate",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        image: "https://placehold.co/400x300.png",
        savedon: "20 Feb 2025, 10:30 PM",
    },
    {
        id: "1431251290",
        name: "Aarav Patel",
        profession: "Doctor",
        age: "30 Yrs",
        height: "5 ft 10 inch",
        location: "Mumbai - India",
        manglikStatus: "Manglik",
        salary: "₹ 15-20 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251291",
        name: "Meera Sharma",
        profession: "Architect",
        age: "28 Yrs",
        height: "5 ft 6 inch",
        location: "Bangalore - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 12-15 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251292",
        name: "Rohan Verma",
        profession: "Engineer",
        age: "27 Yrs",
        height: "5 ft 8 inch",
        location: "Chennai - India",
        manglikStatus: "Manglik",
        salary: "₹ 8-10 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251293",
        name: "Ananya Singh",
        profession: "Teacher",
        age: "25 Yrs",
        height: "5 ft 4 inch",
        location: "Kolkata - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 6-8 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251294",
        name: "Vikram Joshi",
        profession: "Software Professional Graduate",
        age: "26 Yrs",
        height: "5 ft 3 inch",
        location: "New Delhi - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251295",
        name: "Aarav Patel",
        profession: "Doctor",
        age: "30 Yrs",
        height: "5 ft 10 inch",
        location: "Mumbai - India",
        manglikStatus: "Manglik",
        salary: "₹ 15-20 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251296",
        name: "Meera Sharma",
        profession: "Architect",
        age: "28 Yrs",
        height: "5 ft 6 inch",
        location: "Bangalore - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 12-15 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251297",
        name: "Rohan Verma",
        profession: "Engineer",
        age: "27 Yrs",
        height: "5 ft 8 inch",
        location: "Chennai - India",
        manglikStatus: "Manglik",
        salary: "₹ 8-10 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251298",
        name: "Ananya Singh",
        profession: "Teacher",
        age: "25 Yrs",
        height: "5 ft 4 inch",
        location: "Kolkata - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 6-8 lacs",
        image: "https://placehold.co/400x300.png",
    },
];

export default function ShortlistedProfiles() {
    return (
        <div className="space-y-4">
            {shortlistedProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile}  tab={"shortlisted"} />
            ))}
        </div>
    );
}
