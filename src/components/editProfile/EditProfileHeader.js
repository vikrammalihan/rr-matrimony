
import { ChevronLeft } from 'lucide-react';
import { IoIosShareAlt } from "react-icons/io";

export default function EditProfileHeader() {
    return (
        <div className="relative top-0 left-0 w-full p-4 flex items-center justify-between bg-gray-200 bg-opacity-75 z-20">
            <ChevronLeft />
            <h2 className="text-lg font-bold text-red-600 w-full text-center">Complete Your Profile</h2>
        </div>
    );
}
