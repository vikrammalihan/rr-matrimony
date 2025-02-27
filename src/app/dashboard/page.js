import MobileHeader from "@components/mobile/header/MobileHeader";
import MobileFooter from "@components/mobile/footer/MobileFooter";

import ProfileCard from "@components/dashboard/ProfileCard";
import HorizontalMenu from "@components/dashboard/HorizontalMenu";

import MatchesSection from "@components/dashboard/MatchesSection";
import CompletionReminder from "@components/dashboard/CompletionReminder";
import DiscoverMatches from "@components/dashboard/DiscoverMatches";
import LookingforYou from "@components/dashboard/LookingforYou";

export default function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden relative">
            <MobileHeader />
            <div className="flex-grow overflow-y-scroll scrollbar-hide pb-16">
                <ProfileCard />
                <HorizontalMenu />
                <MatchesSection />
                <DiscoverMatches />
                <CompletionReminder />

                <LookingforYou />
                <div className="h-12"></div>
            </div>
            <MobileFooter />
        </div>
    );
}
