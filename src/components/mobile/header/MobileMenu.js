"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io";

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white focus:outline-none bg-[#e31818]"
            >
                <IoMdMenu />
            </button>

            {/* Mobile Menu Popup */}

            <div className={`fixed top-0 right-0 h-screen w-3/4 max-w-md bg-white shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h4 className="text-lg font-bold">Explore Menu</h4>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white focus:outline-none bg-[#e31818]"
                    >
                        <IoIosCloseCircleOutline size={24} />
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold flex items-center">
                            <i className="fa fa-globe mr-2" aria-hidden="true"></i>{" "}
                            Explore Category
                        </h4>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/all-profiles"
                                    className="text-gray-700"
                                >
                                    Browse Profiles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/wedding"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Wedding Page
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-700 "
                                >
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/plans"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Join Now
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* All Pages */}
                    <div>
                        <h4 className="text-lg font-semibold flex items-center">
                            <i className="fa fa-align-center mr-2" aria-hidden="true"></i>{" "}
                            All Pages
                        </h4>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link
                                    href="/all-profiles"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    All Profiles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile-details"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Profile Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/wedding"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Wedding
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/plans"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Pricing Plans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-700 hover:text-yellow-600"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Team */}
                    <div>
                        <h4 className="text-lg font-semibold">Support Team</h4>
                        <div className="flex items-center mt-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <Image
                                    src="/assets/profiles/1.jpg"
                                    alt="Support"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h5 className="font-semibold">Vikram Malihan</h5>
                                <span className="text-sm text-gray-600">
                                    Senior personal advisor
                                </span>
                                <Link
                                    href="/enquiry"
                                    className="block mt-2 bg-[#e31818] text-white py-1 px-3 rounded text-sm"
                                >
                                    Ask your doubts
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-gray-900">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}
