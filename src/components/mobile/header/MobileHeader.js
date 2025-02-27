"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell } from 'lucide-react';

export default function MobileHeader() {
    return (
        <header className="bg-[#E8E8E8] shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-left">

                {/* Logo */}
                <Link href="/dashboard" className="flex items-center">
                    <Image
                        src="/icons/rrm-logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                </Link>

                
                <div className="flex items-center">
                <Bell />
                </div>

            </div>
        </header>
    );
}
