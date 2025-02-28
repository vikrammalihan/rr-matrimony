"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Users, Briefcase, DollarSign, Bookmark, ThumbsUp } from "lucide-react";

export default function ProfileCard({ profile, tab }) {
    return (

        <div className="bg-white rounded-lg shadow-md relative cursor-pointer hover:shadow-lg transition">
            {/* Profile Image Section */}
            <Link href={`/profile/${profile.id}`} className="block">
                <div className="relative h-48 flex justify-center items-center rounded-t-lg">
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        layout="fill"
                        objectFit="cover-top"
                        className="rounded-t-lg object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">Premium</span>
                </div>
            </Link>

            { /* Profile Information */}
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold">{profile.name} <span className="text-gray-400 text-xs">{profile.id}</span></h3>
                        <p className="text-sm text-gray-600">{profile.profession}</p>
                    </div>
                    <ThumbsUp className="w-5 h-5 text-gray-500 cursor-pointer" />
                    <Bookmark className={`w-5 h-5 cursor-pointer ${profile.isBookmarked ? 'text-yellow-500' : 'text-gray-500 '}`} />
                </div>

                {/* Profile Details */}
                <div className="flex space-y-2 text-sm text-gray-700">
                    <div className="w-96 mt-3 space-y-2 text-sm text-gray-700">
                        <p className="flex items-center"><Users className="w-4 h-4 mr-2" /> {profile.age} • {profile.height}</p>
                        <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {profile.location}</p>
                        <p className="flex items-center"><Heart className="w-4 h-4 mr-2" /> {profile.manglikStatus}</p>
                        <p className="flex items-center"><DollarSign className="w-4 h-4 mr-2" /> {profile.salary}</p>
                    </div>
                    

                    {/* Actions */}
                    <div className="mt-4 flex flex-col justify-between items-center">
                        <button className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 transition">
                            Send Interest
                        </button>
                        <div>
                        {tab === "shortlisted" &&
                            <p className="flex items-center pt-2 text-xs">Saved on: {profile.savedon}</p>
                        }
                        {tab === "YouViewedProfiles" &&
                            <p className="flex items-center pt-2 text-xs">You Viewed on: {profile.viewedDate}</p>
                        }
                        {tab === "ViewedYouProfiles" &&
                            <p className="flex items-center pt-2 text-xs">Viewed You on: {profile.viewedDate}</p>
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
