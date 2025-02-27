import { FaHome, FaPlusCircle, FaUsers, FaFileAlt, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

export default function MobileFooter() {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-[#e31818] p-3 text-white z-50 shadow-sm">
            <div className="flex justify-around items-center">
                <Link href="/dashboard">
                    <div className="flex flex-col items-center">
                        <FaHome size={20} className="mb-1" />
                        <p className="text-xs">Home</p>
                    </div>
                </Link>

                <Link href="/matches">
                    <div className="flex flex-col items-center">
                        <FaFileAlt size={20} className="mb-1" />
                        <p className="text-xs">Saved</p>
                    </div>
                </Link>

                <Link href="/search">
                    <div className="bg-white rounded-full p-2 -mt-10">
                        <FiSearch size={40} className="text-[#e31818]" />
                    </div>
                </Link>

                <Link href="/connections">
                    <div className="flex flex-col items-center">
                        <CiMail size={20} className="mb-1" />
                        <p className="text-xs">Connections</p>
                    </div>
                </Link>

                <Link href="/profile">
                    <div className="flex flex-col items-center">
                        <FaUser size={20} className="mb-1" />
                        <p className="text-xs">Account</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
