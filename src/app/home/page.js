import MobileHeader from "@components/mobile/header/MobileHeader";
import MobileFooter from "@components/mobile/footer/MobileFooter";

import HeroSection from "@components/home/HeroSection";
import TrustedBrand from "@components/home/TrustedBrand";
import TestimonialSlider from "@components/home/TestimonialSlider";
import WhyChooseUs from "@components/home/WhyChooseUs";
import WelcomeSection from "@components/home/WelcomeSection";
import StatsSection from "@components/home/StatsSection";
import HowItWorks from "@components/home/HowItWorks";
import RecentCouples from "@components/home/RecentCouples";


import BlogSection from "@components/home/BlogSection";

// Home page for non-logged-in users
export default function Home() {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden relative">
            <MobileHeader />
            <div className="flex-grow overflow-y-scroll scrollbar-hide pb-16">
                <HeroSection />
                <TrustedBrand />
                <TestimonialSlider />
                <WhyChooseUs />
                <WelcomeSection />
                <StatsSection />
                <HowItWorks />
                <RecentCouples />
                <BlogSection />
            </div>
            <MobileFooter />
        </div>
    );
}
