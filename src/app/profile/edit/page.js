
"use client";

import { useState } from "react";
import EditProfileHeader from "@components/editProfile/EditProfileHeader";
import EditProfileTabs from "@components/editProfile/EditProfileTabs";

import EditPersonalInfo from "@components/editProfile/EditPersonalInfo";
import EditFamilyDetails from "@components/editProfile/EditFamilyDetails";
import EditProfessionalInfo from "@components/editProfile/EditProfessionalInfo";
import EditContactDetails from "@components/editProfile/EditContactDetails";
import PreferredPartnerDetails from "@components/editProfile/PreferredPartnerDetails";
import EditMyPictures from "@components/editProfile/EditMyPictures";
import MobileFooter from "@components/mobile/footer/MobileFooter";

export default function EditProfile() {
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div className="relative flex flex-col h-full ">

            {/* Content Section - Allows vertical scrolling */}
            <div className="flex-grow overflow-y-scroll overflow-hidden scrollbar-hide pb-24">
                <EditProfileHeader />
                
                <EditProfileTabs setActiveTab={setActiveTab} />
                {activeTab === "personal" && <EditPersonalInfo />}
                {activeTab === "family" && <EditFamilyDetails />}
                {activeTab === "profession" && <EditProfessionalInfo />}
                {activeTab === "contact" && <EditContactDetails />}
                {activeTab === "partner" && <PreferredPartnerDetails />}
                {activeTab === "pictures" && <EditMyPictures />}
            </div>

            
        </div>
    );
}
