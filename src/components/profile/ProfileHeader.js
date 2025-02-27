
import { ChevronLeft } from 'lucide-react';
import { IoIosShareAlt } from "react-icons/io";

export default function ProfileHeader() {
    return (
        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between bg-gray-200 bg-opacity-75 z-20">
            <ChevronLeft />
            <h2 className="text-lg font-bold text-red-600 w-full text-center">Krisha Suryan</h2>
            <IoIosShareAlt />
        </div>
    );
}
