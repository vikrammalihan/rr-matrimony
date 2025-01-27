import { FaHome, FaPlusCircle, FaUsers, FaFileAlt, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

export default function MobileFooter() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#e31818] p-3 text-white z-50 w-full">
            <div className="flex justify-around items-center">
                {/* Home Icon */}
                <Link href="/index">
                    <div className="flex flex-col items-center">
                        <FaHome size={20} className="mb-1" />
                        <p className="text-xs">Home</p>
                    </div>
                </Link>

                {/* Quotations Icon */}
                <Link href="/matches">
                    <div className="flex flex-col items-center">
                        <FaFileAlt size={20} className="mb-1" />
                        <p className="text-xs">Matches</p>
                    </div>
                </Link>

                {/* Add Icon */}
                <Link href="/search">
                    <div className="bg-white rounded-full p-2 -mt-10">
                        <FiSearch size={40} className="text-[#e31818]" />
                    </div>
                </Link>

                {/* Customers Icon */}
                <Link href="/search">
                    <div className="flex flex-col items-center">
                        <CiMail size={20} className="mb-1" />
                        <p className="text-xs">Mail box</p>
                    </div>
                </Link>

                {/* Account Icon */}
                <Link href="/profile">
                    <div className="flex flex-col items-center">
                        <FaUser size={20} className="mb-1" />
                        <p className="text-xs">Profile</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
