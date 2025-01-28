"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io"
import { FiSearch } from "react-icons/fi";

import MobileMenu from "@components/mobile/header/MobileMenu";


export default function MobileHeader() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-left">

                <div className="">
                    <MobileMenu />
                </div>

                {/* Logo */}
                <Link href="/dashboard" className="flex items-center">
                    <Image
                        src="/icons/rrm-logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                
                <div className="flex flex-row space-x-4 space-y-4">
                    <FiSearch />
                    <IoMdNotificationsOutline />
                </div>

            </div>
        </header>
    );
}
