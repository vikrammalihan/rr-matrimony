
"use client";

import { useState } from "react";
import ProfileSlider from "@components/profile/ProfileSlider";
import AccountMenu from "@components/account/AccountMenu";
import AccountHeader from "@components/account/AccountHeader";

import MobileFooter from "@components/mobile/footer/MobileFooter";

export default function ProfileDetails() {

    return (
        <div className="relative flex flex-col h-full ">

            {/* Content Section - Allows vertical scrolling */}
            <div className="flex-grow overflow-y-scroll overflow-hidden scrollbar-hide pb-24">
                <AccountHeader />
                
                <ProfileSlider />
                <AccountMenu />
                
            </div>

            {/* Fixed Bottom Navigation */}
            <MobileFooter />
        </div>
    );
}
