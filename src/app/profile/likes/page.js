"use client";

import { useState } from "react";
import MobileFooter from "@components/mobile/footer/MobileFooter";
import Header from "../Header";

import LikesMe from "./LikesMe";
import MyLikes from "./MyLikes";

const tabs = [
    { label: "Likes Me", key: "likes" },
    { label: "Me Liked", key: "liked" },
];


export default function InterestRequest() {
    const [activeTab, setActiveTab] = useState("likes");

    return (
        <div className="relative w-full h-full flex flex-col overflow-hidden">
            {/* Fixed Header */}
            <Header heading={"Likes"}/>

            {/* Fixed Tabs Section */}
            <div className="bg-white shadow-md z-10">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap h-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={` h-12 text-sm font-semibold hover:bg-transparent hover:text-red-500 ${
                                activeTab === tab.key ? "text-red-500 bg-transparent border-b-4 border-red-500" : "bg-transparent text-gray-600"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-scroll scrollbar-hide pb-16 p-3">
                {activeTab === "likes" && <LikesMe />}
                {activeTab === "liked" && <MyLikes />}
            </div>

            

            {/* Fixed Bottom Navigation */}
            <MobileFooter />
        </div>
    );
}
