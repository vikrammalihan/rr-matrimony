import Image from 'next/image';

export default function TopMenu() {
    return (
        <div className="hom-top">
            <div className="container mx-auto">
                <div className="row flex flex-wrap">
                    <div className="hom-nav flex flex-wrap items-center justify-between">
                        
                        {/* LOGO */}
                        <div className="logo flex items-center">
                            <span className="menu desk-menu flex flex-col">
                                <i className="block w-6 h-1 bg-black mb-1" />
                                <i className="block w-6 h-1 bg-black mb-1" />
                                <i className="block w-6 h-1 bg-black" />
                            </span>
                            <a href="#" className="logo-brand">
                                <Image src="/icons/RRM-logo2.png" alt="logo" loading="lazy" className="ic-logo" width={100} height={50} />
                            </a>
                        </div>
                        
                        {/* EXPLORE MENU */}
                        <div className="bl">
                            <ul className="flex space-x-4">
                                <li className="smenu-pare relative group">
                                    <span className="smenu cursor-pointer">Explore</span>
                                    <div className="smenu-open smenu-box absolute bg-white shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 ease-in-out">
                                        <div className="container mx-auto">
                                            <div className="row flex flex-wrap">
                                                <h4 className="tit text-lg font-bold mb-2">Explore category</h4>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <div className="menu-box menu-box-2 p-4 border rounded">
                                                            <h5 className="font-semibold">Browse profiles <span className="text-sm text-gray-500">1200+ Verified profiles</span></h5>
                                                            <span className="explor-cta text-blue-500">More details</span>
                                                            <a href="all-profiles.html" className="fclick block w-full h-full absolute inset-0" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="menu-box menu-box-1 p-4 border rounded">
                                                            <h5 className="font-semibold">Wedding page <span className="text-sm text-gray-500">Make reservation</span></h5>
                                                            <span className="explor-cta text-blue-500">More details</span>
                                                            <a href="wedding.html" className="fclick block w-full h-full absolute inset-0" />
                                                        </div>
                                                    </li>
                                                    {/* Add more dropdown items as needed */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* Additional menu items */}
                                <li className="smenu-pare relative group">
                                    <span className="smenu cursor-pointer">All pages</span>
                                    <div className="smenu-open smenu-multi absolute bg-white shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 ease-in-out">
                                        <ul className="space-y-2">
                                            <li><a href="all-profiles.html" className="text-blue-500">All profiles</a></li>
                                            <li><a href="profile-details.html" className="text-blue-500">Profile details</a></li>
                                            <li><a href="services.html" className="text-blue-500">Services</a></li>
                                            <li><a href="plans.html" className="text-blue-500">Plans</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
