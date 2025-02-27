
"use client";

import { useState } from "react";
import ProfileHeader from "@components/profile/ProfileHeader";
import ProfileSlider from "@components/profile/ProfileSlider";
import ProfileTabs from "@components/profile/ProfileTabs";
import ProfileInfo from "@components/profile/ProfileInfo";
import FamilyInfo from "@components/profile/FamilyInfo";
import ProfessionInfo from "@components/profile/ProfessionalInfo";
import ContactInfo from "@components/profile/ContactInfo";
import PartnerInfo from "@components/profile/PartnerInfo";
import Pictures from "@components/profile/Pictures";
import MobileFooter from "@components/mobile/footer/MobileFooter";

export default function ProfileDetails() {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div className="relative flex flex-col h-full ">

            {/* Content Section - Allows vertical scrolling */}
            <div className="flex-grow overflow-y-scroll overflow-hidden scrollbar-hide pb-24">
                <ProfileHeader />
                <ProfileSlider />
                <ProfileTabs setActiveTab={setActiveTab} />
                {activeTab === "personal" && <ProfileInfo />}
                {activeTab === "family" && <FamilyInfo />}
                {activeTab === "profession" && <ProfessionInfo />}
                {activeTab === "contact" && <ContactInfo />}
                {activeTab === "partner" && <PartnerInfo />}
            </div>

            {/* Fixed Bottom Navigation */}
            <MobileFooter />
        </div>
    );
}
