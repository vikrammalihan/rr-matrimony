"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftPopupMenu from '@components/desktop/header/LeftPopupMenu';
import RightPopupMenu from '@components/desktop/header/RightPopupMenu';
import MobileMenu from "@components/mobile/header/MobileMenu";

export default function DesktopHeader() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <LeftPopupMenu />
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/icons/RRM-logo2.png"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-800 hover:text-yellow-600">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-800 hover:text-yellow-600">
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="text-gray-800 hover:text-yellow-600"
                    >
                        Services
                    </Link>
                    <Link href="/contact" className="text-gray-800 hover:text-yellow-600">
                        Contact
                    </Link>
                    <RightPopupMenu />
                </nav>

                
            </div>
        </header>
    );
}
