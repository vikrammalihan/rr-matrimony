import Image from "next/image"

// MOBILE USER PROFILE MENU POPUP
export default function MobileProfileMenu() {
    return (
        <>
            <div className="mob-me-all dashbord_menu">
                <div className="mob-me-clo"><Image src="images/icon/close.svg" alt="" /></div>
                <div className="mv-bus">
                    <div className="head-pro">
                        <Image src="images/profiles/1.jpg" alt="" loading="lazy" className="w-20 h-20 rounded-full" />
                        <b className="block">user profile</b>
                        <h4 className="text-lg font-semibold">Ashley emyy</h4>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li><a href="login.html" className="text-blue-500">Login</a></li>
                        <li><a href="sign-up.html" className="text-blue-500">Sign-up</a></li>
                        <li><a href="plans.html" className="text-blue-500">Pricing plans</a></li>
                        <li><a href="all-profiles.html" className="text-blue-500">Browse profiles</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}