import ProfileFilters from "@components/profile/ProfileFilters";
import ProfileCard from "@components/profile/ProfileCard";
import MobileHeader from "@components/mobile/header/MobileHeader";
import MobileFooter from "@components/mobile/footer/MobileFooter";
import Link from "next/link";

const profiles = [
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
        profession: "Lawyer",
        age: "32 Yrs",
        height: "6 ft",
        location: "Pune - India",
        manglikStatus: "Manglik",
        salary: "₹ 20-25 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251295",
        name: "Priya Desai",
        profession: "Artist",
        age: "29 Yrs",
        height: "5 ft 5 inch",
        location: "Ahmedabad - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 5-7 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251296",
        name: "Karan Mehta",
        profession: "Businessman",
        age: "35 Yrs",
        height: "5 ft 9 inch",
        location: "Surat - India",
        manglikStatus: "Manglik",
        salary: "₹ 25-30 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251297",
        name: "Sanya Kapoor",
        profession: "Fashion Designer",
        age: "26 Yrs",
        height: "5 ft 7 inch",
        location: "Jaipur - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 10-12 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251298",
        name: "Arjun Rao",
        profession: "Pilot",
        age: "31 Yrs",
        height: "6 ft 1 inch",
        location: "Hyderabad - India",
        manglikStatus: "Manglik",
        salary: "₹ 18-20 lacs",
        image: "https://placehold.co/400x300.png",
    },
    {
        id: "1431251299",
        name: "Riya Nair",
        profession: "Journalist",
        age: "27 Yrs",
        height: "5 ft 2 inch",
        location: "Cochin - India",
        manglikStatus: "Non Manglik",
        salary: "₹ 7-9 lacs",
        image: "https://placehold.co/400x300.png",
    }

];

export default function ProfileList() {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden relative">
            <MobileHeader />
            <div className="flex-grow overflow-y-scroll scrollbar-hide pb-16">
                {/* Filters */}
                <div className="p-4">
                    <ProfileFilters />
                </div>

                {/* Profile List */}
                <div className="p-4 space-y-4">
                    {profiles.map((profile, index) => (
                        <Link href={`/profile/${profile.id}`} key={index}>
                            <ProfileCard key={profile.id} profile={profile} />
                        </Link>
                    ))}
                </div>
            </div>
            {/* Bottom Navigation */}
            <MobileFooter />
        </div>
    );
}
