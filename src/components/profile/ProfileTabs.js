"use client";

import { useState } from "react";
import { cn } from "@components/lib/utils";

const tabs = [
    { label: "Personal Info", key: "personal" },
    { label: "Family Details", key: "family" },
    { label: "Profession Info", key: "profession" },
    { label: "Contact Details", key: "contact" },
    { label: "Preferred Partner", key: "partner" },
];

export default function ProfileTabs({ setActiveTab }) {
    const [active, setActive] = useState("personal");

    return (
        <div className="relative w-full h-12 bg-slate-200 overflow-hidden ">
            {/* Scrollable Tabs Container */}
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide no-scrollbar py-2 whitespace-nowrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => {
                            setActive(tab.key);
                            setActiveTab(tab.key);
                        }}
                        className={cn(
                            "px-4 h-10 text-sm font-semibold border-b-2 transition-all bg-transparent hover:bg-red-600 hover:text-white",
                            active === tab.key ? "border-red-600 text-red-600" : "border-transparent text-gray-500"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
